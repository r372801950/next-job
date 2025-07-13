import { createClerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function POST(request: NextRequest) {
  try {
    const { userId, newRole } = await request.json();

    if (!userId || !newRole) {
      return NextResponse.json(
        { error: 'Missing userId or newRole' },
        { status: 400 }
      );
    }


    // await clerkClient.users.updateUser(userId, {
    //   publicMetadata: { role },
    // });
    const response = await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        role: newRole
      }
    });

    return NextResponse.json({ success: true, user: response });
  } catch (error) {
    console.error('Error switching role:', error);
    return NextResponse.json(
      { error: 'Failed to switch role' },
      { status: 500 }
    );
  }
}
// export async function POST(request: NextRequest) {
//   const { userId } = await req.json()

//   await clerkClient.users.updateUserMetadata(userId, {
//     unsafeMetadata: {
//       birthday: '11-30-1969',
//     },
//   })

//   return Response.json({ success: true })
// }