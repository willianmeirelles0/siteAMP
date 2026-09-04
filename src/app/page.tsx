import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import SobreAmp from "@/components/SobreAmp";
import Servicos from "@/components/Servicos";
import Mentoria from "@/components/Mentoria";
import Depoimentos from "@/components/Depoimentos";
import Videos from "@/components/Videos";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <SobreAmp />
      <Servicos />
      <Mentoria />
      <Depoimentos />
      <Videos />
      <Contato />
    </>
  );
}
