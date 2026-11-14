import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/progetti/${project.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div
        className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <span className="text-6xl font-semibold tracking-tight text-white/70">
          {project.monogram}
        </span>
        <span className="absolute left-5 top-5 text-xs uppercase tracking-[0.2em] text-zinc-400">
          {project.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-white">
          {project.title[locale]}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.tagline[locale]}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
        <span className="pt-2 text-sm font-medium text-accent">
          {site[locale].projectsSection.cta} →
        </span>
      </div>
    </Link>
  );
}
