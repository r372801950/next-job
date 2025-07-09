import { Webhook } from 'svix';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import { NextResponse } from 'next/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function POST(request: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  try {
    const headers = Object.fromEntries(request.headers);
    const payload = await request.json();

    // 验证 Webhook
    const webhook = new Webhook(webhookSecret);
    webhook.verify(JSON.stringify(payload), headers);

    // 处理 user.created 事件
    if (payload.type === 'user.created') {
      const userId = payload.data.id;
      const role = payload.data.public_metadata?.role || 'jobseeker'; // 默认角色或从注册时传递

      await clerkClient.users.updateUser(userId, {
        publicMetadata: { role },
      });

      console.log(`用户 ${userId} 的角色已设置为 ${role}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook 处理失败:', error);
    return NextResponse.json({ error: 'Webhook 处理失败' }, { status: 400 });
  }
}