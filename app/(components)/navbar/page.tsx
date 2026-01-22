"use client";

import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  // Créer un Link animé
  const MotionLink = motion(Link);
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "A propos", href: "/about" },
    { name: "Nos services", href: "/services" },
    { name: "Nos réalisations", href: "/realisation" },
    { name: "Actualités", href: "/actuality" },

    { name: "Contact", href: "/contact" },
  ];

  return (
    <Disclosure as="nav" className="fixed top-15 w-full h-16 text-black z-auto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-2 md:px-5 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="sm:flex sm:justify-center animate-pulse object-cover md:text-3xl shrink-0">
                <Image
                  src="/assets/images/logo/logobig.webp"
                  alt="Logo du site ARMH Consulting"
                  width={160}
                  height={60}
                  className="sm:mx-auto sm:w-30"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden [@media(min-width:990px)]:flex justify-around items-center bg-white shadow-2xl w-full h-16 ml-20 px-5 rounded lg:ml-50">
                {navigation.map((item) => (
                  <MotionLink
                    key={item.name}
                    href={item.href}
                    className="text-xl font-light flex justify-center items-center hover:bg-[rgb(19_21_79/0.2)] hover:w-45 hover:h-full hover:rounded"
                  >
                    {item.name}
                  </MotionLink>
                ))}
              </div>

              {/* Mobile Hamburger */}
              <div className="[@media(min-width:990px)]:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="[@media(min-width:990px)]:hidden mb-20">
            <div className="px-2 pt-2 space-y-1 pb-3">
              {navigation.map((item) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  className="max-[320px]:text-center text-xl block px-3 py-2 rounded-md hover:bg-gray-200 w-[320px] md:text-2xl"
                >
                  {item.name}
                </MotionLink>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
