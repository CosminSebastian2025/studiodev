import type { Locale } from "@/lib/i18n";
import { email, site } from "@/content/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-zinc-500">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{site[locale].footer}</p>
        <a href={`mailto:${email}`} className="transition hover:text-white">
          {email}
        </a>
      </div>
    </footer>
  );
}
