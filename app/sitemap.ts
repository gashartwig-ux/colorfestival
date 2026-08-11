import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.colorfestival.com.ar", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
