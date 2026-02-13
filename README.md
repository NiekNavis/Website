# Vakantiepark De Byvanck website

Modern Next.js 14 marketing website (NL default + EN secondary) for a Dutch holiday park/camping.

## Install & run

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start
```

Smoke tests:

```bash
pnpm test:smoke
```

## Environment variables

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
SMTP_TO=info@byvanck.nl
```

If SMTP vars are missing, contact form gracefully falls back and prompts mailto contact.

## Deployment (Vercel)

1. Import repo in Vercel
2. Set SMTP environment variables
3. Deploy (`next build` compatible)

## Content updates

Edit only:
- `content/site.ts` for facts, pricing, hours, legal, contacts
- `content/i18n/nl.json`
- `content/i18n/en.json`

## Asset TODOs

Replace placeholders:
- `public/hero-placeholder.svg`
- `public/map-placeholder.svg`
- `public/logo-placeholder.svg`
- `public/og-placeholder.svg`
- `public/algemene-voorwaarden.pdf`
