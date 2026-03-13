import Image from "next/image";
import ButtonCTA from "@/components/ui/ButtonCTA";

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags?: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg bg-white/70 shadow-sm hover:shadow-md transition-shadow">
      
      {/* IMAGE */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENU */}
      <div className="flex flex-col justify-between flex-1 px-6 py-6 space-y-4 text-center">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>

          {subtitle && (
            <h4 className="text-sm uppercase tracking-wide text-gray-500">
              {subtitle}
            </h4>
          )}

          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* TAGS */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wide text-gray-500 border border-gray-200 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        {/* {href && (
          <div className="pt-6 flex justify-center">
            <ButtonCTA href={href} variant="secondary">
              Voir le projet →
            </ButtonCTA>
          </div>
        )} */}
      </div>
    </div>
  );
}
