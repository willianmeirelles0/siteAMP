import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import SobreAmp from "@/components/SobreAmp";
import Servicos from "@/components/Servicos";
import Mentoria from "@/components/Mentoria";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <SobreAmp />
        <Servicos />
        <Mentoria />
        {/* Próximas seções: Depoimentos, Contato — entram nos próximos passos */}
      </main>
    </>
  );
}
