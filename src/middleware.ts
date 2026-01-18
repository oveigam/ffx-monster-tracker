import { defineMiddleware } from "astro:middleware";
import { langs } from "./util/langs";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    const acceptLanguage = context.request.headers.get("accept-language") || "";

    const locale = langs.find((lang) => acceptLanguage.includes(lang)) || "en";

    const targetUrl = new URL(`/${locale}/`, context.url);

    return new Response(null, {
      status: 307,
      headers: {
        Location: targetUrl.toString(),
      },
    });
  }

  return next();
});
