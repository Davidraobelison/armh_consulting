import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
  description:
    "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
  icons: {
    icon: "/assets/images/others/favicon.jpg",
  },
  openGraph: {
    title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
    description:
      "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
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
    <html lang="fr" className={josefin.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {/* Navbar en overlay (au-dessus du Hero des pages) */}
        <Navbar />

        {/* Contenu spécifique aux pages */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
