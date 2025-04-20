import { motion } from 'framer-motion';

const educationData = [
  {
    year: 'Current',
    degree: 'Bachelor of Information Technology',
    school: 'Uka Tarsadia University',
    description: 'Specialized in Software Engineering with focus on web technologies and distributed systems.',
  },
  {
    year: '2021 - 2022',
    degree: 'Higher Secondary Certificate ',
    school: 'Shree Swaminarayan Gurukul',
  
  },
  {
    year: '2019 - 2020',
    degree: 'Secondary School Certificate',
    school: 'Shree Swaminarayan Gurukul',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Education</h2>
          <p className="text-gray-600 dark:text-gray-300">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-purple-200 dark:bg-purple-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500" />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md dark:shadow-purple-500/10 transition-shadow">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.degree}</h3>
                <div className="text-gray-600 dark:text-gray-300 mb-2">{item.school}</div>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;