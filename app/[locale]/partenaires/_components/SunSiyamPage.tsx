"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Building2, Layers, Globe, ShieldCheck } from "lucide-react";
import HotelsGrid from "@/components/features/hotels/SunSiyam/HotelsGrid";
import ClientProfileCard from "@/components/features/hotels/SunSiyam/ClientProfileCard";
import AudienceCard from "@/components/features/hotels/SunSiyam/AudienceCard";
import StatBadge from "@/components/features/hotels/SunSiyam/StatBadge";
import KitProForm from "@/components/features/hotels/SunSiyam/KitProForm";
import {
  CLIENT_PROFILES,
  AUDIENCE_CARDS,
  ESG_PILLARS,
  KIT_PRO_ITEMS,
  WHY_ARMH,
} from "@/data/hotels/sun-siyam";

export default function SunSiyamPage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero.jpg"
        overlay
        className="py-32"
      >
        <Container>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 text-sm text-white/40 mb-12">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/partenaire" className="hover:text-white transition-colors">Partenaires</Link>
              <span>/</span>
              <span className="text-white/70">Sun Siyam Resorts</span>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="md:col-span-7 space-y-8">
              <Reveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white">
                  Sun Siyam{" "}
                  <span className="font-semibold text-[#C9A96E]">Resorts</span>
                </h1>
                <p className="text-lg text-white mt-2 font-medium uppercase tracking-wide">
                  Maldives · Sri Lanka
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <blockquote className="border-l-2 border-[#C9A96E] pl-6 py-2">
                  <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed font-light">
                    « Six resorts, trois collections, une seule exigence :
                    l'authenticité maldivienne pour chaque profil de clientèle. »
                  </p>
                </blockquote>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-lg text-white/70 leading-relaxed">
                  Du resort familial animé au sanctuaire intime sur pilotis, Sun Siyam
                  propose une gamme complète aux professionnels du voyage — avec le
                  soutien de terrain d'ARMH Consulting pour identifier et vendre le
                  bon resort au bon client.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <ButtonCTA href="#kit-pro" variant="primary">
                    Demander le Kit Pro
                  </ButtonCTA>
                  <a
                    href="https://www.sunsiyam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#C9A96E]/50 text-[#C9A96E] text-sm font-medium hover:bg-[#C9A96E]/10 transition-all"
                  >
                    Voir sunsiyam.com ↗
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT – Stats glass card */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl divide-y divide-white/10">
                  <StatBadge icon={<Building2  size={20} strokeWidth={1.5} />} value="6"  label="Resorts" />
                  <StatBadge icon={<Layers     size={20} strokeWidth={1.5} />} value="3"  label="Collections" />
                  <StatBadge icon={<Globe      size={20} strokeWidth={1.5} />} value="2"  label="Destinations" />
                  <StatBadge icon={<ShieldCheck size={20} strokeWidth={1.5} />} value="FR" label="Représentation officielle" />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {["Luxury Collection", "Privé Collection", "Lifestyle Collection"].map((c, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] border border-[#C9A96E]/30"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 2. POUR QUI – AUDIENCE ────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5 space-y-3">
                <Reveal>
                  <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">
                    Pour qui ?
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Un outil de vente conçu pour les professionnels
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-7">
                <Reveal delay={0.2}>
                  <p className="text-base text-white/70 leading-relaxed">
                    ARMH Consulting structure son accompagnement autour de trois types
                    de partenaires B2B - agences de voyages, tours opérateurs et
                    acteurs du MICE.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {AUDIENCE_CARDS.map((card, i) => (
                <AudienceCard key={i} card={card} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. QUEL RESORT POUR QUEL CLIENT ───────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5 space-y-3">
                <Reveal>
                  <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">
                    Guide de recommandation
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Quel Sun Siyam pour quel client ?
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-7">
                <Reveal delay={0.2}>
                  <p className="text-base text-white/75 leading-relaxed">
                    Un outil de prescription pour orienter rapidement vos clients vers
                    l'expérience la plus pertinente. Six établissements, trois lignes
                    éditoriales claires.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CLIENT_PROFILES.map((profile, i) => (
                <ClientProfileCard key={i} profile={profile} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. HOTELS GRID ────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-24"
        id="hotels"
      >
        <Container>
          <HotelsGrid />
        </Container>
      </Section>

      {/* ── 5. ESG ────────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-5">
              <Reveal>
                <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">
                  Engagement durable
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                  Un argument responsable à intégrer sans surpromesse.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base text-white/80 leading-relaxed">
                  Sun Siyam Care permet de mettre en actions l'ESG : réduction des
                  déchets et plastiques, énergies solaires, biodiversité, soutien aux
                  communautés locales, préservation culturelle et gestion raisonnée
                  des ressources par le groupe.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-3 gap-4">
                {ESG_PILLARS.map((pillar, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="text-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center space-y-2 hover:bg-white/15 transition-colors">
                      <div className="text-2xl">{pillar.icon}</div>
                      <p className="text-xs text-white/80 font-medium leading-tight">
                        {pillar.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. KIT PRO + FORM ─────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-24"
        id="kit-pro"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6 space-y-8">
              <div className="space-y-4">
                <Reveal>
                  <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">
                    Kit Pro
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Vendez Sun Siyam{" "}
                    <span className="text-[#C9A96E]">avec confiance</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base text-white/70 leading-relaxed">
                    ARMH Consulting met à disposition des agences et TO un Kit Pro
                    complet : comparatif des six hôtels, arguments de vente par profil
                    de clientèle, idées de combinés et support de formation.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  {KIT_PRO_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-xs text-white/80 font-medium leading-tight">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-6">
              <Reveal delay={0.15}>
                <KitProForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. POURQUOI ARMH ──────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Pourquoi ARMH ?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base text-white/55">
                  Un relais francophone pour transformer l'intérêt en ventes.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {WHY_ARMH.map((item, i) => (
                  <div
                    key={i}
                    className="text-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col items-center gap-3 text-center hover:bg-white/15 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-xs text-white/75 font-medium leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex justify-center pt-2">
                <ButtonCTA href="/contact" variant="primary">
                  Contacter ARMH Consulting
                </ButtonCTA>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 8. CTA FINAL ──────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/contact/2.webp"
        overlay
        className="py-32"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Prêt à intégrer Sun Siyam dans votre programmation ?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/80 leading-relaxed">
                Lunas de miel, familles, clients luxe ou combinés Sri Lanka —
                ARMH Consulting vous accompagne pour construire une offre
                cohérente, différenciante et parfaitement argumentée.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonCTA href="/contact">Contacter ARMH Consulting</ButtonCTA>
                <a
                  href="https://www.sunsiyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Voir le site Sun Siyam ↗
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}