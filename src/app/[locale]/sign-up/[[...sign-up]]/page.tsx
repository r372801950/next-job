'use client';

import { SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'jobseeker'; // 默认角色为求职者
  const [error, setError] = useState('');

  // 验证角色是否有效
  const validRoles = ['jobseeker', 'recruiter'];
  if (!validRoles.includes(role)) {
    setError('无效的角色参数');
    return <div>{error}</div>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{role === 'jobseeker' ? '求职者注册' : '招聘方注册'}</h1>
      <p>
        {role === 'jobseeker'
          ? '加入我们，找到你的理想工作！'
          : '注册成为招聘方，发布职位并找到优秀人才！'}
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SignUp
        unsafeMetadata={{ role }} // 传递角色到 unsafeMetadata
        afterSignUpUrl={role === 'jobseeker' ? '/jobseeker-dashboard' : '/recruiter-dashboard'}
      />
    </div>
  );
}