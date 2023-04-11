export const langs = ["en", "es", "fr", "de", "it"] as const;

export type Lang = (typeof langs)[number];
