"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type CategoryData = {
  slug: string;
  label: string;
};

const CATEGORIES: CategoryData[] = [
  { slug: "destinations", label: "Destinations & institutions touristiques" },
  { slug: "hotels", label: "Hôtels et groupes hôteliers" },
  { slug: "dmc", label: "DMC & Prestataires locaux" },
  { slug: "touroperateurs", label: "Tours Opérateurs & Agences de voyages" },
  { slug: "formation", label: "Organismes de formation & Écoles du tourisme" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PromesseCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 h-full">
        <h4 className="text-base font-semibold text-blue-200 mb-3 text-center">
          {title}
        </h4>
        <p className="text-sm text-white/70 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

function SpecialiteCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="bg-[#F5EFE4]/10 border border-[#C9A96E]/30 rounded-2xl p-5 h-full">
        <h4 className="text-sm font-semibold text-[#C9A96E] tracking-wider mb-3 text-center">
          {title}
        </h4>
        <p className="text-base text-white/70 leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}

function DestinationCard({
  image,
  alt,
  name,
  description,
  imageClassName,
}: {
  image: string;
  alt: string;
  name: string;
  description: string;
  imageClassName?: string;
}) {
  return (
    <Reveal>
      <div className="relative rounded-2xl overflow-hidden group">
        <Image
          src={image}
          alt={alt}
          width={400}
          height={320}
          className={cn(
            "w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700",
            imageClassName
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-1">
            {name}
          </p>
          <p className="text-xs text-white/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BBVoyagePartnerPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.categorie as string) ?? "dmc";

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-32"
      >
        <Container>
          {/* Breadcrumb */}
          <Reveal>
            <div className="flex items-center gap-3 text-sm text-white/40 mb-12">
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
                href="/partenaires/dmc"
                className="hover:text-white transition-colors"
              >
                DMC & Prestataires locaux
              </Link>
              <span>/</span>
              <span className="text-white/70">BBVoyage / IndeXperience</span>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

              {/* LEFT – Quote + Badge */}
              <div className="md:col-span-7 space-y-8">
                {/* ARMH Header */}
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-[2px] bg-blue-400" />
                    <p className="text-lg font-semibold text-blue-300 uppercase">
                      ARMH Consulting - Partenaire de représentation France
                    </p>
                  </div>
                </Reveal>

                {/* Title */}
                <Reveal delay={0.1}>
                  <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white">
                        BBVoyage /{" "}
                        <span className="font-semibold text-blue-300">
                        IndeXperience
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 mt-2 font-medium uppercase tracking-wide">
                        DMC Inde · Népal · Bhoutan
                    </p>

                  <div className="flex items-center gap-3 mt-4">
                    <Image
                    src="/assets/images/partenaires/logo/LOGO INDEX2.jpg"
                    alt="Logo BBVoyage"
                    width={48}
                    height={48}
                    className="object-contain"
                    />
                    <span className="text-xs text-white/40 font-medium uppercase tracking-widest">
                    by
                    </span>
                    <Image
                    src="/assets/images/partenaires/logo/BB Voyage Logo high res.JPG"
                    alt="Logo IndeXperience"
                    width={48}
                    height={48}
                    className="object-contain"
                    />
                </div>
                </Reveal>

                {/* Quote */}
                <Reveal delay={0.3}>
                  <blockquote className="border-l-2 border-blue-400 pl-6 py-2">
                    <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed font-light">
                      « Vous ne cherchez pas qu'un fournisseur. Vous cherchez un
                      partenaire stratégique, capable de tenir l'expérience,
                      même sous pression. »
                    </p>
                  </blockquote>
                </Reveal>

                {/* Description */}
                <Reveal delay={0.4}>
                  <p className="text-xl text-white/70 leading-relaxed">
                    C'est là que BBVoyage se distingue : clarté, disponibilité,
                    finesse du terrain, sens du détail et vraie capacité à
                    rester fiable en période de turbulence. Le blog de Véronique
                    Narayana Swamy, les prises de parole récentes et la qualité
                    du site www.indexperience.fr renforcent cette promesse par
                    une parole incarnée et argumentée.
                  </p>
                </Reveal>

                {/* CTAs */}
                <Reveal delay={0.5}>
                  <div className="flex flex-wrap gap-4">
                    <ButtonCTA href="/contact" variant="primary">
                      Parlons de votre projet
                    </ButtonCTA>
                    <a
                      href="https://www.indexperience.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-blue-400/50 text-blue-200 text-sm font-medium hover:bg-blue-900/30 transition-all"
                    >
                      Découvrir indexperience.fr ↗
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT – Logo + Badge */}
                {/* RIGHT – Danseuse + Macaron */}
                <div className="md:col-span-5 flex flex-col items-center gap-6">
                <Reveal delay={0.2}>
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/images/partenaires/DANSEUSE INDIENNE.jpg"
                        alt="Danseuse indienne"
                        width={480}
                        height={560}
                        className="w-full h-[420px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="flex items-center justify-center">
                    <Image
                        src="/assets/images/partenaires/macaron-bb-voyage.png"
                        alt="BBVoyage IndeXperience logo"
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-xl"
                    />
                    </div>
                </Reveal>
                </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── PRÉSENTATION + PHOTO ─────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* LEFT – Content */}
            <div className="md:col-span-6 space-y-6">
              {/* DMC Badge */}
              <Reveal>
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full">
                  DMC Inde · Népal · Bhoutan
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                  Bien plus qu'un réceptif :{" "}
                  <span className="text-blue-300">
                    un partenaire de terrain qui tient sa promesse
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base text-white/80 leading-relaxed">
                  Pour vos clients, BBVoyage/IndeXperience conçoit des
                  expériences immersives, élégantes et profondément humaines.
                  Pour vous, professionnels du voyage et acteurs du MICE, c'est
                  un partenaire fiable, réactif et différenciant, capable de
                  transformer une intention commerciale en expérience vécue.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-base text-white/70 leading-relaxed">
                  Porté par Véronique & Raghu Narayana Swamy - deux regards
                  complémentaires qui réunissent la compréhension des marchés
                  francophones, l'expérience des agences, et une connaissance
                  intime du terrain indien, népalais et bhoutanais.
                </p>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.4}>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { value: "+20 ans", label: "d'expertise terrain sur mesure" },
                    {
                      value: "3",
                      label: "destinations : Inde, Népal, Bhoutan",
                    },
                    { value: "2026", label: "recommandé par Partir.com" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-blue-300">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-white/50 mt-1 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT – Dancer Photo + Promesse Box */}
            <div className="md:col-span-6 flex flex-col justify-center">
                <Reveal delay={0.2}>
                    <div className="relative rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/images/partenaires/fete-en-inde.jpeg"
                        alt="Fête en Inde"
                        width={560}
                        height={480}
                        className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {/* Promesse Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-blue-900/80 backdrop-blur-sm">
                        <p className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest mb-2">
                        Promesse & Proposition de valeur
                        </p>
                        <p className="text-sm text-white/90 leading-relaxed">
                        Créer des voyages irremplaçables, hors des schémas
                        standards, avec une logistique solide, des accès rares,
                        une vraie sensibilité du terrain et une capacité prouvée à
                        rester présent quand la situation se tend.
                        </p>
                    </div>
                    </div>
                </Reveal>
                </div>
          </div>
        </Container>
      </Section>

      {/* ── LA PROMESSE ──────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-14">
              {/* Left heading */}
              <div className="md:col-span-5 space-y-4">
                <Reveal>
                  <p className="text-lg font-semibold text-blue-300 uppercase tracking-widest">
                    La Promesse
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Faire vivre l'Inde, le Népal et le Bhoutan de l'intérieur -
                    jamais en surface.
                  </h2>
                </Reveal>
              </div>

              {/* Right description */}
              <div className="md:col-span-7">
                <Reveal delay={0.2}>
                  <p className="text-base text-white/75 leading-relaxed">
                    La valeur de IndeXpérience / BBVoyage ne se limite pas à
                    produire un itinéraire. Elle réside dans la justesse du
                    programme, la qualité des partenaires locaux, la
                    compréhension des attentes de vos clients et la capacité à
                    sécuriser l'expérience du premier brief au retour.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* 3 Pillars */}
            <div className="grid gap-6 md:grid-cols-3">
              <PromesseCard
                title="Une promesse tenue"
                description="Le discours commercial et l'expérience terrain sont alignés. Ce qui est vendu est réalisable, cohérent, incarné et maîtrisé."
              />
              <PromesseCard
                title="Une vraie co-construction B2B"
                description="Chaque projet est pensé selon votre clientèle, votre niveau d'exigence, votre promesse éditoriale et votre stratégie de différenciation."
              />
              <PromesseCard
                title="Une réactivité qui protège votre image"
                description="Dans les périodes sensibles et les situations imprévues, l'équipe informe, ajuste et coordonne vite. Ce niveau de présence change tout pour vos voyageurs comme pour votre marque."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── L'EXPERTISE INCARNÉE ─────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-14">
            {/* Header */}
            <div className="grid gap-6 md:grid-cols-2 grid-cols-1 items-center">
                <div className="md:col-span-5 space-y-3">
                    <Reveal>
                    <p className="text-lg font-semibold text-blue-300 uppercase tracking-widest">
                        L'Expertise Incarnée
                    </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                        Véronique & Raghu Narayana Swamy : deux regards, une même
                        exigence du vrai.
                    </h2>
                    </Reveal>
                </div>
                <div className="md:col-span-7">
                    <Reveal delay={0.2}>
                    <p className="text-base text-white/75 leading-relaxed">
                        Le duo réunit la compréhension des marchés francophones,
                        l'expérience des agences, un sens très juste de l'expérience
                        voyageur et une connaissance intime du terrain indien,
                        népalais et bhoutanais.
                    </p>
                    </Reveal>
                </div>
            </div>

            {/* Véronique Photo */}



            <Reveal delay={0.1}>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                        src="/assets/images/partenaires/EXPERTE EXPLICATIONS BBVOYAGE PURE 2025.jpg"
                        alt="Véronique Narayana Swamy en réunion"
                        width={900}
                        height={400}
                        className="w-full h-72 md:h-96 object-cover object-top"
                        />
                    </div>       
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                        src="/assets/images/partenaires/Raghou.jpeg"
                        alt="Véronique Narayana Swamy en réunion"
                        width={900}
                        height={400}
                        className="w-full h-72 md:h-96 object-cover"
                        />
                    </div>
                </div>              
            </Reveal>

            {/* Two experts */}
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 space-y-3">
                  <p className="text-base font-semibold text-[#C9A96E] uppercase tracking-widest">
                    Véronique Narayana Swamy
                  </p>
                  <p className="text-xl font-semibold text-white">
                    La vision, le sens, la relation agence
                  </p>
                  <p className="text-base text-white/70 leading-relaxed">
                    Véronique ouvre depuis plus de deux décennies les portes de
                    l'Inde, du Népal et du Bhoutan à des professionnels en quête
                    d'expériences vraies. Elle sait écouter un brief, lire les
                    attentes d'une clientèle, transformer une idée en programme
                    vendable et préserver une ligne éditoriale exigeante basée
                    sur l'immersion, le respect, la rencontre et la
                    transformation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 space-y-3">
                  <p className="text-base font-semibold text-[#C9A96E] uppercase tracking-widest">
                    Raghu Narayana Swamy
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Le terrain, les accès, la profondeur locale
                  </p>
                  <p className="text-base text-white/70 leading-relaxed">
                    Raghu apporte l'ancrage local, les réseaux fiables, la
                    lecture des territoires et la capacité à faire émerger des
                    expériences hors des sentiers battus sans compromettre la
                    qualité de service. Son approche privilégie les traditions
                    vivantes, les rencontres sincères et les réalités locales
                    plutôt que le folklore de façade.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SPÉCIALITÉS ──────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center space-y-3">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Ayurvéda, bien-être, MICE et destination weddings :{" "}
                  <span className="text-blue-300">
                    des expertises qui font la différence
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base text-white/70 max-w-2xl mx-auto">
                  BBVoyage répond à des demandes premium et à des segments
                  porteurs avec une exécution fluide, des partenaires locaux
                  sérieux et une vraie capacité de personnalisation.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <SpecialiteCard
                title="Ayurvéda authentique"
                description="Au Kerala, l'approche privilégie des centres sérieux, des médecins diplômés, des cures cohérentes et une sélection qui va au-delà du simple « spa exotique »."
              />
              <SpecialiteCard
                title="Bien-être transformateur"
                description="Yoga, méditation, détox, équilibre corps-esprit, temps de pause et immersion sensorielle : une réponse forte à la quête actuelle de sens et de ressourcement."
              />
              <SpecialiteCard
                title="MICE"
                description="Timing fluide, transferts, plans B, lieux de caractère, expériences privées, coordination discrète : l'intendance ne se voit pas, mais elle change tout."
              />
              <SpecialiteCard
                title="Mariages & Célébrations"
                description="Lieux iconiques ou confidentiels, privatisations, expérience invités, extension honeymoon ou wellness : chaque détail est pensé avec précision."
              />
            </div>

            {/* Tags */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {[
                  "Ayurvéda authentique",
                  "MICE",
                  "Destination weddings",
                  "Bien-être transformateur",
                  "Mariages & célébrations",
                  "Immersion culturelle",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium px-4 py-1.5 rounded-full bg-[#F5EFE4] text-[#8B6A3E]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── DESTINATIONS SIGNATURE ───────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-24"
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-6 space-y-3">
                <Reveal>
                  <p className="text-lg font-semibold text-blue-300 uppercase tracking-widest">
                    Destinations Signature
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Inde, Népal, Bhoutan : trois terrains, un même fil rouge -
                    immersion, rencontres, transformation.
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6">
                <Reveal delay={0.2}>
                  <p className="text-base text-white/75 leading-relaxed">
                    Loin des programmes interchangeables, chaque destination est
                    abordée par ce qu'elle a de plus vivant : ses rythmes, ses
                    visages, ses savoir-faire, ses paysages et sa capacité à
                    transformer le regard du voyageur.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* 3 Destination Photos */}
            <div className="grid gap-6 md:grid-cols-3">
              <DestinationCard
                image="/assets/images/partenaires/fete-en-inde.jpeg"
                alt="Fête en Inde"
                name="Inde"
                description="Des villages, des maisons de caractère, des traditions vivantes, des adresses choisies pour leur âme plutôt que pour leur seule visibilité."
              />
              <DestinationCard
                image="/assets/images/partenaires/femmes nepalaises.jpg"
                alt="Femmes népalaises"
                name="Népal"
                description="Une lecture plus intime du pays, entre relief, culture et rencontres humaines, loin d'un imaginaire réduit à la haute performance trekking."
              />
              <DestinationCard
                imageClassName="object-top"
                image="/assets/images/partenaires/enfant Bhoutanais.jpg"
                alt="Enfant bhoutanais"
                name="Bhoutan"
                description="Une destination rare, spirituelle et profondément préservée, à raconter avec nuance, sobriété et profondeur plutôt qu'avec des clichés d'altitude."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── LE BLOG ──────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-6 space-y-5">
                <Reveal>
                  <p className="text-lg font-semibold text-blue-300 uppercase tracking-widest">
                    Le Blog
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                    Une parole éditoriale qui montre la différence entre vendre
                    une destination… et la comprendre.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Le blog de Véronique sur IndeXpérience révèle une expertise
                    de terrain rare : défense d'un Ayurvéda sérieux, regard sans
                    filtre sur les clichés touristiques, mise en valeur de lieux
                    méconnus, réflexion sur l'éthique du voyage et sur ce que
                    signifie vraiment « faire vivre » une destination.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      "Articles sur l'Ayurvéda, le Kerala et le voyage intérieur",
                      "Regards francs sur le terrain, l'authenticité et la valeur de l'expertise",
                      "Inspirations éditoriales pour nourrir vos ventes et vos narratifs de marque",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.4}>
                  <a
                    href="https://www.indexperience.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-blue-300 underline underline-offset-4 hover:text-blue-200 transition-colors"
                  >
                    www.indexperience.fr ↗
                  </a>
                </Reveal>
              </div>

              <div className="md:col-span-6">
                <Reveal delay={0.2}>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/images/partenaires/Comprendre inde.jpeg"
                      alt="Terrain Nepal"
                      width={560}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <Section
        backgroundImage="/assets/images/contact/2.webp"
        overlay
        className="py-32"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Envie de construire une offre Inde, Népal ou Bhoutan qui se
                distingue vraiment ?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/80 leading-relaxed">
                Ayurvéda, séjours bien-être, MICE, destination weddings,
                itinéraires immersifs ou programme signature : ARMH Consulting
                et BBVoyage / IndeXpérience vous aident à concevoir des voyages
                mémorables, crédibles et parfaitement orchestrés.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonCTA href="/contact">
                  Contacter ARMH Consulting
                </ButtonCTA>
                <a
                  href="https://www.indexperience.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Voir le site
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}