import type { MetadataRoute } from "next";

const SITE_URL = "https://leadjaeil.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ko"];
  const routes = ["", "/books", "/speaking", "/services", "/links"];

  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    }))
  );
}
