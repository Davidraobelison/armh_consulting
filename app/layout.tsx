import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google"; // ← changé
import CookieBanner from "@/components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next"

const dmSans = DM_Sans({ // ← renommé
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // ← ajout des weights
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
  description: "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
  icons: {
    icon: "/assets/images/others/favicon.jpg",
  },
  openGraph: {
    title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
    description: "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
    url: "https://armh-consulting.vercel.app",
    siteName: "ARMH Consulting",
    images: [
      {
        url: "/assets/images/logo/logobig.webp",
        width: 1200,
        height: 630,
        alt: "ARMH Consulting",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={dmSans.className}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}