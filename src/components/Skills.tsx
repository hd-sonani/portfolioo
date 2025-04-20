import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server,  Type, Palette, Box, Cpu, Github as Git, Monitor, Layers } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code2 },
  { name: 'TailwindCSS', icon: Palette },
  { name: 'JavaScript', icon: Type },
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Cpu },
  { name: 'Git', icon: Git },
  { name: 'GraphQL', icon: Database },
  { name: 'REST APIs', icon: Layers },
  { name: 'Postman', icon: Globe },
  { name: 'Power Bi', icon: Box },
  { name: 'Responsive Design', icon: Monitor },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md dark:shadow-purple-500/10 transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-4">
                {<skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;