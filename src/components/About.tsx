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
              With over a decade of experience in pumpkin carving, I specialize in creating 
              intricate designs that bring Halloween dreams to life. From traditional jack-o'-lanterns 
              to complex portrait carvings, each piece is crafted with precision and creativity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My work has been featured in local festivals and private events, bringing joy 
              and amazement to audiences of all ages.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-1">
              <div className="w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;