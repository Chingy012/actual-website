# Architecture Overview

- **Stack**
  Next.js App Router + React + TypeScript (strict). Tailwind v4. RHF+Zod later. TanStack Query installed.

- **Routing**
  Route groups: (marketing), (product), (experience). Implemented: `/`, `/collections`, `/collections/[collection]`, `/product/[slug]`, `/world`.

- **Rendering strategy**
  Marketing pages SSG; product pages SSR/SSG depending on data. Current demo uses static with params.

- **Folder structure**
  src/app, src/features (TBD), src/components (TBD), src/styles, src/lib, src/config (TBD), src/content (TBD), src/tests (utils).

- **Performance budgets**
  LCP < 2.5s, CLS < 0.1, JS ≤ 150KB gz (marketing ≤ 90KB). Image strategy and code-splitting to be enforced.

- **Telemetry & flags**
  Thin client in `src/lib/telemetry.ts`; flags in `src/lib/flags.ts`.
