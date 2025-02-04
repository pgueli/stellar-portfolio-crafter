import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Creative Developer";
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default Index;