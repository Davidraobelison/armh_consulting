"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { NavKey } from "@/app/global";

export default function Navbar() {
  const MotionLink = motion(Link);
  const t = useTranslations("general.nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const rawPathname = usePathname();
  const locale = useLocale();
  const pathname =
    rawPathname.replace(new RegExp(`^/${locale}`), "") || "/";

  // Pages where nav text should be white
  const whiteTextPages = ["/contact", "/partenaire", "/a-propos", "/projects"];
  const isWhiteText = whiteTextPages.some((p) => pathname.startsWith(p));

  const navigation: { key: NavKey; href: string }[] = [
    { key: "home", href: "/" },
    { key: "projects", href: "/projects" },
    { key: "partners", href: "/partenaire" },
    // { key: "sustainability", href: "/#durabilite" },
    { key: "about", href: "/a-propos" },
    { key: "contact", href: "/contact" },
  ];

  const router = useRouter();

  const switchLocale = (nextLocale: "fr" | "en") => {
    router.replace(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
  };

  const navTextBase = isWhiteText
    ? "text-white/80 hover:text-white"
    : "text-[#1a2e4a]/80 hover:text-[#1a2e4a]";
  const navTextActive = isWhiteText ? "text-white font-bold" : "text-[#1a2e4a] font-bold";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/images/logo/logobig.webp"
            alt="ARMH Consulting"
            width={160}
            height={80}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`transition-all duration-200 tracking-wide text-base ${
                  isActive ? navTextActive : `font-normal ${navTextBase} hover:scale-105`
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={() => switchLocale("fr")}
              aria-label="Français"
              className={`transition ${locale === "fr" ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            >
              <ReactCountryFlag svg countryCode="FR" style={{ width: "1.5em", height: "1.5em" }} />
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => switchLocale("en")}
              aria-label="English"
              className={`transition ${locale === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            >
              <ReactCountryFlag svg countryCode="GB" style={{ width: "1.5em", height: "1.5em" }} />
            </button>
          </div>
        </div>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md hover:bg-white/10"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile overlay + slide-from-left panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#1f4fd8] text-white z-50 flex flex-col shadow-2xl"
            >
              {/* Close button */}
              <div className="flex justify-end px-4 pt-5">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10"
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Logo */}
              <div className="px-6 pb-6">
                <Image
                  src="/assets/images/logo/logobig.webp"
                  alt="ARMH Consulting"
                  width={130}
                  height={65}
                  priority
                />
              </div>

              {/* Nav links */}
              <div className="flex flex-col px-6 gap-1 flex-1">
                {navigation.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg py-3 border-b transition ${
                        isActive
                          ? "border-white text-white font-medium"
                          : "border-white/20 text-white/80 hover:text-white"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  );
                })}
              </div>

              {/* Flags */}
              <div className="flex items-center justify-center gap-6 py-6 border-t border-white/20">
                <button
                  onClick={() => { switchLocale("fr"); setMobileOpen(false); }}
                  aria-label="Français"
                  className={`transition ${locale === "fr" ? "opacity-100" : "opacity-60"}`}
                >
                  <ReactCountryFlag svg countryCode="FR" style={{ width: "1.75em", height: "1.75em" }} />
                </button>
                <button
                  onClick={() => { switchLocale("en"); setMobileOpen(false); }}
                  aria-label="English"
                  className={`transition ${locale === "en" ? "opacity-100" : "opacity-60"}`}
                >
                  <ReactCountryFlag svg countryCode="GB" style={{ width: "1.75em", height: "1.75em" }} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}