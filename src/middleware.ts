import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    // 1. Standard Device Info
    const ua = context.request.headers.get("user-agent") || "unknown";

    // 2. Vercel-specific Geolocation headers (available at the Edge)
    const country = context.request.headers.get("x-vercel-ip-country") || "unknown";
    const city = context.request.headers.get("x-vercel-ip-city") || "unknown";
    const region = context.request.headers.get("x-vercel-ip-country-region") || "unknown";

    const vercelId = context.request.headers.get("x-vercel-id") || "unknown";
    const edgeRegion = vercelId.split("::")[0];

    console.log(`[Redirect Log]
      Edge Region: ${edgeRegion}
      Target Locale: ${context.preferredLocale}
      Device (UA): ${ua}
      Location: ${city}, ${region}, ${country}
      IP: ${context.request.headers.get("x-real-ip") || "unknown"}
    `);

    // TODO remove all that shit from before

    const locale = context.preferredLocale || "en";
    return context.redirect(`/${locale}/`);
  }

  return next();
});
