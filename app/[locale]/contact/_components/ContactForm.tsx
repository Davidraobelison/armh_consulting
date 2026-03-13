"use client";

import { useState } from "react";

export default function ContactUsForm() {
  const [rgpd, setRgpd] = useState(false);

  const inputClass =
    "w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-base";

  const selectClass =
    "w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-base appearance-none cursor-pointer";

  const labelClass = "block text-sm font-semibold text-white/60 uppercase tracking-widest mb-2";

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">

      {/* Header band */}
      <div className="bg-white/10 border-b border-white/10 px-8 py-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
          Envoyez-nous un message
        </h3>
        <p className="text-white/55 text-base mt-2 leading-relaxed max-w-xl mx-auto">
          Une question, une idée, une demande ? Remplissez ce formulaire
          et nous vous répondrons dans les meilleurs délais.
        </p>
      </div>

      <form className="px-8 py-8 space-y-6">

        {/* Row 1 — Nom + Entreprise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className={labelClass}>Nom et prénom</label>
            <input type="text" placeholder="Votre nom et prénom" className={inputClass} />
          </div>
          <div className="flex flex-col">
            <label className={labelClass}>Entreprise / organisation <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <input type="text" placeholder="Votre entreprise ou organisation" required className={inputClass} />
          </div>
        </div>

        {/* Row 2 — Email + Objet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className={labelClass}>Email</label>
            <input type="email" placeholder="votre@email.com" className={inputClass} />
          </div>
          <div className="flex flex-col">
            <label className={labelClass}>Objet de la demande</label>
            <div className="relative">
              <select className={selectClass}>
                <option value="" className="bg-gray-900">— Sélectionnez un objet —</option>
                <option value="information" className="bg-gray-900">Demande d&apos;information</option>
                <option value="collaboration" className="bg-gray-900">Projet de collaboration</option>
                <option value="partenariat" className="bg-gray-900">Partenariat</option>
                <option value="intervention" className="bg-gray-900">Intervention / Prise de parole</option>
                <option value="presse" className="bg-gray-900">Presse / Média</option>
                <option value="autre" className="bg-gray-900">Autre</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Row 3 — Message full width */}
        <div className="flex flex-col">
          <label className={labelClass}>Votre message</label>
          <textarea
            rows={4}
            placeholder="Décrivez votre demande..."
            className={inputClass}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* RGPD + Submit */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <label className="flex items-start gap-3 cursor-pointer flex-1">
            <input
              id="rgpd"
              type="checkbox"
              checked={rgpd}
              onChange={(e) => setRgpd(e.target.checked)}
              className="mt-1 h-5 w-5 accent-white cursor-pointer shrink-0"
            />
            <span className="text-sm text-white/55 leading-relaxed">
              J&apos;accepte que mes données soient utilisées pour être recontacté(e)
              dans le cadre de ma demande.
            </span>
          </label>

          <button
            type="submit"
            disabled={!rgpd}
            className="shrink-0 bg-white text-gray-900 font-semibold px-10 py-3.5 rounded-lg
                       hover:bg-white/90 active:scale-95 transition-all duration-200
                       disabled:opacity-30 disabled:cursor-not-allowed text-base tracking-wide
                       whitespace-nowrap"
          >
            Envoyer mon message →
          </button>
        </div>

      </form>
    </div>
  );
}