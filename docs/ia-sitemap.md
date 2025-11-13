# IA, Sitemap, and Wireframe Notes

- **Canonical routes**
  - `/` — Marketing home (hero with “Hello World”, promos, footer)
  - `/collections` — Product listing (filters: category/use/gender/intensity; sort: featured/newest/price)
  - `/collections/[collection]` — Scoped PLP by collection
  - `/product/[slug]` — Product detail
  - `/world` — World of Aether map (zoom/pan, hotspots)
  - `/about`, `/help` — Basic marketing content (TBD)

- **Nav model**
  - Top utility bar + primary nav (Nike-style). Mega-nav placeholder.
  - Search (stub), Account (stub), Bag (stub)

- **Wireframe notes**
  - Home: bold hero (single primary CTA), stacked promos, icon grid, dense footer.
  - PLP: filter bar (category/use/gender/intensity), sort dropdown, grid cards (image, title, price), pagination/infinite.
  - PDP: hero image, title, price, description, features, size/variant selector, add to bag, related products.
  - World: full-bleed canvas/SVG map; hotspots → slide-in panel with content.

- **States**
  - Edge: empty PLP, out-of-stock sizes; World with 0 POIs
  - Error: network error banners
  - Slow: skeletons and reduced-motion map animations
