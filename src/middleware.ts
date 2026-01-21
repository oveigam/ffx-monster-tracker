import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    const ua = context.request.headers.get("user-agent") || "unknown";
    const ip = context.request.headers.get("x-forwarded-for") || "unknown";
    const locale = context.preferredLocale || "en";

    console.log(`[Redirect Log]
      Preferred Locale: ${context.preferredLocale}
      Target Locale: ${locale}
      Device (user agent): ${ua}
      IP: ${ip}
    `);

    return context.redirect(`/${locale}/`);
  }

  return next();
});
