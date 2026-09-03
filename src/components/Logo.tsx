import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  /** "light" para uso sobre fundo escuro (bordô), "dark" para uso sobre fundo claro */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className }: LogoProps) {
  const isLight = variant === "light";
  const primary = isLight ? "text-amp-cream" : "text-amp-wine";
  const secondary = isLight ? "text-amp-sand" : "text-amp-wine/70";

  return (
    <Link
      href="/#topo"
      className={clsx("group flex items-center gap-3", className)}
      aria-label={`${"AMP Andrioli"} — página inicial`}
    >
      {/* Monograma: "A" cursivo (Allura) sobreposto a "MP" serifado (Cormorant) */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/40">
        <span
          className={clsx(
            "font-script text-3xl leading-none",
            primary,
          )}
          style={{ marginRight: "-0.35rem" }}
        >
          A
        </span>
        <span className={clsx("font-display text-lg font-semibold leading-none", primary)}>
          MP
        </span>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-lg tracking-brand uppercase",
            primary,
          )}
          style={{ fontVariant: "small-caps" }}
        >
          Andrioli
        </span>
        <span
          className={clsx(
            "mt-1 text-[0.55rem] font-sans tracking-widest2 uppercase",
            secondary,
          )}
        >
          Marketing &amp; Performance
        </span>
      </span>
    </Link>
  );
}
