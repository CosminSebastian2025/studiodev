import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { email, site } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const copy = site[lang];

  return (
    <main>
      <section className="mx-auto w-full max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
          {copy.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {copy.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#progetti"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            {copy.hero.primary}
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
          >
            {copy.hero.secondary}
          </a>
        </div>
      </section>

      <section id="progetti" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {copy.projectsSection.title}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
              {copy.projectsSection.intro}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={lang} />
            ))}
          </div>
        </div>
      </section>

      <section id="chi-sono" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {copy.about.title}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="servizi" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {copy.services.title}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
              {copy.services.intro}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {copy.services.items.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="font-medium text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {copy.contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">
              {copy.contact.text}
            </p>
          </div>
          <Link
            href={`mailto:${email}`}
            className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            {copy.contact.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
