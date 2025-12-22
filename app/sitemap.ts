import type { MetadataRoute } from "next";
import ingredients from "@/data/ingredients.json"; // string[]
import cooks from "@/data/cooks.json"; // string[]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohaemukji.co.kr";

  const ingredientPages: MetadataRoute.Sitemap = ingredients.map((name) => ({
    url: `${baseUrl}/ingredients/${encodeURIComponent(name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cookPages: MetadataRoute.Sitemap = cooks.map((name) => ({
    url: `${baseUrl}/cooks/${encodeURIComponent(name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    // 홈
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },

    // 인덱스 페이지들
    {
      url: `${baseUrl}/ingredients`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cooks`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },

    // 상세 페이지들
    ...ingredientPages,
    ...cookPages,
  ];
}