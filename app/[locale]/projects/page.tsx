import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { generateSeoMetadata } from "@/lib/seo";
import ProjectGallerySection from "./_components/Photogallerysection";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Nos réalisations",
    path: "/projects",
  });

const formationPhotos = [
  { src: "/assets/images/projects/formation/1.jpeg", caption: "Session de formation" },
  { src: "/assets/images/projects/formation/2.jpeg", caption: "Workshop agents" },
];

const iftmPhotos = [
  { src: "/assets/images/projects/iftm/1.jpeg",  caption: "Stand IFTM" },
  { src: "/assets/images/projects/iftm/2.jpeg",  caption: "Rencontres B2B" },
  { src: "/assets/images/projects/iftm/3.jpeg",  caption: "Espace partenaires" },
  { src: "/assets/images/projects/iftm/4.jpeg",  caption: "Présentation presse" },
  { src: "/assets/images/projects/iftm/5.jpeg",  caption: "Networking salon" },
  { src: "/assets/images/projects/iftm/6.jpeg",  caption: "Table ronde" },
  { src: "/assets/images/projects/iftm/7.jpeg",  caption: "Échanges professionnels" },
  { src: "/assets/images/projects/iftm/8.jpeg",  caption: "Rencontres destinations" },
  { src: "/assets/images/projects/iftm/9.jpeg",  caption: "Ateliers B2B" },
  { src: "/assets/images/projects/iftm/10.jpeg", caption: "Conférence partenaires" },
  { src: "/assets/images/projects/iftm/11.jpeg", caption: "Cocktail networking" },
  { src: "/assets/images/projects/iftm/12.jpeg", caption: "Présentation produits" },
  { src: "/assets/images/projects/iftm/13.jpeg", caption: "Espace presse" },
  { src: "/assets/images/projects/iftm/14.jpeg", caption: "Clôture salon" },
];

const networkingPhotos = [
  { src: "/assets/images/projects/networking/1.jpeg", caption: "Soirée networking" },
  { src: "/assets/images/projects/networking/2.jpeg", caption: "Rencontres partenaires" },
  { src: "/assets/images/projects/networking/3.jpeg", caption: "Échanges B2B" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <Section
        className="py-32"
        backgroundImage="/assets/images/projects/1.webp"
        overlay
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mt-16">
            <h1 className="text-3xl md:text-5xl font-light tracking-wide text-white uppercase">
              Quelques projets qui parlent pour nous
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Un aperçu des actions que nous menons avec nos partenaires
              sur les marchés francophones.
            </p>
          </div>
        </Container>
      </Section>

      {/* GALERIES */}
      <Section
        backgroundImage="/assets/images/projects/3.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="space-y-20">

            <ProjectGallerySection
              label="Formation"
              title="Formation agents de voyages"
              subtitle="Transmettre les informations nécessaires et les outils clés pour permettre le développement du business."
              photos={formationPhotos}
            />

            <ProjectGallerySection
              label="IFTM"
              title="Salon IFTM Top Resa"
              subtitle="Présence et représentation sur le salon professionnel de référence du tourisme en France."
              photos={iftmPhotos}
            />

            <ProjectGallerySection
              label="Networking"
              title="Événements & Networking"
              subtitle="Soirées, inaugurations, galas — promouvoir les destinations et tisser des liens durables entre partenaires."
              photos={networkingPhotos}
            />

          </div>
        </Container>
      </Section>
    </>
  );
}