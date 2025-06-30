'use client'

import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return <h2 className="text-2xl font-semibold">{t('welcome')}</h2>;
}
