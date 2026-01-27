import type { Metadata } from "next";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

const SITE_NAME = "ARMH Consulting";
const BASE_URL = "https://armh-consulting.vercel.app";
const DEFAULT_DESCRIPTION =
  "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.";

export function generateSeoMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}: SeoProps): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  const canonical = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: "/assets/images/logo/logobig.webp",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/assets/images/logo/logobig.webp"],
    },
  };
}
