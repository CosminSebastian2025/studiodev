import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { name, site, siteUrl } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const copy = site[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: { it: "/it/", en: "/en/" },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: `/${lang}/`,
      siteName: name,
      locale: lang === "it" ? "it_IT" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 font-sans text-zinc-100 antialiased`}
      >
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
