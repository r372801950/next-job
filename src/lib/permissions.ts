// 角色权限配置
export const ROLES = {
  JOBSEEKER: 'jobseeker',
  RECRUITER: 'recruiter',
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

// 导航权限配置
export const NAVIGATION_PERMISSIONS = {
  [ROLES.JOBSEEKER]: [
    'job',
    'investment', 
    'information'
  ],
  [ROLES.RECRUITER]: [
    'job',
    'talent',
    'investment',
    'information'
  ],
} as const;

// 检查用户是否有权限访问某个导航
export function hasNavigationPermission(role: UserRole, navigationKey: string): boolean {
  return NAVIGATION_PERMISSIONS[role]?.includes(navigationKey as any) || false;
}

// 根据角色过滤导航链接
export function getFilteredNavLinks(role: UserRole, allNavLinks: Array<{href: string, label: string, key: string}>) {
  return allNavLinks.filter(link => hasNavigationPermission(role, link.key));
} 