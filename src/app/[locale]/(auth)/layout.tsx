// app/(auth)/[locale]/layout.tsx
import { CommonLayout } from '@/components/common-layout';

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CommonLayout locale={locale} includeHeaderFooter={false}>{children}</CommonLayout>;
}