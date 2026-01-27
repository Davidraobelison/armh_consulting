import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-semibold">404</h1>
          <p className="text-lg text-gray-600">
            Page introuvable
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded"
          >
            Retour à l’accueil
          </Link>
        </div>
      </Container>
    </Section>
  );
}
