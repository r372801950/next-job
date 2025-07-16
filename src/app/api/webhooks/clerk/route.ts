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
    console.error('Webhook secret 未配置');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  try {
    const headers = Object.fromEntries(request.headers);
    const payload = await request.json();
    console.log('收到 Webhook 请求:', { url: request.url, headers, payload });

    // 验证 Webhook
    const webhook = new Webhook(webhookSecret);
    webhook.verify(JSON.stringify(payload), headers);

    // 处理 user.created 事件
    if (payload.type === 'user.created') {
      const userId = payload.data.id;
      const email = payload.data.email_addresses[0]?.email_address || null;
      const phone = payload.data.phone_numbers[0]?.phone_number || null;
      const role = payload.data.public_metadata?.role || 'jobseeker';
      const firstName = payload.data.first_name || null;
      const lastName = payload.data.last_name || null;
      const fullName = [firstName, lastName].filter(Boolean).join(' ') || null;
      const avatar = payload.data.image_url || payload.data.profile_image_url || null;

      // 更新 Clerk 用户元数据
      await clerkClient.users.updateUser(userId, {
        publicMetadata: { role },
      });

      // 插入用户到 clerk_users 表
      const { data: userData, error: userError } = await supabase
        .from('clerk_users')
        .insert({ clerk_user_id: userId, email, phone })
        .select();
      if (userError) {
        console.error('插入clerk_users失败:', userError.message);
        return NextResponse.json({ error: '插入用户失败', details: userError.message }, { status: 500 });
      }

      // 插入到 companies 表
      const { data: companyData, error: companyError } = await supabase
        .from('companies')
        .insert({
          clerk_user_id: userId,
          full_name: fullName,
          avatar: avatar,
          email_address: email,
          // 可选字段：根据需要设置默认值
          location: null,
          official_website: null,
          language_code: role === 'recruiter' ? 'en' : null, // 示例：根据角色设置
          size: null,
          category_tags: null,
          vote: null,
        })
        .select();
      if (companyError) {
        console.error('插入companies失败:', companyError.message);
        return NextResponse.json({ error: '插入公司失败', details: companyError.message }, { status: 500 });
      }

      // 插入到 talents 表
      const { data: talentData, error: talentError } = await supabase
        .from('talents')
        .insert({
          clerk_user_id: userId,
          full_name: fullName,
          avatar: avatar,
          location: null,
          vote: null,
        })
        .select();
      if (talentError) {
        console.error('插入talents失败:', talentError.message);
        return NextResponse.json({ error: '插入人才失败', details: talentError.message }, { status: 500 });
      }

      console.log(`用户 ${userId} 已插入，角色: ${role}`);
      console.log('插入结果:', {
        userData,
        companyData: { company_id: companyData[0]?.company_id, ...companyData[0] },
        talentData: { talent_id: talentData[0]?.talent_id, ...talentData[0] },
      });
      return NextResponse.json({
        success: true,
        company_id: companyData[0]?.company_id,
        talent_id: talentData[0]?.talent_id,
      });
    }

    return NextResponse.json({ error: '不支持的事件' }, { status: 400 });
  } catch (error) {
    // console.error('Webhook 处理失败:', error.message, error.stack);
    return NextResponse.json(
      { error: 'Webhook 处理失败', details: (error instanceof Error ? error.message : String(error)) },
      { status: 400 }
    );
  }
}