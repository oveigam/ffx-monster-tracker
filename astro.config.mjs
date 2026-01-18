//  @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),

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