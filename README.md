# Vux Portfolio

The English-first personal portfolio of Vux, built with Nuxt 4, Nuxt UI,
Tailwind CSS, and Motion for Vue, hosted on Cloudflare Workers.

## Local development

```bash
pnpm install
pnpm dev
```

The app uses Nuxt universal rendering with SSR enabled explicitly. Profile,
experience, and project data live in `app/data/portfolio.ts`; there is no
runtime LinkedIn or GitHub sync.

## Production

The site is fully prerendered (`nuxt generate`) and served as static assets
by a Cloudflare Worker at <https://vumht.dev>. See `wrangler.jsonc`.

```bash
pnpm preview   # generate + serve locally with wrangler dev
pnpm deploy    # generate + wrangler deploy (needs `wrangler login`)
```

Deploys normally run through Cloudflare Workers Builds connected to this
repository: pushes to `main` deploy to production, other branches get preview
URLs. Preview builds (`WORKERS_CI_BRANCH` != `main`) are marked noindex.
`NUXT_PUBLIC_SITE_URL` overrides the default `https://vumht.dev`.

## Content rules

- Keep Qualgo descriptions high level.
- Never invent impact metrics, traffic, latency, or team sizes.
- Do not add a portrait, CV, age, salary, or other private profile data.
