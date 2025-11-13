export type FlagKey =
  | "world_map_enabled"
  | "plp_experiment_v1";

const defaults: Record<FlagKey, boolean> = {
  world_map_enabled: true,
  plp_experiment_v1: false,
};

export function flagEnabled(key: FlagKey): boolean {
  const env = process.env[`NEXT_PUBLIC_FLAG_${key.toUpperCase()}` as keyof NodeJS.ProcessEnv];
  if (typeof env === "string") return env === "1" || env.toLowerCase() === "true";
  return defaults[key];
}
