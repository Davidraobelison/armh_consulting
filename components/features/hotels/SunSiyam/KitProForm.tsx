// components/Hotels/SunSiyam/KitProForm.tsx

"use client";

import { useState } from "react";
import ButtonCTA from "@/components/ui/ButtonCTA";

export default function KitProForm() {
  const [form, setForm] = useState({
    nom: "",
    societe: "",
    email: "",
    type: "",
    besoin: "",
    commentaire: "",
    rgpd: false,
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a3a32] transition-colors";

  return (
    <div className="bg-white rounded-2xl p-7 space-y-4 shadow-xl">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Nom et prénom"
          value={form.nom}
          onChange={set("nom")}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Société / organisation"
          value={form.societe}
          onChange={set("societe")}
          className={inputClass}
        />
      </div>

      <input
        type="email"
        placeholder="Email professionnel"
        value={form.email}
        onChange={set("email")}
        className={inputClass}
      />

      <div className="grid grid-cols-2 gap-3">
        <select value={form.type} onChange={set("type")} className={inputClass}>
          <option value="">Vous êtes...</option>
          <option value="agence">Agence de voyages</option>
          <option value="to">Tour-opérateur</option>
          <option value="mice">MICE / Événementiel</option>
          <option value="autre">Autre</option>
        </select>
        <select value={form.besoin} onChange={set("besoin")} className={inputClass}>
          <option value="">Votre besoin principal</option>
          <option value="kit">Recevoir le Kit Pro</option>
          <option value="devis">Demande de devis</option>
          <option value="formation">Formation équipe</option>
          <option value="conseil">Conseil programmation</option>
        </select>
      </div>

      <textarea
        placeholder="Type de clientèle / demande en cours / commentaire"
        value={form.commentaire}
        onChange={set("commentaire")}
        rows={3}
        className={`${inputClass} resize-none`}
      />

      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.rgpd}
          onChange={set("rgpd")}
          className="mt-0.5 shrink-0"
        />
        <span className="text-[11px] text-gray-400 leading-relaxed">
          J'accepte que mes données soient utilisées par ARMH Consulting pour me recontacter
          concernant ce Kit Pro. Conformément au RGPD, vous pouvez demander la suppression
          de vos données à tout moment.
        </span>
      </label>

      <ButtonCTA href="/contact" variant="primary" className="w-full justify-center">
        Recevoir le Kit Pro →
      </ButtonCTA>
    </div>
  );
}
