import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
  overlay?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  backgroundImage,
  overlay = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Overlay optionnel */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/35" />
      )}

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
