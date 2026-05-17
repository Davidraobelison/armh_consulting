"use client";

import { useState } from "react";

export default function KitProForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    societe: "",
    fonction: "",
    email: "",
    telephone: "",
    ville: "",
    profil: "",
    destination: "",
    besoin: "",
    volume: "",
    message: "",
    rgpd: false,
  });

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors backdrop-blur-sm";

  const selectClass = `${inputClass} [&>option]:bg-[#0f1729] [&>option]:text-white`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 min-h-[420px] text-center">
        <div className="w-16 h-16 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="1.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Demande envoyée</h3>
        <p className="text-base text-white/90 leading-relaxed max-w-sm">
          Merci pour votre demande. L'équipe ARMH Consulting vous recontactera
          rapidement afin de mieux comprendre votre besoin et vous transmettre
          le Kit Pro Sun Siyam le plus adapté.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Prénom / Nom */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Prénom *"
            value={form.prenom}
            onChange={set("prenom")}
            required
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Nom *"
            value={form.nom}
            onChange={set("nom")}
            required
            className={inputClass}
          />
        </div>

        {/* Société / Fonction */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Société / agence *"
            value={form.societe}
            onChange={set("societe")}
            required
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Fonction"
            value={form.fonction}
            onChange={set("fonction")}
            className={inputClass}
          />
        </div>

        {/* Email / Téléphone */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            placeholder="Email professionnel *"
            value={form.email}
            onChange={set("email")}
            required
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={set("telephone")}
            className={inputClass}
          />
        </div>

        {/* Ville / Pays */}
        <input
          type="text"
          placeholder="Ville / pays"
          value={form.ville}
          onChange={set("ville")}
          className={inputClass}
        />

        {/* Profil */}
        <select value={form.profil} onChange={set("profil")} className={selectClass}>
          <option value="">Profil</option>
          <option value="agence">Agence de voyages</option>
          <option value="to">Tour-opérateur (TO)</option>
          <option value="reseau">Réseau</option>
          <option value="independant">Indépendant</option>
          <option value="conciergerie">Conciergerie</option>
          <option value="mice">MICE</option>
          <option value="autre">Autre</option>
        </select>

        {/* Destination travaillée */}
        <select value={form.destination} onChange={set("destination")} className={selectClass}>
          <option value="">Destination travaillée</option>
          <option value="maldives">Maldives</option>
          <option value="sri-lanka">Sri Lanka</option>
          <option value="les-deux">Les deux</option>
        </select>

        {/* Besoin principal */}
        <select value={form.besoin} onChange={set("besoin")} className={selectClass}>
          <option value="">Besoin principal</option>
          <option value="devis">Devis client</option>
          <option value="programmation">Programmation</option>
          <option value="formation">Formation</option>
          <option value="decouverte">Découverte produit</option>
          <option value="groupe">Groupe</option>
          <option value="lune-de-miel">Lune de miel</option>
          <option value="famille">Famille</option>
          <option value="autre">Autre</option>
        </select>

        {/* Volume potentiel */}
        <select value={form.volume} onChange={set("volume")} className={selectClass}>
          <option value="">Volume potentiel / fréquence de vente</option>
          <option value="ponctuel">Ponctuel</option>
          <option value="regulier">Régulier</option>
          <option value="programmation">Programmation</option>
          <option value="qualifier">À qualifier</option>
        </select>

        {/* Message libre */}
        <textarea
          placeholder="Message / brief libre"
          value={form.message}
          onChange={set("message")}
          rows={3}
          className={`${inputClass} resize-none`}
        />

        {/* RGPD */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.rgpd}
            onChange={set("rgpd")}
            required
            className="mt-0.5 shrink-0 accent-[#C9A96E]"
          />
          <span className="text-sm text-white/70 leading-relaxed">
            J'accepte que mes données soient utilisées par ARMH Consulting pour
            me recontacter dans le cadre de ma demande. Conformément au RGPD,
            vous pouvez demander la suppression de vos données à tout moment.
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-[#C9A96E] hover:bg-[#b8923a] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors"
        >
          Recevoir le Kit Pro Sun Siyam →
        </button>
      </form>
    </div>
  );
}
