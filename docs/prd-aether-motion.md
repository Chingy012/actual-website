# Aether Motion — PRD (One-Pager)

- **Problem statement**
  Empower fitness-minded consumers to discover and evaluate high-performance apparel quickly on mobile, with a rich interactive brand world that drives engagement.

- **Target segments**
  Gen Z–Millennial, mobile-first, fitness/lifestyle. Primary geos: EN markets. Accessibility-first.

- **Primary JTBD**
  When I’m browsing for training gear, I want a fast way to compare options and understand fit/benefits so I can buy confidently.

- **Goals (leading metrics)**
  - Activation: homepage to PLP click-through rate
  - Conversion: PDP add-to-bag CTR; checkout handoff (out-of-scope system)
  - Engagement: World map interactions per session

- **Non-goals**
  - Checkout/payment (we’ll link out or stub)
  - Real inventory/fulfillment

- **Primary flows**
  - Home hero → Collections → PLP filter/sort → PDP view → Add to bag (stub)
  - Home → World of Aether → Explore regions/POIs → Content panel

- **Constraints**
  - CWV budgets: LCP < 2.5s, CLS < 0.1, route JS ≤ 150KB gz (marketing ≤ 90KB)
  - Progressive enhancement; usable with JS off for core PLP/PDP read flows

- **Risks & mitigations**
  - Heavy imagery → responsive images, preloads, caching
  - Complex map perf → layered tiles/SVG, debounce, reduced-motion support

- **Telemetry (events)**
  app.nav.click, app.home.hero_cta, app.collections.filter_change, app.product.view, app.product.add_to_bag_click, app.world.region_selected, app.world.poi_opened
