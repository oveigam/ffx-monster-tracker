// @ts-check
import { defineConfig, } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  // image: {
  //   service: passthroughImageService(),
  // },

  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "es", "fr", "de", "it"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
});