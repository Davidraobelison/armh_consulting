import { generateSeoMetadata } from "@/lib/seo";
import PartnersPage from "../(home)/_components/PartenerSections";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Nos réalisations",
    path: "/discographie",
  });

export default function Realisation() {
  return (
    <>
      <PartnersPage />
    </>
  );
}
