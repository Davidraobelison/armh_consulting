"use client";

import { useState } from "react";
import ButtonCTA from "@/components/ui/ButtonCTA";

type Props = {
  resortName: string;
  ctaLabel?: string;
};

const FONCTIONS = ["Agent de voyages", "Tour opérateur", "Responsable produit", "Directeur d'agence", "Autre"];
const BESOINS = ["Tarifs et disponibilités", "Kit Pro complet", "Arguments de vente", "Formation équipe", "Combiné Sri Lanka + Maldives", "Autre"];

const inputClass = "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors backdrop-blur-sm";

export default function FicheContactForm({ resortName, ctaLabel }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 min-h-[420px] text-center">
        <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Demande envoyée</h3>
        <p className="text-base text-white/90 max-w-xs">
          Nous reviendrons vers vous rapidement avec la fiche complète {resortName}.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white">Demander cette fiche</h3>
        <p className="text-sm text-white/55">
          Recevez la fiche complète {resortName} avec arguments clés, tarifs indicatifs et supports commerciaux.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            required
            type="text"
            placeholder="Nom et prénom"
            className={`col-span-2 ${inputClass}`}
          />
          <input
            required
            type="email"
            placeholder="Email professionnel"
            className={`col-span-2 ${inputClass}`}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Agence / Société"
            className={inputClass}
          />
          <select className={`${inputClass} [&>option]:bg-[#0f1729] [&>option]:text-white`}>
            <option value="">Votre fonction</option>
            {FONCTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          <select className={`${inputClass} [&>option]:bg-[#0f1729] [&>option]:text-white`}>
            <option value="">Votre besoin principal</option>
            {BESOINS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <textarea
            rows={2}
            placeholder="Type de demande / commentaires (facultatif)"
            className={`col-span-2 ${inputClass} resize-none`}
          />
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            required
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-[#C9A96E] shrink-0"
          />
          <span className="text-[11px] text-white/50 leading-relaxed">
            J'accepte que ces informations soient utilisées par ARMH Consulting pour me recontacter dans le cadre de ma demande.
          </span>
        </label>

        <ButtonCTA
          href="#"
          variant="primary"
          className="w-full! justify-center"
        >
          {"Envoyer ma demande"} →
        </ButtonCTA>
      </form>
    </div>
  );
}