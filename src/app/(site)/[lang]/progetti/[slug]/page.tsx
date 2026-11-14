import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { email, siteName, site } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title[lang]} — ${siteName}`,
    description: project.tagline[lang],
    alternates: {
      canonical: `/${lang}/progetti/${slug}/`,
      languages: {
        it: `/it/progetti/${slug}/`,
        en: `/en/progetti/${slug}/`,
      },
    },
    openGraph: {
      title: `${project.title[lang]} — ${siteName}`,
      description: project.tagline[lang],
      url: `/${lang}/progetti/${slug}/`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const copy = site[lang];

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-16">
      <Link
        href={`/${lang}/#progetti`}
        className="text-sm text-zinc-500 transition hover:text-white"
      >
        ← {copy.caseStudy.back}
      </Link>

      <p className="mt-10 text-xs uppercase tracking-[0.25em] text-accent">
        {project.year} · {project.status[lang]}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {project.title[lang]}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
        {project.tagline[lang]}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>

      <div
        className={`mt-12 flex aspect-[21/9] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
      >
        <span className="text-7xl font-semibold tracking-tight text-white/70">
          {project.monogram}
        </span>
      </div>

      <section className="mt-14">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {copy.caseStudy.problem}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          {project.problem[lang]}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {copy.caseStudy.approach}
        </h2>
        <ul className="mt-4 space-y-3">
          {project.approach[lang].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-zinc-300"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {copy.caseStudy.evidence}
        </h2>
        <ul className="mt-4 space-y-3">
          {project.evidence[lang].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-zinc-300"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 border-l-2 border-accent pl-4 text-sm leading-relaxed text-zinc-400">
        <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-zinc-500">
          {copy.caseStudy.note}
        </span>
        {project.note[lang]}
      </p>

      <div className="mt-14 border-t border-white/10 pt-8">
        <a
          href={`mailto:${email}`}
          className="text-sm font-medium text-accent transition hover:underline"
        >
          {copy.caseStudy.cta}
        </a>
      </div>
    </main>
  );
}
