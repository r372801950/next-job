import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// const isPublicRoute = createRouteMatcher([
//   '/sign-in(.*)',
//   '/sign-up(.*)'
// ])

const isProtectedRoute = createRouteMatcher([
  // 在这里添加需要保护的路由
  // 例如：'/dashboard(.*)', '/profile(.*)'
  '/:locale/job(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // if (!isPublicRoute(req)) {
  //   await auth.protect()
  // }
  // 如果是受保护的路由，检查认证状态
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      // 用户未认证，重定向到登录页面
      return Response.redirect(new URL('/sign-in', req.url));
    }
  }

  // 继续处理国际化
  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};