import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Music2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-orange-500/5 to-yellow-500/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Pumpkin Carving Artist
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Creating unique and spooky pumpkin masterpieces for any occasion
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-orange-500 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-orange-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-orange-500 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-orange-500 transition-colors"
          >
            <Music2 size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-2 hover:text-orange-500 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;