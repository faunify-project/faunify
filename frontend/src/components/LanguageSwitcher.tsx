'use client'

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale, locales, asPath } = router

  return (
    <div>
      {locales?.map((lng) => (
        <Link key={lng} href={asPath} locale={lng}>
          <button disabled={lng === locale}>{lng.toUpperCase()}</button>
        </Link>
      ))}
    </div>
  )
}
