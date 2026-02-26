import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio.unleft.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cli`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
