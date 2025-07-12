// app/(main)/[locale]/layout.tsx
import { CommonLayout } from '@/components/common-layout';

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CommonLayout locale={locale} includeHeaderFooter={true}>{children}</CommonLayout>;
}