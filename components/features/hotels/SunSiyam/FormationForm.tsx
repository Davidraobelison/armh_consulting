"use client";

import { useState } from "react";
import ButtonCTA from "@/components/ui/ButtonCTA";
import { Calendar } from "lucide-react";

export default function FormationForm() {
  const [form, setForm] = useState({
    nom: "",
    societe: "",
    email: "",
    telephone: "",
    role: "",
    fonction: "",
    format: "",
    participants: "",
    creneaux: "",
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

  const cls =
    "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors backdrop-blur-sm";
  const sel = `${cls} [&>option]:bg-[#0f1729] [&>option]:text-white`;

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Nom et prénom"
          value={form.nom}
          onChange={set("nom")}
          className={cls}
        />
        <input
          type="text"
          placeholder="Société / Organisation"
          value={form.societe}
          onChange={set("societe")}
          className={cls}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          placeholder="Email professionnel"
          value={form.email}
          onChange={set("email")}
          className={cls}
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={set("telephone")}
          className={cls}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <select value={form.role} onChange={set("role")} className={sel}>
          <option value="">Vous êtes...</option>
          <option value="agence">Agence de voyages</option>
          <option value="to">Tour-opérateur</option>
          <option value="mice">MICE / Événementiel</option>
          <option value="autre">Autre</option>
        </select>
        <select
          value={form.fonction}
          onChange={set("fonction")}
          className={sel}
        >
          <option value="">Fonction</option>
          <option value="directeur">Directeur / Directrice</option>
          <option value="responsable">Responsable produit</option>
          <option value="commercial">Commercial(e)</option>
          <option value="conseiller">Conseiller(e) voyages</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <select value={form.format} onChange={set("format")} className={sel}>
          <option value="">Format souhaité</option>
          <option value="webinaire">Webinaire 45 min</option>
          <option value="formation-equipe">Formation équipe 60–90 min</option>
          <option value="rdv-to">Rendez-vous produit TO</option>
          <option value="coaching">Mini coaching agence</option>
        </select>
        <select
          value={form.participants}
          onChange={set("participants")}
          className={sel}
        >
          <option value="">Nombre de participants</option>
          <option value="1-5">1 à 5</option>
          <option value="6-15">6 à 15</option>
          <option value="16-30">16 à 30</option>
          <option value="30+">Plus de 30</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Créneaux souhaités (ex : semaine du 15 juin, mardi matin…)"
        value={form.creneaux}
        onChange={set("creneaux")}
        className={cls}
      />
      <textarea
        placeholder="Message / précisions (facultatif)"
        value={form.message}
        onChange={set("message")}
        rows={3}
        className={`${cls} resize-none`}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.rgpd}
          onChange={set("rgpd")}
          className="mt-0.5 shrink-0 accent-[#1f4fd8]"
        />
        <span className="text-sm text-white/70 leading-relaxed">
          J'accepte de recevoir des communications d'ARMH Consulting pour me
          recontacter et m'envoyer des informations utiles. Vous pouvez vous
          désinscrire à tout moment.
        </span>
      </label>
      <ButtonCTA href="/contact" variant="primary" className="w-full! justify-center">
        <Calendar size={15} className="mr-2" /> Planifier une session →
      </ButtonCTA>
    </form>
  );
}
