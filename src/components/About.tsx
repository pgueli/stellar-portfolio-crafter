import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer focused on creating intuitive and engaging web experiences. 
              With expertise in modern frameworks and a keen eye for design, I bring ideas to life 
              through clean code and creative solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-1">
              <div className="w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;