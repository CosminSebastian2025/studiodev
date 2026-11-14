# Portfolio

Portfolio bilingue (IT/EN) con Next.js 15, Tailwind CSS 4 ed export statico su Cloudflare Pages.

## Sviluppo

```bash
npm install
npm run dev
```

Apri http://localhost:3000/it/ (la root reindirizza a `/it/`).

## Dove modificare i contenuti

| File | Contenuto |
| --- | --- |
| `src/content/site.ts` | Nome, email, URL del sito, testi di hero, about, contatti |
| `src/content/projects.ts` | Case study: titolo, tagline, problema, approccio, risultati |
| `src/app/globals.css` | Colore accent e stili globali |
| `public/_redirects` | Redirect `/` → `/it/` |
| `wrangler.toml` | Nome del progetto Cloudflare Pages |

Sostituisci `name`, `email` e `siteUrl` in `src/content/site.ts`, poi imposta
`NEXT_PUBLIC_SITE_URL` (vedi `.env.example`) con il dominio finale.

## Struttura

```
src/
  app/
    (site)/[lang]/           layout, home e case study per IT ed EN
    (redirect)/              redirect della root verso /it/
    sitemap.ts, robots.ts    SEO statica
  components/                header, footer, language switcher, project card
  content/                   testi e dati dei progetti
  lib/i18n.ts                locale supportati
public/
  _redirects, _headers       configurazione Cloudflare Pages
```

## Build e deploy

```bash
npm run build          # genera out/ (sito statico)
npx wrangler login     # una sola volta
npm run deploy         # build + publish su Cloudflare Pages
```

Cloudflare Pages serve `out/` come sito statico. Il progetto si chiama
`cosmi-portfolio` (modificalo in `wrangler.toml` e in `package.json` se è già
in uso). Per un dominio personalizzato: dashboard Cloudflare → Pages →
progetto → Custom domains.
