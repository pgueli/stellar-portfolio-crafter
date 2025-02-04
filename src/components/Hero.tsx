import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Creative Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Crafting beautiful digital experiences with modern web technologies
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-2 hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;