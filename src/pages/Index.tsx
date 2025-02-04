import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Gallery from "../components/Gallery";

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Pumpkin Carving Artist";
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Gallery />
      <Skills />
    </main>
  );
};

export default Index;