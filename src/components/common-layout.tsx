// components/common-layout.tsx
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { isRtlLang } from 'rtl-detect';
import { ClerkProvider } from '@clerk/nextjs';
import { enUS, zhCN } from '@clerk/localizations';
import { getTranslations } from 'next-intl/server';
import { currentUser } from '@clerk/nextjs/server';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import { ROLES, type UserRole } from '@/lib/permissions';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import { AnimatedBackground } from './animated-background';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function CommonLayout({
  children,
  locale,
  includeHeaderFooter = true,
}: {
  children: React.ReactNode;
  locale: string;
  includeHeaderFooter?: boolean;
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const user = await currentUser();
  let role: UserRole = ROLES.JOBSEEKER;

  if (user) {
    try {
      const clerkUser = await clerkClient.users.getUser(user.id);
      const userRole = clerkUser.unsafeMetadata?.role;
      if (userRole === ROLES.RECRUITER || userRole === ROLES.JOBSEEKER) {
        role = userRole;
      }
    } catch (error) {
      console.error('获取 unsafeMetadata 失败:', error);
    }
  }

  const direction = isRtlLang(locale) ? 'rtl' : 'ltr';
  const t = await getTranslations('Header');
  const headerTranslations = {
    navigation: {
      job: t('navigation.job'),
      talent: t('navigation.talent'),
      investment: t('navigation.investment'),
      information: t('navigation.information'),
    },
    auth: {
      signIn: t('auth.signIn'),
      signUp: t('auth.signUp'),
    },
    userMenu: {
      profileSettings: t('userMenu.profileSettings'),
      switchToTalent: t('userMenu.switchToTalent'),
      switchToCorporate: t('userMenu.switchToCorporate'),
    },
    language: t('language'),
  };

  return (
    <ClerkProvider localization={locale === 'zh' ? zhCN : enUS} afterSignOutUrl={'/'}>
      <html lang={locale} dir={direction}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative`}
        >
          <NextIntlClientProvider locale={locale}>
            {includeHeaderFooter && <AnimatedBackground />}
            {includeHeaderFooter && (
              <SiteHeader
                translations={headerTranslations}
                locale={locale}
                role={role}
                userId={user?.id}
              />
            )}
            {children}
            {includeHeaderFooter && <SiteFooter locale={locale} />}
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}