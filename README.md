# Vux Portfolio

The English-first personal portfolio of Vux, built with Nuxt 4, Nuxt UI,
Tailwind CSS, and Motion for Vue.

## Local development

```bash
pnpm install
pnpm dev
```

The app uses Nuxt universal rendering with SSR enabled explicitly. Profile,
experience, and project data live in `app/data/portfolio.ts`; there is no
runtime LinkedIn or GitHub sync.

## Production

```bash
pnpm build
pnpm preview
```

Vercel can deploy the repository with framework auto-detection and the default
`nuxt build` command. The site URL automatically uses Vercel's
`VERCEL_PROJECT_PRODUCTION_URL`, including the generated `*.vercel.app` domain.
`NUXT_PUBLIC_SITE_URL` remains available as an optional override.

## Content rules

- Keep Qualgo descriptions high level.
- Never invent impact metrics, traffic, latency, or team sizes.
- Do not add a portrait, CV, age, salary, or other private profile data.
- Planned writing must remain visibly labeled as planned.
