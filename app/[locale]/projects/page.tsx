import ProjectCard from "@/components/projects/ProjectCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { projectsPreview } from "@/data/projectsPreview";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Nos réalisations",
    path: "/discographie",
  });

export default function Realisation() {
  return (
    <>
      <Section className="py-32" id="projects"
      backgroundImage="/assets/images/realisation/hero.jpg"
      overlay
      >
        <Container>

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-2xl font-semibold uppercase text-white">
              Quelques projets qui parlent pour nous
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Un aperçu des actions que nous menons avec nos partenaires
              sur les marchés francophones.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {projectsPreview.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            ))}
          </div>

          {/* <div className="flex justify-center pt-16">
            <ButtonCTA href="/projets">
              Voir tous nos projets
            </ButtonCTA>
          </div> */}

        </Container>
      </Section>
    </>
  );
}



