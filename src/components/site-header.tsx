import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { site, siteName } from "@/content/site";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = site[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href={`/${locale}/`}
          className="text-sm font-semibold tracking-tight text-white"
        >
          {siteName}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-400">
          <span className="hidden items-center gap-5 sm:flex">
            <Link className="transition hover:text-white" href={`/${locale}/#progetti`}>
              {copy.nav.projects}
            </Link>
            <Link className="transition hover:text-white" href={`/${locale}/#servizi`}>
              {copy.nav.services}
            </Link>
            <Link className="transition hover:text-white" href={`/${locale}/#chi-sono`}>
              {copy.nav.about}
            </Link>
            <Link className="transition hover:text-white" href={`/${locale}/#contatti`}>
              {copy.nav.contact}
            </Link>
          </span>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
