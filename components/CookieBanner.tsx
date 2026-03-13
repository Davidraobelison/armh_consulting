"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  // Lazy initializer — s'exécute une seule fois côté client, jamais côté serveur
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem("armh_cookie_consent");
  });

  const accept = () => {
    window.localStorage.setItem("armh_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem("armh_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">

          {/* Icône + texte */}
          <div className="flex items-start gap-4 flex-1">
            <span className="text-2xl shrink-0 mt-0.5">🍪</span>
            <div className="space-y-1">
              <p className="text-white font-semibold text-base">
                Ce site utilise des cookies
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience de navigation
                et mesurer l&apos;audience du site.{" "}
                <Link
                  href="/mentions-legales"
                  className="text-white/80 underline underline-offset-4 hover:text-white transition"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white/70 text-sm font-medium
                         hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-semibold
                         hover:bg-white/90 active:scale-95 transition-all duration-200"
            >
              Accepter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}