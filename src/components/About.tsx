import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
            I'm a passionate developer focused on creating modern web applications that solve real-world problems.
            With expertise in React, Node JS, and modern web technologies, I strive to build scalable and
            maintainable solutions that provide excellent user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/about-image.jpg"
                alt="About Me"
                className="rounded-full w-[250px] h-[250px] object-cover object-center border-4 border-purple-500 dark:border-purple-400 ring-4 ring-purple-200 dark:ring-purple-900/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold dark:text-white">Why Work With Me?</h3>
            <ul className="space-y-4 dark:text-gray-300">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">✓</span>
                <span>Strong focus on modern web technologies and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">✓</span>
                <span>Experience with scalable architecture and clean code</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">✓</span>
                <span>Passionate about creating exceptional user experiences</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;