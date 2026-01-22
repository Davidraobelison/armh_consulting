"use client";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const MotionLink = motion(Link);
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-50 bg-black text-white text-2xl flex justify-around items-center">
      <span> © {currentYear} ARMHConsulting. Tous droits réservés.</span>
      <div>Politique RSE</div>
      <div className="flex flex-col gap-y-5">
        <h3>Suivez-nous</h3>
        <div className="flex gap-x-5">
          <MotionLink
            href="https://web.facebook.com/profile.php?id=61551035504216"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/company/armhconsultingofficiel/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </MotionLink>
          <MotionLink
            href="https://x.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <FaXTwitter className="hover:text-sky-500 cursor-pointer" />
          </MotionLink>
          <MotionLink
            href="https://www.instagram.com/rina_andria_pro?igsh=bWlnd2poZnczaTc="
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </MotionLink>
        </div>
      </div>
    </div>
  );
}
