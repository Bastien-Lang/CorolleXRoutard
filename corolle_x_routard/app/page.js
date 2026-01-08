import Hero from "./components/Hero";
import Product from "./components/Product";
import Routard from "./components/Routard";
import Carnet from "./components/Carnet";
import Sac from "./components/Sac";
import Carousel from "./components/Carousel";
import Avis from "./components/Avis";

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen font-sans">
      <main className="flex min-h-full w-full flex-col items-center justify-between bg-white sm:items-start max-lg:px-0">
        <Hero/>
        <Product/>
        <Routard/>
        <Carnet/>
        <Sac/>
        <Carousel/>
        <Avis/>
      </main>
    </div>
  );
}
