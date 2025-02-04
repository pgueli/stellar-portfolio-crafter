import { motion } from "framer-motion";
import { Code, Layout, Database, Palette } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    description: "Node.js, Express, PostgreSQL",
  },
  {
    title: "Clean Code",
    icon: <Code className="w-6 h-6" />,
    description: "SOLID principles, Clean Architecture",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    description: "Figma, Adobe XD, User Research",
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-secondary" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;