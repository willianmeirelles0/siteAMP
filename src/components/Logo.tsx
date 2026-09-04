import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  /** Marca a imagem como prioritária (usar apenas no Header, visível no primeiro carregamento). */
  priority?: boolean;
};

export default function Logo({ className, priority }: LogoProps) {
  return (
    <Link href="/#topo" className={clsx("flex items-center", className)}>
      <Image
        src="/images/logo-wordmark.png"
        alt="Andrioli Marketing & Performance"
        width={1400}
        height={301}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
