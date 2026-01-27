import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
};

export default function Hero({
  title,
  subtitle,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-xl md:text-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
