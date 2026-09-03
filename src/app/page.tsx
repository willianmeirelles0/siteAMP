import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import SobreAmp from "@/components/SobreAmp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <SobreAmp />
        {/* Próximas seções: Serviços, Mentoria, Depoimentos, Contato —
            entram nos próximos passos */}
      </main>
    </>
  );
}
