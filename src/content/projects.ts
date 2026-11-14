import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  monogram: string;
  year: string;
  stack: string[];
  gradient: string;
  title: Localized<string>;
  tagline: Localized<string>;
  status: Localized<string>;
  problem: Localized<string>;
  approach: Localized<string[]>;
  evidence: Localized<string[]>;
  note: Localized<string>;
};

export const projects: Project[] = [
  {
    slug: "fiamma",
    monogram: "F",
    year: "2026",
    stack: [
      "Expo SDK 58",
      "React Native",
      "TypeScript",
      "Supabase",
      "PostGIS",
      "Realtime",
      "Cloudflare R2",
    ],
    gradient: "from-orange-500/25 via-amber-500/10 to-transparent",
    title: { it: "Fiamma", en: "Fiamma" },
    tagline: {
      it: "App di dating cross-platform, dal profilo al match.",
      en: "Cross-platform dating app, from profile to match.",
    },
    status: { it: "MVP funzionante", en: "Working MVP" },
    problem: {
      it: "Costruire un MVP di dating che funzioni su iOS, Android e web senza triplicare il codice, gestendo foto, geolocalizzazione e chat in tempo reale.",
      en: "Build a dating MVP that works on iOS, Android and web without tripling the codebase, while handling photos, geolocation and realtime chat.",
    },
    approach: {
      it: [
        "Un solo client Expo + Expo Router per iOS, Android e web.",
        "Supabase per PostgreSQL con PostGIS, autenticazione, realtime ed Edge Functions.",
        "Foto su Cloudflare R2 con URL firmati, resize e rimozione EXIF lato client.",
        "Match reciproco e chat realtime con regali, sticker e monete digitali.",
      ],
      en: [
        "A single Expo + Expo Router client for iOS, Android and web.",
        "Supabase for PostgreSQL with PostGIS, auth, realtime and Edge Functions.",
        "Photos on Cloudflare R2 with signed URLs, client-side resize and EXIF stripping.",
        "Mutual matching and realtime chat with gifts, stickers and digital coins.",
      ],
    },
    evidence: {
      it: [
        "MVP funzionante su iOS, Android e web.",
        "Discovery geolocalizzata su PostgreSQL con PostGIS.",
        "Blocco, segnalazione e cancellazione account già inclusi.",
      ],
      en: [
        "Working MVP on iOS, Android and web.",
        "Location-based discovery on PostgreSQL with PostGIS.",
        "Blocking, reporting and account deletion already included.",
      ],
    },
    note: {
      it: "Repository privato: il codice è disponibile su richiesta.",
      en: "Private repository: the code is available on request.",
    },
  },
  {
    slug: "piattaforma",
    monogram: "P",
    year: "2026",
    stack: [
      "Next.js 15",
      "Tailwind CSS 4",
      "NestJS 11",
      "Drizzle ORM",
      "PostgreSQL",
      "Zod",
      "Turborepo",
      "Fly.io",
      "GitHub Actions",
    ],
    gradient: "from-sky-500/25 via-blue-500/10 to-transparent",
    title: { it: "Piattaforma Web + API", en: "Web + API Platform" },
    tagline: {
      it: "Un backend, due client: web subito, app mobile dopo.",
      en: "One backend, two clients: web first, mobile next.",
    },
    status: { it: "Base funzionante", en: "Working foundation" },
    problem: {
      it: "Partire dal sito web senza precludersi l'app mobile, evitando di riscrivere la stessa logica due volte.",
      en: "Start with the website without ruling out a mobile app later, and without writing the same logic twice.",
    },
    approach: {
      it: [
        "Monorepo Turborepo con app web e API separate.",
        "Next.js 15 e Tailwind CSS 4 sul frontend, NestJS 11 e Drizzle ORM sul backend.",
        "Tipi e schemi Zod condivisi in un package comune: un solo contratto per API e client.",
        "PostgreSQL locale con Docker Compose, API su Fly.io e CI su GitHub Actions.",
      ],
      en: [
        "Turborepo monorepo with separate web and API apps.",
        "Next.js 15 and Tailwind CSS 4 on the frontend, NestJS 11 and Drizzle ORM on the backend.",
        "Types and Zod schemas shared in a common package: a single contract for API and clients.",
        "Local PostgreSQL with Docker Compose, API on Fly.io and CI on GitHub Actions.",
      ],
    },
    evidence: {
      it: [
        "Web e API che compilano e girano da un unico comando.",
        "Contratti condivisi tra backend e client.",
        "Pipeline CI/CD e configurazione di deploy incluse.",
      ],
      en: [
        "Web and API build and run from a single command.",
        "Contracts shared between backend and clients.",
        "CI/CD pipeline and deploy configuration included.",
      ],
    },
    note: {
      it: "Repository privato: il codice è disponibile su richiesta.",
      en: "Private repository: the code is available on request.",
    },
  },
  {
    slug: "vault",
    monogram: "V",
    year: "2026",
    stack: [
      "Rust",
      "Axum",
      "sqlx",
      "PostgreSQL",
      "WASM",
      "UniFFI",
      "OIDC",
    ],
    gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    title: { it: "Vault", en: "Vault" },
    tagline: {
      it: "Il nucleo di un password manager zero-knowledge.",
      en: "The core of a zero-knowledge password manager.",
    },
    status: {
      it: "Motore e server pronti, autenticazione IdP da completare",
      en: "Engine and server ready, IdP authentication pending",
    },
    problem: {
      it: "Dimostrare che la crittografia lato client e il contratto server di un password manager zero-knowledge possono essere implementati e testati davvero.",
      en: "Prove that the client-side cryptography and server contract of a zero-knowledge password manager can actually be implemented and tested.",
    },
    approach: {
      it: [
        "KDF e gerarchia delle chiavi in un crate Rust dedicato.",
        "Blob cifrati AEAD, condivisione e sincronizzazione transazionale.",
        "Chiavi Ed25519 per dispositivo e recovery kit.",
        "Route Axum + sqlx conformi a openapi.yaml; binding WASM, Kotlin e Swift via UniFFI.",
      ],
      en: [
        "KDF and key hierarchy in a dedicated Rust crate.",
        "AEAD encrypted blobs, sharing and transactional sync.",
        "Ed25519 per-device keys and a recovery kit.",
        "Axum + sqlx routes matching openapi.yaml; WASM, Kotlin and Swift bindings via UniFFI.",
      ],
    },
    evidence: {
      it: [
        "9 test verdi sul motore crittografico.",
        "5 test di integrazione contro un PostgreSQL reale: ETag/409, sync e idempotenza.",
        "Crate WASM compilato; binding Kotlin e Swift generati.",
      ],
      en: [
        "9 passing tests on the crypto engine.",
        "5 integration tests against a real PostgreSQL: ETag/409, sync and idempotency.",
        "Compiled WASM crate; Kotlin and Swift bindings generated.",
      ],
    },
    note: {
      it: "Non è pronto per la produzione senza un audit di sicurezza esterno: lo stato reale è documentato nel repository.",
      en: "Not production-ready without an external security audit: the real status is documented in the repository.",
    },
  },
];
