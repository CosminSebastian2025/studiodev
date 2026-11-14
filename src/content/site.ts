import type { Locale } from "@/lib/i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://studiodev.pages.dev";

export const siteName = "StudioDev";
export const email = "unknowguy226@gmail.com";

type Copy = {
  meta: { title: string; description: string };
  nav: { projects: string; services: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  projectsSection: { title: string; intro: string; cta: string };
  services: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  about: { title: string; paragraphs: string[] };
  contact: { title: string; text: string; cta: string };
  footer: string;
  caseStudy: {
    back: string;
    problem: string;
    approach: string;
    evidence: string;
    note: string;
    cta: string;
  };
  language: { switchTo: string };
};

export const site: Record<Locale, Copy> = {
  it: {
    meta: {
      title: `${siteName} — Portfolio`,
      description:
        "Sviluppatore full-stack. Case study di un'app di dating cross-platform, una piattaforma Web + API e un password manager zero-knowledge in Rust.",
    },
    nav: { projects: "Progetti", services: "Servizi", about: "Chi sono", contact: "Contatti" },
    hero: {
      eyebrow: "Sviluppatore full-stack",
      title: "Costruisco prodotti completi, dal database all'interfaccia.",
      subtitle:
        "App mobile, web e backend. TypeScript end-to-end, test sul codice critico, deploy automatici.",
      primary: "Guarda i progetti",
      secondary: "Scrivimi",
    },
    projectsSection: {
      title: "Progetti",
      intro:
        "Tre prodotti costruiti da solo, dal primo schema al deploy. Ogni case study dice cosa funziona oggi, senza promesse gonfiate.",
      cta: "Leggi il case study",
    },
    services: {
      title: "Servizi",
      intro:
        "Costruisco progetti da zero, ma accetto anche interventi mirati su qualcosa che esiste già.",
      items: [
        {
          title: "Siti web e web app",
          text: "Siti vetrina, landing page e web app con Next.js: design, sviluppo e deploy.",
        },
        {
          title: "App mobile",
          text: "App iOS e Android con React Native ed Expo, da un'unica codebase.",
        },
        {
          title: "App desktop",
          text: "Applicazioni desktop multipiattaforma, anche collegate a un backend esistente.",
        },
        {
          title: "Piccole migliorie",
          text: "Bug fix, nuove sezioni, ottimizzazioni e piccole funzionalità su siti e app già online.",
        },
      ],
    },
    about: {
      title: "Come lavoro",
      paragraphs: [
        "Sviluppo da solo prodotti completi: definisco il modello dati, costruisco API e client, configuro CI e deploy. Preferisco un'architettura semplice e tipizzata a un framework in più.",
        "Stack principale: TypeScript, React Native con Expo, Next.js, NestJS e PostgreSQL. Quando il problema è crittografico o a basso livello, uso Rust.",
        "Documento sempre lo stato reale di un progetto: cosa è testato, cosa manca e cosa non va messo in produzione. È la parte che rende utile un portfolio.",
      ],
    },
    contact: {
      title: "Parliamone",
      text: "Hai un prodotto da costruire o un sito/app da migliorare, anche solo in piccolo? Bug fix, una nuova sezione, una funzionalità veloce: scrivimi e ti rispondo con tempi e preventivo.",
      cta: "Invia una email",
    },
    footer: `© 2026 ${siteName}. Costruito con Next.js, pubblicato su Cloudflare Pages.`,
    caseStudy: {
      back: "Tutti i progetti",
      problem: "Il problema",
      approach: "Come l'ho costruito",
      evidence: "Cosa funziona oggi",
      note: "Nota",
      cta: "Vuoi vedere il codice? Scrivimi.",
    },
    language: { switchTo: "Cambia lingua" },
  },
  en: {
    meta: {
      title: `${siteName} — Portfolio`,
      description:
        "Full-stack developer. Case studies of a cross-platform dating app, a Web + API platform and a zero-knowledge password manager written in Rust.",
    },
    nav: { projects: "Projects", services: "Services", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Full-stack developer",
      title: "I build complete products, from database to interface.",
      subtitle:
        "Mobile apps, web and backend. End-to-end TypeScript, tests on critical code, automated deploys.",
      primary: "See the projects",
      secondary: "Get in touch",
    },
    projectsSection: {
      title: "Projects",
      intro:
        "Three products built solo, from the first schema to deploy. Every case study states what works today — no inflated claims.",
      cta: "Read the case study",
    },
    services: {
      title: "Services",
      intro:
        "I build products from scratch, but I also take focused work on something that already exists.",
      items: [
        {
          title: "Websites and web apps",
          text: "Marketing sites, landing pages and web apps with Next.js: design, development and deploy.",
        },
        {
          title: "Mobile apps",
          text: "iOS and Android apps with React Native and Expo, from a single codebase.",
        },
        {
          title: "Desktop apps",
          text: "Cross-platform desktop applications, connected to your existing backend too.",
        },
        {
          title: "Small improvements",
          text: "Bug fixes, new sections, performance tuning and small features on websites and apps already online.",
        },
      ],
    },
    about: {
      title: "How I work",
      paragraphs: [
        "I build complete products on my own: I design the data model, build the API and the clients, set up CI and deploys. I prefer a simple, typed architecture over one more framework.",
        "Main stack: TypeScript, React Native with Expo, Next.js, NestJS and PostgreSQL. When the problem is cryptographic or low-level, I use Rust.",
        "I always document the real state of a project: what is tested, what is missing and what should not go to production. That is what makes a portfolio useful.",
      ],
    },
    contact: {
      title: "Let's talk",
      text: "Building a product, or need a website or app improved — even just a small fix? A bug, a new section, a quick feature: tell me what you need and I'll reply with timing and a quote.",
      cta: "Send an email",
    },
    footer: `© 2026 ${siteName}. Built with Next.js, deployed on Cloudflare Pages.`,
    caseStudy: {
      back: "All projects",
      problem: "The problem",
      approach: "How I built it",
      evidence: "What works today",
      note: "Note",
      cta: "Want to see the code? Get in touch.",
    },
    language: { switchTo: "Switch language" },
  },
};
