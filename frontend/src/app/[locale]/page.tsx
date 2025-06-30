'use client'

import { useTranslation } from 'next-i18next';

import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('donate')}</button>
      <LanguageSwitcher />
    </div>
  );


export default function Home() {
  const { t } = useTranslation('common');
  return <h2 className="text-2xl font-semibold">{t('welcome')}</h2>;

}
