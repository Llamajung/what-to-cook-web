import type { MetadataRoute } from "next";
import ingredients from "@/data/ingredients.json"; // string[]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohaemukji.co.kr";

  const ingredientPages: MetadataRoute.Sitemap = ingredients.map((name) => ({
    url: `${baseUrl}/ingredients/${encodeURIComponent(name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ingredients`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...ingredientPages,
  ];
}