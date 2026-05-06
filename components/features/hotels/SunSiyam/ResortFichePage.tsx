import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import FicheContactForm from "./FicheContactForm";
import { ResortFicheData } from "@/data/hotels/sun-siyam-fiches";

type Props = { data: ResortFicheData };

const COLLECTION_COLORS: Record<string, string> = {
  "Luxury Collection": "bg-amber-700",
  "Privé Collection": "bg-teal-700",
  "Lifestyle Collection": "bg-sky-700",
};

// ─── Small reusable pieces ────────────────────────────────────────────────────

function CibleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-colors h-full">
      <div className="w-15 h-15 rounded-full bg-white/15 flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <p className="font-semibold text-white text-base">{title}</p>
      <p className="text-sm text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

function ArgumentCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/15 transition-colors">
      <div className="w-full flex justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white [&>svg]:w-8 [&>svg]:h-8">
          {icon}
        </div>
      </div>
      <div>
        <p className="font-semibold text-white text-base mb-2">{title}</p>
        <p className="text-sm text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PreuveItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white [&>svg]:w-8 [&>svg]:h-8">
        {icon}
      </div>
      <p className="text-base font-medium text-white/90 leading-tight max-w-[100px]">{label}</p>
    </div>
  );
}
function ExperienceCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
      <div className="relative h-36 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-3">
        <p className="font-semibold text-white text-base mb-1">{title}</p>
        <p className="text-sm text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function AutreResortCard({ resort }: { resort: ResortFicheData["autresResorts"][0] }) {
  return (
    <div className="flex gap-4 items-start bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 hover:bg-white/15 transition-colors">
      <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0">
        <Image src={resort.image} alt={resort.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="font-semibold text-white text-sm leading-snug">{resort.name}</p>
        <p className="text-xs text-white/55 leading-relaxed">{resort.tagline}</p>
        <Link
          href={`/partenaires/sun-siyam/${resort.slug}`}
          className="text-xs font-medium text-[#C9A96E] hover:text-white transition-colors"
        >
          Voir la fiche →
        </Link>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ResortFichePage({ data }: Props) {
  const collectionBadgeColor = COLLECTION_COLORS[data.collection] ?? "bg-teal-700";

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <Section backgroundImage={data.heroImage} overlay className="py-32">
        <Container>
          <Reveal>
            <Link
              href="/partenaires/sun-siyam"
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors mb-10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Retour à la collection Sun Siyam
            </Link>
          </Reveal>

          <div className="max-w-3xl space-y-6">
            <Reveal delay={0.05}>
              <span className={`inline-block text-[10px] font-semibold text-white px-3 py-1 rounded-full uppercase tracking-wide ${collectionBadgeColor}`}>
                {data.collection}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{data.name}</h1>
              <p className="text-xl md:text-2xl text-[#C9A96E] font-medium mt-3 leading-snug">{data.tagline}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base text-white/95 leading-relaxed max-w-xl">{data.description}</p>
            </Reveal>

            {data.infoBadges && (
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  {data.infoBadges.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-white/70 text-xl">
                      <span className="text-[#C9A96E]">{b.icon}</span>
                      {b.label}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {data.heroBadges.map((badge, i) => (
                  <span key={i} className="text-base font-medium px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/85 backdrop-blur-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-10">
                <Link
                  href="#demander-fiche"
                  className="inline-flex items-center gap-2 bg-[#1f4fd8] hover:bg-[#b8923a] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Recevoir le Kit Pro
                </Link>
                {data.ctaSecondaryLabel && (
                  <Link
                    href="#demander-fiche"
                    className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {data.ctaSecondaryLabel} →
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 2. À VENDRE À ────────────────────────────────────────────────── */}
      <Section backgroundImage="/assets/images/others/bg_image_principale.webp" overlay className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-20">
              À vendre à
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {data.cibles.map((c, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <CibleCard {...c} />
              </Reveal>
            ))}
          </div>

        </Container>
      </Section>

      {/* ── 3. POURQUOI ÇA VEND ──────────────────────────────────────────── */}
      <Section backgroundImage="/assets/images/others/img5.webp" overlay className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12">
              Pourquoi ça vend
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {data.arguments.map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ArgumentCard {...a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. LES PREUVES ───────────────────────────────────────────────── */}
      <Section backgroundImage="/assets/images/others/bg_image_principale.webp" overlay className="py-3">
        <Container>
          <Reveal>
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-20">
              Les preuves à mettre en avant
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {data.preuves.map((p, i) => (
                <PreuveItem key={i} {...p} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 5. EXPÉRIENCES + FORM ────────────────────────────────────────── */}
      <Section id="demander-fiche" backgroundImage="/assets/images/others/img5.webp" overlay className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">
              Expériences signature
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {data.experiences.map((exp, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <ExperienceCard {...exp} />
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <FicheContactForm resortName={data.name} ctaLabel={data.argumentAgence.ctaLabel} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. ARGUMENT AGENCE ───────────────────────────────────────────── */}
      <Section backgroundImage="/assets/images/contact/2.webp" overlay className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 space-y-5">
              {data.argumentAgence.isQuote && data.argumentAgence.quote ? (
                <>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A96E">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">Argument agence</p>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-semibold text-[#C9A96E] italic leading-snug">
                    « {data.argumentAgence.quote} »
                  </blockquote>
                  <p className="text-base text-white/70 leading-relaxed">{data.argumentAgence.body}</p>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold text-[#C9A96E] uppercase tracking-widest">Argument agence</p>
                  <p className="text-xl md:text-2xl font-semibold text-white leading-snug">{data.argumentAgence.title}</p>
                  <p className="text-base text-white/70 leading-relaxed">{data.argumentAgence.body}</p>
                </>
              )}
              {data.argumentAgence.ctaLabel && (
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="#demander-fiche"
                    className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8923a] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                  >
                    {data.argumentAgence.ctaLabel} →
                  </Link>
                  <Link
                    href="#demander-fiche"
                    className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Recevoir le Kit Pro Sun Siyam →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. AUTRES RESORTS ────────────────────────────────────────────── */}
      <Section backgroundImage="/assets/images/others/bg_image_principale.webp" overlay className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-white text-center mb-12">
              Autres resorts à explorer
            </h2>
          </Reveal>

          {/* 3 cards resorts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-10">
            {data.autresResorts.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <AutreResortCard resort={r} />
              </Reveal>
            ))}
          </div>

          {/* Bouton collection centré en bas */}
          <Reveal delay={0.3}>
            <div className="flex justify-center">
              <Link
                href="/partenaires/sun-siyam"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 000 20M2 12h20" />
                </svg>
                Voir la collection Sun Siyam →
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 8. FOOTER BAR ────────────────────────────────────────────────── */}
      <div className="bg-[#446075] backdrop-blur-sm py-5 border-t border-white/10">
        <Container>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {data.footerBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                <span className="w-1 h-1 rounded-full bg-[#C9A96E] shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── STICKY BOTTOM BAR (mobile) ───────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-white/10 flex md:hidden">
        <Link
          href="tel:+33"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-white border-r border-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Être rappelé
        </Link>
        <Link
          href="#demander-fiche"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-[#C9A96E]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Kit Pro
        </Link>
      </div>
    </>
  );
}