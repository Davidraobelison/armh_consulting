import { notFound } from "next/navigation";
import { RESORT_FICHES } from "@/data/hotels/sun-siyam-fiches";
import ResortFichePage from "@/components/features/hotels/SunSiyam/ResortFichePage";

type Props = {
  params: Promise<{ resort: string }>;
};

export function generateStaticParams() {
  return Object.keys(RESORT_FICHES).map((slug) => ({ resort: slug }));
}

export default async function Page({ params }: Props) {
  const { resort } = await params;
  const data = RESORT_FICHES[resort];
  if (!data) notFound();
  return <ResortFichePage data={data} />;
}
