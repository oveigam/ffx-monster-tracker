import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  console.log("--- MIDDLEWARE EXECUTION ---");

  if (context.url.pathname === "/") {
    const acceptLanguage = context.request.headers.get("accept-language") || "";

    const supported = ["en", "es", "fr", "de", "it"];
    const locale = supported.find((lang) => acceptLanguage.includes(lang)) || "en";

    console.log(`[REDIRECT] Header: ${acceptLanguage} -> Selected: ${locale}`);

    const targetUrl = new URL(`/${locale}/`, context.url);

    return new Response(null, {
      status: 302,
      headers: {
        Location: targetUrl.toString(),
      },
    });
  }

  return next();
});
