import Hero from "@/components/Hero";
import VideoAutor from "@/components/VideoAutor";
import SobreElLibro from "@/components/SobreElLibro";
import SobreElAutor from "@/components/SobreElAutor";
import DondeConseguirlo from "@/components/DondeConseguirlo";
import MantenteEnContacto from "@/components/MantenteEnContacto";
import CierreRedes from "@/components/CierreRedes";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoAutor />
      <SobreElLibro />
      <SobreElAutor />
      <DondeConseguirlo />
      <MantenteEnContacto />
      <CierreRedes />
    </main>
  );
}
