"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { NavKey } from "@/app/global";


export default function Navbar() {
  const MotionLink = motion(Link);
  const t = useTranslations("general.nav");

  const rawPathname = usePathname();
  const locale = useLocale(); // "fr" | "en"
  const pathname = rawPathname.replace(
    new RegExp(`^/${locale}`),
    ""
    ) || "/";

  const navigation: { key: NavKey; href: string }[] = [
    { key: "home", href: "/" },
    { key: "projects", href: "/projects" },
    { key: "partners", href: "/partenaire" },
    { key: "sustainability", href: "/#durabilite" },
    { key: "about", href: "/a-propos" },
    // { key: "news", href: "/blog" },
    { key: "contact", href: "/contact" }
  ];
  const router = useRouter();

  const switchLocale = (nextLocale: "fr" | "en") => {
    router.replace(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
  };

  return (
    <Disclosure as="nav" className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {({ open }) => (
        <>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image
                src="/assets/images/logo/logobig.webp"
                alt="ARMH Consulting"
                width={160}   // ⬅️ augmente ici
                height={80}   // ⬅️ garde le ratio
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
                      className={`text-lg font-light transition-transform duration-150 ${
                        isActive
                          ? "text-white border-b-2 border-white pb-1"
                          : "text-white/80 hover:text-white hover:scale-105"
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
                    className={`transition ${
                      locale === "fr" ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <ReactCountryFlag
                      svg
                      countryCode="FR"
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                  </button>

                  <span className="text-white/40">|</span>

                  <button
                    onClick={() => switchLocale("en")}
                    aria-label="English"
                    className={`transition ${
                      locale === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <ReactCountryFlag
                      svg
                      countryCode="GB"
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                  </button>
                </div>

            </div>


            {/* Mobile button */}
            <div className="lg:hidden">
              <DisclosureButton className="p-2 rounded-md hover:bg-gray-100">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="lg:hidden bg-[#1f4fd8] text-white">
            <div className="flex flex-col px-6 py-4 gap-3">
                {navigation.map((item) => {
                  const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href;

                return (
                    <MotionLink
                    key={item.key}
                    href={item.href}
                    whileHover={{ scale: 1.03 }}
                    className={`text-lg py-2 border-b transition ${
                        isActive
                        ? "border-white text-white font-medium"
                        : "border-white/20 text-white/80"
                    }`}
                    >
                    {t(item.key)}
                    </MotionLink>
                );
                })}

                <div className="flex items-center justify-center gap-6 pt-4 mt-2 border-t border-white/20">
                  <button
                    onClick={() => switchLocale("fr")}
                    aria-label="Français"
                    className={`transition ${
                      locale === "fr" ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <ReactCountryFlag
                      svg
                      countryCode="FR"
                      style={{ width: "1.75em", height: "1.75em" }}
                    />
                  </button>

                  <button
                    onClick={() => switchLocale("en")}
                    aria-label="English"
                    className={`transition ${
                      locale === "en" ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <ReactCountryFlag
                      svg
                      countryCode="GB"
                      style={{ width: "1.75em", height: "1.75em" }}
                    />
                  </button>
                </div>
            </div>
        </DisclosurePanel>

        </>
      )}
    </Disclosure>
  );
}
