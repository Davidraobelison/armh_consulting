import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Image from "next/image";
import KitProForm from "@/components/features/hotels/SunSiyam/KitProForm";
import { KIT_PRO_ITEMS, WHY_ARMH } from "@/data/hotels/sun-siyam";
import {
  LayoutGrid,
  UserCheck,
  MessageSquare,
  Layers,
  FileText,
  BookOpen,
  Target,
  Leaf,
  PhoneCall,
  Link2,
  ClipboardList,
  Calendar,
  BarChart3,
  GraduationCap,
  ArrowRight,
  Phone,
  Download,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURE_STRIP = [
  {
    icon: <LayoutGrid size={24} strokeWidth={1.5} />,
    title: "Comparatif des 6 hôtels",
    desc: "Tableau clair pour comparer positions, atouts, expériences et segments.",
  },
  {
    icon: <UserCheck size={24} strokeWidth={1.5} />,
    title: "Matching client",
    desc: "Outil d'aide à la décision pour orienter chaque client vers le bon resort.",
  },
  {
    icon: <MessageSquare size={24} strokeWidth={1.5} />,
    title: "Scripts de vente",
    desc: "Arguments clés et réponses aux objections pour convaincre simplement.",
  },
  {
    icon: <Layers size={24} strokeWidth={1.5} />,
    title: "Idées de combinés",
    desc: "Suggestions de combinés Maldives & Sri Lanka pour augmenter le panier moyen.",
  },
];

const WHAT_AGENCY_GETS = [
  {
    icon: <FileText size={20} strokeWidth={1.5} />,
    title: "Carte d'identité du groupe",
    desc: "Présentation de Sun Siyam Resorts et de ses engagements.",
  },
  {
    icon: <LayoutGrid size={20} strokeWidth={1.5} />,
    title: "Tableau comparatif des 6 hôtels",
    desc: "Positionnement, expériences, catégories, publics et atouts clés.",
  },
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Fiches express des 6 hôtels",
    desc: "Résumé des expériences, hébergements, points forts et prix indicatifs.",
  },
  {
    icon: <Target size={20} strokeWidth={1.5} />,
    title: "Quel resort pour quel brief client",
    desc: "Guide de matching selon le profil et les attentes.",
  },
  {
    icon: <Leaf size={20} strokeWidth={1.5} />,
    title: "Arguments RSE & différenciants",
    desc: "Points de vente clés et engagements durables.",
  },
  {
    icon: <PhoneCall size={20} strokeWidth={1.5} />,
    title: "Contacts ARMH & ressources",
    desc: "Interlocuteurs dédiés, liens utiles et support agence.",
  },
];

const FORM_VALUE_PROPS = [
  {
    icon: <Link2 size={20} strokeWidth={1.5} />,
    title: "URL dédiée",
    desc: "Un lien unique pour accéder au kit et le partager facilement avec votre équipe.",
  },
  {
    icon: <ClipboardList size={20} strokeWidth={1.5} />,
    title: "Formulaire court",
    desc: "Quelques informations pour personnaliser nos échanges.",
  },
  {
    icon: <Calendar size={20} strokeWidth={1.5} />,
    title: "Redirection prise de RDV",
    desc: "Accès à notre agenda pour échanger avec un expert.",
  },
  {
    icon: <BarChart3 size={20} strokeWidth={1.5} />,
    title: "Lead scoring",
    desc: "Vos besoins sont analysés pour vous proposer le bon accompagnement.",
  },
];

const HOTEL_THUMBS = [
  { src: "/assets/images/partenaires/sun-siyam/hotels/SW-2.jpg", label: "Siyam World" },
  { src: "/assets/images/partenaires/sun-siyam/hotels/SSIF-2.jpg", label: "Iru Fushi" },
  { src: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", label: "Iru Veli" },
  { src: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", label: "Vilu Reef" },
  { src: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", label: "Olhuveli" },
  { src: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", label: "Pasikudah" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KitProPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/hero-3.JPG"
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
              <span className="text-white/80">Kit Pro</span>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="md:col-span-6 space-y-7">
              <Reveal delay={0.1}>
                <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                  Recevoir le{" "}
                  <span className="text-[#C9A96E]">Kit Pro Sun Siyam</span> en
                  français
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base text-white font-medium leading-relaxed">
                  Le support de vente pour comparer rapidement les 6 adresses
                  et orienter le bon client vers le bon resort.
                </p>
                <p className="text-sm text-white/70 leading-relaxed mt-3">
                  Un kit pensé pour les agences : comparatif clair, fiches
                  express, argumentaires clés et idées de combinés. Tout ce
                  qu'il faut pour vendre mieux, plus vite.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <ButtonCTA href="#recevoir-kit" variant="primary">
                    <Download size={16} className="mr-2" /> Télécharger le kit
                  </ButtonCTA>
                  <Link
                    href="/partenaires/sun-siyam/formation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    Former mon équipe
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT – PDF Visual */}
            <div className="md:col-span-6 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative">
                  <span className="absolute -top-3 -right-3 z-10 bg-[#C9A96E] text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg tracking-widest uppercase">
                    PDF
                  </span>
                  <div className="bg-[#0d2420] border border-[#C9A96E]/30 rounded-2xl p-5 w-72 shadow-2xl">
                    <div className="mb-4 text-center space-y-1">
                      <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest">
                        Kit Pro Sun Siyam
                      </p>
                      <p className="text-white/60 text-[10px]">
                        Le support de vente pour les agences
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {HOTEL_THUMBS.map((h, i) => (
                        <div
                          key={i}
                          className="relative rounded overflow-hidden"
                        >
                          <Image
                            src={h.src}
                            alt={h.label}
                            width={120}
                            height={80}
                            className="w-full h-20 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1.5 py-0.5">
                            <p className="text-[9px] text-white/80 font-medium">
                              Sun Siyam {h.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex justify-end">
                      <span className="inline-block text-[9px] font-bold text-[#C9A96E] border border-[#C9A96E]/40 rounded-full px-2 py-0.5 uppercase tracking-wider">
                        En français · 100% prêt à l'emploi
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FEATURE STRIP ────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-16"
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {FEATURE_STRIP.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E]">
                    {f.icon}
                  </div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CE QUE L'AGENCE REÇOIT ───────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/hotels.jpg"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Ce que l'agence reçoit
                </h2>
              </Reveal>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {WHAT_AGENCY_GETS.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-sm hover:bg-white/15 transition-colors h-full">
                    <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── RECEVOIR LE KIT – FORM ────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/esg-2.jpg"
        overlay
        className="py-24"
        id="recevoir-kit"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* LEFT – Form */}
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                  Recevoir le Kit Pro
                </h2>
                <p className="text-sm text-white/55 mb-6">
                  Remplissez le formulaire pour recevoir le kit immédiatement.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <KitProForm />
              </Reveal>
            </div>

            {/* RIGHT – Value props */}
            <div className="md:col-span-5 space-y-6 pt-12">
              {FORM_VALUE_PROPS.map((vp, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0 mt-0.5">
                      {vp.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {vp.title}
                      </p>
                      <p className="text-xs text-white/55 mt-0.5 leading-relaxed">
                        {vp.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FORMER MON ÉQUIPE ─────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/partenaires/sun-siyam/hero/audience.jpg"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* LEFT */}
            <div className="md:col-span-4 space-y-4">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  Former mon équipe ou partager un brief client
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm text-white/70 leading-relaxed">
                  Besoin d'un temps d'échange, d'une formation express ou
                  d'aide pour un dossier en cours ? Nos experts sont là pour
                  vous accompagner.
                </p>
              </Reveal>
            </div>

            {/* RIGHT – 2 action cards */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Reveal delay={0.1}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]">
                    <GraduationCap size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-semibold text-white">
                    Formation agences
                  </p>
                  <p className="text-sm text-white/60 flex-1">
                    Sessions en ligne sur les 6 hôtels, les combinés et les
                    argumentaires clés.
                  </p>
                  <Link
                    href="/partenaires/sun-siyam/formation"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#C9A96E]/50 text-[#C9A96E] text-sm font-medium hover:bg-[#C9A96E]/10 transition-all self-start"
                  >
                    Former mon équipe <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <MessageSquare size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-semibold text-white">
                    Partager un brief client
                  </p>
                  <p className="text-sm text-white/60 flex-1">
                    Décrivez votre demande et recevez nos recommandations
                    personnalisées.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all self-start"
                  >
                    Envoyer mon brief <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHY ARMH STRIP ───────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-14"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {WHY_ARMH.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-3 text-center hover:bg-white/15 transition-colors backdrop-blur-sm"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-xs text-white font-medium leading-snug">
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
            <p className="text-white text-sm font-semibold">
              ARMH Consulting × Sun Siyam Resorts
            </p>
            <p className="text-white/40 text-xs">
              Magazine d'inspirations et conversion — version finale
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/30 text-white text-sm hover:bg-white/10 transition-all"
            >
              <Phone size={14} /> Être rappelé
            </Link>
            <ButtonCTA href="#recevoir-kit" variant="primary">
              <Download size={14} className="mr-1.5" /> Kit Pro
            </ButtonCTA>
          </div>
        </div>
      </div>
    </>
  );
}
