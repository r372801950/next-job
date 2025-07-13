import { Webhook } from 'svix';
import { createClient } from '@supabase/supabase-js';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import { NextResponse } from 'next/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  try {
    const headers = Object.fromEntries(request.headers);
    const payload = await request.json();

    // 验证Webhook
    const webhook = new Webhook(webhookSecret);
    webhook.verify(JSON.stringify(payload), headers);

    // 处理 user.created 事件
    if (payload.type === 'user.created') {
      const userId = payload.data.id;
      const email = payload.data.email_addresses[0]?.email_address || null;
      const phone = payload.data.phone_numbers[0]?.phone_number || null;
      const role = payload.data.public_metadata?.role || 'jobseeker';

      // 更新Clerk用户元数据
      await clerkClient.users.updateUser(userId, {
        publicMetadata: { role },
      });

      // 插入用户到clerk_users表
      const { error: userError } = await supabase
        .from('clerk_users')
        .insert({ clerk_user_id: userId, email, phone });

      if (userError) {
        console.error('插入clerk_users失败:', userError);
        return NextResponse.json({ error: '插入用户失败' }, { status: 500 });
      }

      // 同时生成company_id和talent_id
      const { error: companyError } = await supabase
        .from('companies')
        .insert({ clerk_user_id: userId });

      if (companyError) {
        console.error('插入companies失败:', companyError);
        return NextResponse.json({ error: '插入公司失败' }, { status: 500 });
      }

      const { error: talentError } = await supabase
        .from('talents')
        .insert({ clerk_user_id: userId });

      if (talentError) {
        console.error('插入talents失败:', talentError);
        return NextResponse.json({ error: '插入人才失败' }, { status: 500 });
      }

      console.log(`用户 ${userId} 已插入，角色: ${role}，company_id和talent_id已生成`);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: '不支持的事件' }, { status: 400 });
  } catch (error) {
    console.error('Webhook 处理失败:', error);
    return NextResponse.json({ error: 'Webhook 处理失败' }, { status: 400 });
  }
}