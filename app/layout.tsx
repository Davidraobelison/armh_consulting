import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/navbar/page";
import Footer from "./(components)/footer/page";
import BgImage from "./(components)/backgroundImage/page";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
  icons: {
    icon: "/assets/images/others/favicon.jpg",
  },

  description:
    "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
  openGraph: {
    title: "ARMH Consulting – Tourisme, Marketing & Hôtellerie",
    description:
      "Cabinet de conseil spécialisé en tourisme, marketing et hôtellerie.",
    url: "https://armh-consulting.com",
    siteName: "ARMH Consulting",
    images: [
      {
        url: "https://armh-consulting.com/assets/images/logo/logobig.webp",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${josefin.className} min-h-screen `}>
        <BgImage />
        <Navbar />
        <main className="grow"> {children}</main>
        <Footer />
      </body>
    </html>
    
  );
}
