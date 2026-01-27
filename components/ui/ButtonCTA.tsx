import Link from "next/link";
import clsx from "clsx";

type ButtonCTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};


export default function ButtonCTA({
  href,
  children,
  variant = "primary",
  className,
}: ButtonCTAProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm md:text-base font-semibold",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "hover:-translate-y-0.5 hover:shadow-lg",
        variant === "primary" &&
          "bg-[#1f4fd8] text-white hover:bg-[#173ca6] focus:ring-[#1f4fd8]",
       variant === "secondary" &&
        "bg-white/90 text-[#1f4fd8] border border-white/80 hover:bg-[#1f4fd8] hover:text-white focus:ring-[#1f4fd8]",

        className
      )}
    >
      {children}
    </Link>
  );
}
