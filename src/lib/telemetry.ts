export type TelemetryEvent =
  | "app.nav.click"
  | "app.home.hero_cta"
  | "app.collections.filter_change"
  | "app.product.view"
  | "app.product.add_to_bag_click"
  | "app.world.region_selected"
  | "app.world.poi_opened";

export function track(event: TelemetryEvent, payload: Record<string, unknown> = {}) {
  // Placeholder telemetry: logs to console; can be swapped for real client.
  if (process.env.NODE_ENV !== "production") {
    console.debug("telemetry", { event, payload, ts: Date.now() });
  }
}
