import { MetadataRoute } from "next";

const BASE_URL = "https://armh-consulting.com";

const PARTENAIRE_CATEGORIES = [
  "destinations",
  "hotels",
  "dmc",
  "touroperateurs",
  "formation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/partenaire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/durabilite`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Pages dynamiques partenaires/[categorie]
  const partenairePages: MetadataRoute.Sitemap = PARTENAIRE_CATEGORIES.map(
    (categorie) => ({
      url: `${BASE_URL}/partenaires/${categorie}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...partenairePages];
}