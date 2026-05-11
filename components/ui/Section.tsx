import { ReactNode } from "react";
import Image from "next/image";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
  overlay?: boolean;
  priority?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  backgroundImage,
  overlay = false,
  priority = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 ${className}`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          quality={85}
          className="object-cover object-bottom"
        />
      )}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
