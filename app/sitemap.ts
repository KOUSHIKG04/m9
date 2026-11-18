import type { MetadataRoute } from "next";
import { articles, projects } from "@/features/agency/content";
import { servicePages } from "@/features/agency/service-content";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    ...servicePages.map(({ slug }) => `/services/${slug}`),
    ...projects.map(({ slug }) => `/work/${slug}`),
    ...articles.map(({ slug }) => `/journal/${slug}`),
  ];

  return routes.flatMap((path) => {
    const url = canonicalUrl(path);
    return url ? [{ url }] : [];
  });
}
