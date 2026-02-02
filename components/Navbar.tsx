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
import { usePathname } from "next/navigation";

export default function Navbar() {
  const MotionLink = motion(Link);
  const pathname = usePathname();
  const hash =
    typeof window !== "undefined" ? window.location.hash : "";

    console.log(pathname)
    console.log(hash)

 const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "/#projects" },
  { name: "Partenariats", href: "/#partenaires" },
  { name: "Durabilité", href: "/#durabilite" },
  { name: "À propos", href: "/a-propos" },
  { name: "Actualités", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

  return (
    <Disclosure as="nav" className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {({ open }) => (
        <>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/assets/images/logo/logobig.webp"
                alt="ARMH Consulting"
                width={100}
                height={50}
                priority
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex gap-8">
                {navigation.map((item) => {
                    const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href;


                    return (
                    <MotionLink
                        key={item.name}
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        className={`text-lg font-light transition ${
                        isActive
                            ? "text-white border-b-2 border-white pb-1"
                            : "text-white/80 hover:text-white"
                        }`}
                    >
                        {item.name}
                    </MotionLink>
                    );
                })}
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
          <DisclosurePanel className="lg:hidden bg-black/80 text-white">
            <div className="flex flex-col px-6 py-4 gap-3">
                {navigation.map((item) => {
                  const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href;

                return (
                    <MotionLink
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.03 }}
                    className={`text-lg py-2 border-b transition ${
                        isActive
                        ? "border-white text-white font-medium"
                        : "border-white/20 text-white/80"
                    }`}
                    >
                    {item.name}
                    </MotionLink>
                );
                })}
            </div>
        </DisclosurePanel>

        </>
      )}
    </Disclosure>
  );
}
