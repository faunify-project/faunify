import "./globals.css";
import type { ReactNode } from "react";
import { dir } from "i18next";

import nextI18NextConfig from "../../next-i18next.config.js";

import nextI18NextConfig from "../next-i18next.config.js";


export function generateStaticParams() {
  return nextI18NextConfig.i18n.locales.map((lng: string) => ({ locale: lng }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale || nextI18NextConfig.i18n.defaultLocale;
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>{children}</body>
    </html>
  );
}
