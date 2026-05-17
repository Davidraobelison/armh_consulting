"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-sm";

const selectClass =
  "w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-lg backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-200 text-sm appearance-none cursor-pointer [&>option]:bg-[#0d2420] [&>option]:text-white";

const labelClass =
  "block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5";

const fieldWrap = "flex flex-col";

export default function KitProForm() {
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error, setError]       = useState("");
  const [rgpd, setRgpd]         = useState(false);

  const [form, setForm] = useState({
    prenom:      "",
    nom:         "",
    societe:     "",
    fonction:    "",
    email:       "",
    telephone:   "",
    ville:       "",
    profil:      "",
    destination: "",
    besoin:      "",
    volume:      "",
    message:     "",
    website:     "", // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/kit-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log(res)

      if (res.ok) {
        setSuccess(true);
        setForm({
          prenom: "", nom: "", societe: "", fonction: "", email: "",
          telephone: "", ville: "", profil: "", destination: "", besoin: "",
          volume: "", message: "", website: "",
        });
        setRgpd(false);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-16 text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center mx-auto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Demande envoyée !</h3>
          <p className="text-white/65 text-base max-w-sm mx-auto leading-relaxed">
            Merci pour votre demande. L'équipe ARMH Consulting vous recontactera
            rapidement afin de mieux comprendre votre besoin et vous transmettre
            le Kit Pro Sun Siyam le plus adapté.
          </p>
        </div>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm text-white/35 underline hover:text-white/60 transition"
        >
          Soumettre une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="bg-white/10 border-b border-white/10 px-8 py-6 text-center">
        <p className="text-[#C9A96E] text-xs font-semibold uppercase tracking-widest mb-1">
          Sun Siyam Resorts
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Recevoir le Kit Pro
        </h3>
        <p className="text-white/50 text-sm mt-1.5 leading-relaxed max-w-md mx-auto">
          Notre équipe B2B vous recontacte et vous transmet le kit adapté à
          votre profil et vos clients.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">

        {/* Honeypot — caché des utilisateurs */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
          <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="nope" aria-hidden="true" />
        </div>

        {/* Prénom / Nom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrap}>
            <label className={labelClass}>Prénom <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <input type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom" required className={inputClass} />
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Nom <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" required className={inputClass} />
          </div>
        </div>

        {/* Société / Fonction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrap}>
            <label className={labelClass}>Société / Agence <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <input type="text" name="societe" value={form.societe} onChange={handleChange} placeholder="Votre agence ou société" required className={inputClass} />
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Fonction</label>
            <input type="text" name="fonction" value={form.fonction} onChange={handleChange} placeholder="Votre fonction" className={inputClass} />
          </div>
        </div>

        {/* Email / Téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrap}>
            <label className={labelClass}>Email professionnel <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required className={inputClass} />
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Téléphone</label>
            <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" className={inputClass} />
          </div>
        </div>

        {/* Ville */}
        <div className={fieldWrap}>
          <label className={labelClass}>Ville / Pays</label>
          <input type="text" name="ville" value={form.ville} onChange={handleChange} placeholder="Paris, France" className={inputClass} />
        </div>

        <div className="border-t border-white/10" />

        {/* Profil / Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrap}>
            <label className={labelClass}>Profil <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select name="profil" value={form.profil} onChange={handleChange} required className={selectClass}>
                <option value="">- Votre profil -</option>
                <option value="agence">Agence de voyages</option>
                <option value="to">Tour-opérateur (TO)</option>
                <option value="reseau">Réseau</option>
                <option value="independant">Indépendant</option>
                <option value="conciergerie">Conciergerie</option>
                <option value="mice">MICE</option>
                <option value="autre">Autre</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</span>
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Destination travaillée <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select name="destination" value={form.destination} onChange={handleChange} required className={selectClass}>
                <option value="">- Destination -</option>
                <option value="maldives">Maldives</option>
                <option value="sri-lanka">Sri Lanka</option>
                <option value="les-deux">Maldives & Sri Lanka</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Besoin / Volume */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrap}>
            <label className={labelClass}>Besoin principal <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select name="besoin" value={form.besoin} onChange={handleChange} required className={selectClass}>
                <option value="">- Besoin -</option>
                <option value="devis">Devis client</option>
                <option value="programmation">Programmation</option>
                <option value="formation">Formation</option>
                <option value="decouverte">Découverte produit</option>
                <option value="groupe">Groupe</option>
                <option value="lune-de-miel">Lune de miel</option>
                <option value="famille">Famille</option>
                <option value="autre">Autre</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</span>
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={labelClass}>Volume / Fréquence de vente <span className="text-white/25 normal-case tracking-normal font-normal">*</span></label>
            <div className="relative">
              <select name="volume" value={form.volume} onChange={handleChange} required className={selectClass}>
                <option value="">- Volume -</option>
                <option value="ponctuel">Ponctuel</option>
                <option value="regulier">Régulier</option>
                <option value="programmation">Programmation</option>
                <option value="qualifier">À qualifier</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Message libre */}
        <div className={fieldWrap}>
          <label className={labelClass}>Message / brief libre</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Type de clientèle, dossier en cours, question particulière…"
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="border-t border-white/10" />

        {/* Erreur */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* RGPD */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={rgpd}
            onChange={(e) => setRgpd(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#C9A96E] cursor-pointer shrink-0"
          />
          <span className="text-xs text-white/45 leading-relaxed">
            J'accepte que mes données soient utilisées par ARMH Consulting pour
            me recontacter dans le cadre de ma demande. Conformément au RGPD,
            vous pouvez demander la suppression de vos données à tout moment.
          </span>
        </label>

        {/* Soumettre */}
        <button
          type="submit"
          disabled={!rgpd || loading}
          className="w-full bg-[#C9A96E] hover:bg-[#b8923a] text-white font-semibold py-3.5 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed text-sm tracking-wide"
        >
          {loading ? "Envoi en cours…" : "Recevoir le Kit Pro Sun Siyam →"}
        </button>

      </form>
    </div>
  );
}
