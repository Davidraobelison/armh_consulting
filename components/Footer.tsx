"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const MotionLink = motion(Link);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1f4fd8] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-base">
        {/* Copyright */}
        <span className="text-center md:text-left">
          © {currentYear} ARMH Consulting. Tous droits réservés.
        </span>

        <div className="flex flex-col items-center space-y-2">
          <Link
            href="/rse"
            className="hover:underline hover:text-gray-300 transition"
          >
            Politique RSE
          </Link>

          <Link
            href="/mentions-legales"
            className="hover:underline hover:text-gray-300 transition"
          >
            Mentions Légales
          </Link>
        </div>

        

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-semibold">Suivez-nous</h3>
          <div className="flex gap-5 text-xl">
            <MotionLink
              href="https://web.facebook.com/profile.php?id=61551035504216"
              target="_blank"
              whileHover={{ scale: 1.15 }}
            >
              <FaFacebook className="hover:text-blue-500 transition" />
            </MotionLink>

            <MotionLink
              href="https://www.linkedin.com/company/armhconsultingofficiel/"
              target="_blank"
              whileHover={{ scale: 1.15 }}
            >
              <FaLinkedin className="hover:text-blue-500 transition" />
            </MotionLink>

            <MotionLink
              href="https://x.com"
              target="_blank"
              whileHover={{ scale: 1.15 }}
            >
              <FaXTwitter className="hover:text-sky-400 transition" />
            </MotionLink>

            <MotionLink
              href="https://www.instagram.com/rina_andria_pro"
              target="_blank"
              whileHover={{ scale: 1.15 }}
            >
              <FaInstagram className="hover:text-pink-500 transition" />
            </MotionLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
