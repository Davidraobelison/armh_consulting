"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BgImage() {
  const MotionLink = motion(Link);
  return (
    <section className="relative h-screen w-full">
      {/* Background optimisé avec next/image */}
      <Image
        src="/assets/images/others/bg_image_principale.webp"
        alt="Background Hero"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />

      {/* Contenu par-dessus le background */}
      <div className="absolute top-90 mx-auto w-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl mb-4 w-full font-light">
          ARMH Consulting
        </h1>
        <p className="text-xl md:text-2xl w-full font-light text-[rgb(19,21,79)]">
          EXPAND your <strong>NETWORK</strong>, EXPAND your{" "}
          <strong>TERRITORY</strong>, EXPAND your <strong>VISIBILITY</strong>.
        </p>

        <MotionLink
          className="mt-6 px-6 py-3 bg-[rgb(19_21_79/0.2)] hover:bg-[rgb(53,147,251)] rounded-lg text-white font-nomal text-2xl cursor-pointer border-0  animate-pulse"
          href="/about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {" "}
          En savoir plus
        </MotionLink>
      </div>
    </section>
  );
}
