import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Image from "next/image";
import FormationForm from "@/components/features/hotels/SunSiyam/FormationForm";
import KitProForm from "@/components/features/hotels/SunSiyam/KitProForm";
import { KIT_PRO_ITEMS, WHY_ARMH, ESG_PILLARS } from "@/data/hotels/sun-siyam";
import {
  BookOpen,
  Users,
  MessageSquare,
  Send,
  Monitor,
  Briefcase,
  Star,
  Handshake,
  Target,
  UserCheck,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROGRAMME_STEPS = [
  {
    num: "1",
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Comprendre la collection",
    desc: "Positionnement, resorts, expériences phares et atouts différenciants.",
  },
  {
    num: "2",
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Matcher les clients",
    desc: "Méthode de profilage et prescription : quel resort pour quel type de client.",
  },
  {
    num: "3",
    icon: <MessageSquare size={20} strokeWidth={1.5} />,
    title: "Répondre aux objections",
    desc: "Arguments clés, comparatifs, tarifs, transferts et saisonnalité.",
  },
  {
    num: "4",
    icon: <Send size={20} strokeWidth={1.5} />,
    title: "Envoyer une demande",
    desc: "Comment adresser une demande complète et obtenir une réponse rapide.",
  },
];

const FORMATS = [
  {
    icon: <Monitor size={22} strokeWidth={1.5} />,
    title: "Webinaire 45 min",
    desc: "Session collective ouverte à plusieurs agences ou équipes.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Formation équipe 60–90 min",
    desc: "Formation dédiée à votre équipe avec cas pratiques et Q&R.",
  },
  {
    icon: <Briefcase size={22} strokeWidth={1.5} />,
    title: "Rendez-vous produit TO",
    desc: "Présentation sur-mesure pour équipes produit & contracting.",
  },
  {
    icon: <Star size={22} strokeWidth={1.5} />,
    title: "Mini coaching agence",
    desc: "Coaching personnalisé pour booster vos ventes.",
  },
];

const PROMESSES = [
  {
    icon: <Handshake size={22} strokeWidth={1.5} />,
    title: "Une formation neutre et utile",
    desc: "Contenu factuel, sans langage commercial, pour mieux conseiller vos clients.",
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Une méthode de prescription",
    desc: "Des outils simples pour identifier le bon resort et vendre en confiance.",
  },
  {
    icon: <UserCheck size={22} strokeWidth={1.5} />,
    title: "Un relais commercial francophone",
    desc: "Un contact dédié pour répondre vite et vous accompagner dans vos ventes.",
  },
];

const PROCESS_STEPS = [
  {
    icon: <Calendar size={18} strokeWidth={1.5} />,
    text: "Choisissez le format et la durée qui vous conviennent.",
  },
  {
    icon: <UserCheck size={18} strokeWidth={1.5} />,
    text: "Indiquez vos disponibilités, nous revenons vers vous sous 48h.",
  },
  {
    icon: <MessageSquare size={18} strokeWidth={1.5} />,
    text: "Session animée par un expert ARMH & Sun Siyam.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FormationPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/ressort.webp"
        overlay
        className="py-32"
      >
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 text-sm text-white/50 mb-12">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link
                href="/partenaire"
                className="hover:text-white transition-colors"
              >
                Partenaires
              </Link>
              <span>/</span>
              <Link
                href="/partenaires/sun-siyam"
                className="hover:text-white transition-colors"
              >
                Sun Siyam Resorts
              </Link>
              <span>/</span>
              <span className="text-white/80">Formation</span>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="md:col-span-7 space-y-7">
              <Reveal delay={0.1}>
                <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">
                  Formation / RDV Agence & TO
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                  Former vos équipes à vendre Sun Siyam avec{" "}
                  <span className="text-[#C9A96E]">
                    le bon resort pour le bon client.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-base text-white/90 leading-relaxed">
                  Cette page s'adresse aux agences, réseaux, TO et équipes
                  commerciales. Des formats courts, concrets et 100% utiles pour
                  mieux connaître la collection, matcher vos clients et augmenter
                  vos ventes.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <ButtonCTA href="#planifier" variant="primary">
                    <Calendar size={16} className="mr-2" /> Planifier une session
                  </ButtonCTA>
                  <Link
                    href="#programme"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    Voir le programme <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT – Visual */}
            <div className="md:col-span-5">
              <Reveal delay={0.2}>
                <div className="bg-[#0d2420] border border-[#C9A96E]/30 rounded-2xl p-5 shadow-2xl space-y-4">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/partenaires/sun-siyam/hero/hotels.webp"
                      alt="Formation Sun Siyam"
                      width={400}
                      height={220}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2420]/80 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-widest">
                        Sun Siyam Resorts
                      </p>
                      <p className="text-white text-sm font-semibold">
                        Collection Overview
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["6 resorts", "3 collections", "Maldives & Sri Lanka", "Support FR"].map(
                      (t, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-white/60 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-center"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── PROGRAMME RECOMMANDÉ ─────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
        id="programme"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Programme recommandé
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="block w-10 h-0.5 bg-[#C9A96E] mx-auto" />
              </Reveal>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {PROGRAMME_STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm h-full flex flex-col items-center gap-3 hover:bg-white/15 transition-colors">
                    {i < PROGRAMME_STEPS.length - 1 && (
                      <span className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 border-t border-dashed border-white/25 z-10" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/50 flex items-center justify-center text-[#C9A96E] font-bold text-sm">
                      {step.num}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FORMATS POSSIBLES ────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/audience.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Formats possibles
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="block w-10 h-0.5 bg-[#C9A96E] mx-auto" />
              </Reveal>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {FORMATS.map((f, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white/10 border border-[#C9A96E]/30 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-sm hover:bg-white/15 transition-colors h-full">
                    <div className="w-11 h-11 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E]">
                      {f.icon}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {f.title}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed flex-1">
                      {f.desc}
                    </p>
                    <Link
                      href="#planifier"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A96E] hover:text-white transition-colors"
                    >
                      En savoir plus <ArrowRight size={11} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CE QUE CETTE PAGE PROMET ─────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Ce que cette page doit promettre
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="block w-10 h-0.5 bg-[#C9A96E] mx-auto" />
              </Reveal>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {PROMESSES.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-7 flex flex-col gap-4 backdrop-blur-sm hover:bg-white/15 transition-colors h-full">
                    <div className="w-12 h-12 rounded-full bg-[#1f4fd8]/20 border border-[#1f4fd8]/40 flex items-center justify-center text-blue-300">
                      {p.icon}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {p.title}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── PLANIFIER UNE FORMATION ──────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/esg-3.webp"
        overlay
        className="py-24"
        id="planifier"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* LEFT – Form */}
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Planifier une formation
                </h2>
                <p className="text-base text-white/90 mb-6">
                  Remplissez le formulaire ci-dessous, nous vous proposerons
                  rapidement des créneaux adaptés à votre équipe.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
                  <FormationForm />
                </div>
              </Reveal>
            </div>

            {/* RIGHT – Process */}
            <div className="md:col-span-5 space-y-6 pt-12">
              <Reveal>
                <p className="text-base font-semibold text-[#C9A96E] uppercase tracking-widest">
                  Comment ça marche
                </p>
              </Reveal>
              {PROCESS_STEPS.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                      {s.icon}
                    </div>
                    <p className="text-base text-white/90 leading-relaxed pt-1.5">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ESG PILLARS ──────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-12"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {ESG_PILLARS.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-15 h-15 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      {p.icon}
                    </div>
                    <p className="text-base text-white/90">{p.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── KIT PRO MINI ─────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/esg-2.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  Recevoir le Kit Pro Sun Siyam en français
                </h2>
                <p className="text-base text-white/90 mt-2 leading-relaxed">
                  Comparatifs des hôtels, profils clients, arguments de vente,
                  idées de combinés et conseils marché francophone.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-3">
                  {KIT_PRO_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 border border-white/20 rounded-xl p-3 flex flex-col items-center gap-2 text-center"
                    >
                      <span className="[&>svg]:w-10 [&>svg]:h-10 text-[#C9A96E]">
                        {item.icon}
                      </span>
                      <p className="text-sm text-white/90 font-medium leading-tight">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.15}>
                <KitProForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHY ARMH STRIP ───────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-12"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-base text-white/90 uppercase tracking-widest mb-8">
                Pourquoi ARMH ? Une vraie transparence. Des arguments factuels et vérifiés.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {WHY_ARMH.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <p className="text-base text-white/90 leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── BOTTOM BAR ───────────────────────────────────────────────────────── */}
      <div className="bg-[#0d2420] border-t border-[#C9A96E]/30 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-white text-base font-semibold">
              ARMH Consulting × Sun Siyam Resorts
            </p>
            <p className="text-white/90 text-base">
              Le support de vente en français pour les professionnels
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/30 text-white text-sm hover:bg-white/10 transition-all"
            >
              <Phone size={14} /> Être rappelé
            </Link>
            <ButtonCTA href="#planifier" variant="primary">
              <Calendar size={14} className="mr-1.5" /> Planifier une session
            </ButtonCTA>
          </div>
        </div>
      </div>
    </>
  );
}
