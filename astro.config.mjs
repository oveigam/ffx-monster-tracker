// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
    imageService: true,
  }),
  image: {
    service: passthroughImageService(),
  },

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