/**
 * Set SITE_URL to the canonical, public production origin (for example,
 * https://www.example.com). Otherwise use the owner's confirmed production
 * origin. Preview deployment URLs are deliberately never inferred.
 */
export function getSiteUrl(): URL | undefined {
  const configuredUrl =
    process.env.SITE_URL?.trim() || "https://motive9media.vercel.app";
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(
      configuredUrl.startsWith("http")
        ? configuredUrl
        : `https://${configuredUrl}`,
    );
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export function canonicalUrl(path: string): string | undefined {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
