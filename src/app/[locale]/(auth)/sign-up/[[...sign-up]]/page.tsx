
import { SignUp, ClerkLoading } from '@clerk/nextjs';
import RoleToggle from '@/components/role-toggle';

export default async function SignUpPage({ searchParams }: { searchParams: { role?: string } }) {

  const role = searchParams.role || 'jobseeker';
  const validRoles = ['jobseeker', 'recruiter'];

  if (!validRoles.includes(role)) {
    return <div>无效的角色参数</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8">
        {/* 固定高度的容器，防止 CLS */}
        <div className="h-[660px] flex flex-col">
          {/* RoleToggle 固定在顶部 */}
          <div className="flex justify-center mb-6 flex-shrink-0">
            <RoleToggle initialRole={role} />
          </div>
          
          {/* SignUp 组件区域，占据剩余空间 */}
          <div className="flex-1 relative">
            <ClerkLoading>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse h-full">
                {/* 标题 */}
                <div className="text-center mb-6">
                  <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
                </div>
                
                {/* 社交登录按钮 */}
                <div className="flex justify-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                </div>
                
                {/* 分隔线 */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">或</span>
                  </div>
                </div>
                
                {/* 表单字段 */}
                <div className="space-y-4">
                  {/* 邮箱输入框 */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                  
                  {/* 密码输入框 */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                  
                  {/* 确认密码输入框 */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                  
                  {/* 注册按钮 */}
                  <div className="pt-2">
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
                
                {/* 底部链接 */}
                <div className="text-center mt-6">
                  <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
                </div>
              </div>
            </ClerkLoading>
            
            {/* SignUp 组件 */}
            <div className="absolute inset-0">
              <SignUp
                unsafeMetadata={{ role }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}