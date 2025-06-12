import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}

// In case of async components, you can use the awaitable getTranslations function instead:

// import {getTranslations} from 'next-intl/server';
 
// export default async function HomePage() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }