'use client';

import { ArrowRightLeft, Briefcase, User } from 'lucide-react';
import { SecondaryButton } from './secondary-button';
import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { usePathname } from '@/i18n/navigation';
import { useRouter } from 'next/navigation';
import { ROLES, getFilteredNavLinks, type UserRole } from '@/lib/permissions';

// 定义翻译对象的类型
interface HeaderTranslations {
  navigation: {
    job: string;
    talent: string;
    investment: string;
    information: string;
  };
  auth: {
    signIn: string;
    signUp: string;
  };
  userMenu: {
    profileSettings: string;
    switchToTalent: string;
    switchToCorporate: string;
  };
  language: string;
}


interface SiteHeaderProps {
  translations: HeaderTranslations;
  locale: string;
  role: UserRole;
  userId?: string;
}

export function SiteHeader({ translations, locale, role, userId }: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // 所有可用的导航链接
  const allNavLinks = [
    { href: '/job', label: translations.navigation.job, key: 'job' },
    { href: '/talent', label: translations.navigation.talent, key: 'talent' },
    { href: '/investment', label: translations.navigation.investment, key: 'investment' },
    { href: '/information', label: translations.navigation.information, key: 'information' },
  ];

  // 根据角色过滤导航链接
  const navLinks = getFilteredNavLinks(role, allNavLinks);

  // 切换语言的函数
  const switchLocale = (newLocale: string) => {
    console.log(newLocale, pathname, 'switchLocale');
    router.push(`/${newLocale}${pathname}`);
  };

  // 语言切换配置
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
  ];

  // 通用语言切换样式
  const getLanguageStyle = (langCode: string) =>
    `hidden sm:inline cursor-pointer transition-colors ${locale === langCode ? 'text-white' : 'text-gray-300 hover:text-white'
    }`;

  const switchRole = async () => {
    console.log('switchRole');
    try {
      const response = await fetch('/api/user/switch-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          newRole: ROLES.RECRUITER
        }),
      });

      if (response.ok) {
        console.log('Role switched successfully');
        // 可以在这里添加成功提示或页面刷新
      } else {
        console.error('Failed to switch role');
      }
    } catch (error) {
      console.error('Error switching role:', error);
    }
  }

  return (
    <header className="relative z-20 pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border rounded-lg border-[#FFFFFF0F]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Get Jobs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${link.href}`}
                className={
                  pathname === link.href
                    ? 'text-white transition-colors'
                    : 'text-gray-300 hover:text-white transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* 语言切换 */}
            <div className="hidden sm:flex items-center space-x-1">
              {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                  <span
                    className={getLanguageStyle(lang.code)}
                    onClick={() => switchLocale(lang.code)}
                  >
                    {lang.label}
                  </span>
                  {index < languages.length - 1 && (
                    <span className="mx-1 text-gray-300"> / </span>
                  )}
                </div>
              ))}
            </div>

            {/* 认证部分 */}
            <div className='min-w-8 min-h-9'>{/* 防止CLS */}
              <SignedOut>
                <div className="flex items-center space-x-2">
                  {/* <SignInButton mode="modal">
                    <SecondaryButton size="sm">{translations.auth.signIn}</SecondaryButton>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <SecondaryButton size="sm">{translations.auth.signUp}</SecondaryButton>
                  </SignUpButton> */}
                  <Link href="/sign-in">
                    <SecondaryButton size="sm">{translations.auth.signIn}</SecondaryButton>
                  </Link>
                  <Link href="/sign-up">
                    <SecondaryButton size="sm">{translations.auth.signUp}</SecondaryButton>
                  </Link>

                </div>
              </SignedOut>

              <SignedIn>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label={translations.userMenu.profileSettings}
                      labelIcon={<User size={16} strokeWidth={2.5} />}
                      onClick={() => router.push('/profile')}
                    />
                    <UserButton.Action
                      label={role === ROLES.RECRUITER ? translations.userMenu.switchToTalent : translations.userMenu.switchToCorporate}
                      labelIcon={<ArrowRightLeft size={16} strokeWidth={1.8} />}
                      onClick={() => switchRole()}
                    />
                  </UserButton.MenuItems>
                </UserButton>
                {/* <CustomUserMenu /> */}
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}