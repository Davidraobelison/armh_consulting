"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [rgpd, setRgpd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    profil: "",
    typePartenariat: "",
    horizon: "",
    provenance: "",
    besoin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ nom: "", entreprise: "", email: "", profil: "", typePartenariat: "", horizon: "", provenance: "", besoin: "" });
        setRgpd(false);
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-base";

  const selectClass =
    "w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-base appearance-none cursor-pointer";

  const labelClass = "block text-sm font-semibold text-white/60 uppercase tracking-widest mb-2";

  const fieldWrap = "flex flex-col";

  if (success) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-16 text-center space-y-4">
        <div className="text-4xl">✅</div>
        <h3 className="text-2xl font-semibold text-white">Demande envoyée !</h3>
        <p className="text-white/60 text-base max-w-md mx-auto">
          Merci pour votre intérêt. Notre équipe étudiera votre projet et reviendra vers vous rapidement.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 text-sm text-white/40 underline hover:text-white/70 transition"
        >
          Soumettre une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">

      {/* Header band */}
      <div className="bg-white/10 border-b border-white/10 px-8 py-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
          Parlons de votre projet
        </h3>
        <p className="text-white/55 text-base mt-2 leading-relaxed max-w-xl mx-auto">
          Renseignez ce formulaire pour que nous puissions comprendre votre besoin
          et vous recontacter avec la bonne approche.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">

        {/* Row 1 — Nom + Entreprise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={fieldWrap}>
            <label className={labelClass}>Nom et prénom <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom et prénom"
              required
              className={inputClass}
            />
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Entreprise / organisation <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <input
              type="text"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              placeholder="Votre entreprise ou organisation"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2 — Email + Profil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={fieldWrap}>
            <label className={labelClass}>Email professionnel <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
              className={inputClass}
            />
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Vous êtes… <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select
                name="profil"
                value={formData.profil}
                onChange={handleChange}
                required
                className={selectClass}
              >
                <option value="" className="bg-gray-900">— Sélectionnez votre profil —</option>
                <option value="destination" className="bg-gray-900">Destination / institution touristique</option>
                <option value="hotel" className="bg-gray-900">Hôtel / groupe hôtelier</option>
                <option value="dmc" className="bg-gray-900">DMC / prestataire local</option>
                <option value="to" className="bg-gray-900">Tour-opérateur / agence de voyages</option>
                <option value="formation" className="bg-gray-900">Organisme de formation</option>
                <option value="autre" className="bg-gray-900">Autre</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Row 3 — Type partenariat + Timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={fieldWrap}>
            <label className={labelClass}>Type de partenariat <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select
                name="typePartenariat"
                value={formData.typePartenariat}
                onChange={handleChange}
                required
                className={selectClass}
              >
                <option value="" className="bg-gray-900">— Sélectionnez un type —</option>
                <option value="commercial" className="bg-gray-900">Développement commercial B2B</option>
                <option value="representation" className="bg-gray-900">Représentation marchés francophones</option>
                <option value="evenement" className="bg-gray-900">Workshop / roadshow / événement</option>
                <option value="formation" className="bg-gray-900">Formation</option>
                <option value="surmesure" className="bg-gray-900">Accompagnement sur-mesure</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">▼</span>
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Horizon de démarrage <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select
                name="horizon"
                value={formData.horizon}
                onChange={handleChange}
                required
                className={selectClass}
              >
                <option value="" className="bg-gray-900">— Sélectionnez —</option>
                <option value="pret" className="bg-gray-900">Projet défini, prêt à être lancé</option>
                <option value="cadrage" className="bg-gray-900">Projet en cadrage</option>
                <option value="info" className="bg-gray-900">Simple prise d&apos;information</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Row — Provenance full width */}
        <div className={fieldWrap}>
          <label className={labelClass}>Comment avez-vous connu ARMH Consulting ?</label>
          <div className="relative">
            <select
              name="provenance"
              value={formData.provenance}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="" className="bg-gray-900">— Sélectionnez une source —</option>
              <option value="google" className="bg-gray-900">Recherche Google</option>
              <option value="linkedin" className="bg-gray-900">LinkedIn</option>
              <option value="instagram" className="bg-gray-900">Instagram</option>
              <option value="facebook" className="bg-gray-900">Facebook</option>
              <option value="bouche_a_oreille" className="bg-gray-900">Bouche à oreille / Recommandation</option>
              <option value="salon" className="bg-gray-900">Salon professionnel / Événement</option>
              <option value="partenaire" className="bg-gray-900">Via un partenaire</option>
              <option value="presse" className="bg-gray-900">Presse / Article</option>
              <option value="autre" className="bg-gray-900">Autre</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">▼</span>
          </div>
        </div>

                {/* Row 4 — Textarea full width */}
        <div className={fieldWrap}>
          <label className={labelClass}>Votre besoin <span className="text-white/30 normal-case tracking-normal font-normal">*</span></label>
          <textarea
            name="besoin"
            value={formData.besoin}
            onChange={handleChange}
            rows={4}
            required
            placeholder="Décrivez brièvement votre projet, vos objectifs ou le type d'accompagnement recherché."
            className={inputClass}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* RGPD + Submit */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <label className="flex items-start gap-3 cursor-pointer flex-1">
            <input
              id="rgpd-partner"
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
            disabled={!rgpd || loading}
            className="shrink-0 bg-white text-gray-900 font-semibold px-10 py-3.5 rounded-lg
                       hover:bg-white/90 active:scale-95 transition-all duration-200
                       disabled:opacity-30 disabled:cursor-not-allowed text-base tracking-wide
                       whitespace-nowrap"
          >
            {loading ? "Envoi en cours..." : "Soumettre ma demande →"}
          </button>
        </div>

      </form>
    </div>
  );
}