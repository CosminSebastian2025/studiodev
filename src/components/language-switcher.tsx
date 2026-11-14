"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { site } from "@/content/site";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}/`;

  return (
    <div
      className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest"
      aria-label={site[locale].language.switchTo}
    >
      {locales.map((code) => {
        const target = /^\/(it|en)(?=\/|$)/.test(pathname)
          ? pathname.replace(/^\/(it|en)(?=\/|$)/, `/${code}`)
          : `/${code}/`;
        const isActive = code === locale;

        return (
          <Link
            key={code}
            href={target}
            aria-current={isActive ? "true" : undefined}
            className={
              isActive
                ? "px-1 text-white"
                : "px-1 text-zinc-500 transition hover:text-white"
            }
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
