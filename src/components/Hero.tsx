import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Hey, I'm a Web Developer!
              </span>
              <br />
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            I build beautiful websites and powerful web apps that make users happy and businesses grow.
            Let's build something amazing together.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </Link>
              <a
                href="/resume.pdf"
                download="my_resume.pdf"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full cursor-pointer hover:shadow-lg border-2 border-purple-600 dark:border-purple-500 transition-all hover:bg-purple-50 dark:hover:bg-gray-700"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center items-center mt-[30px]"
          >
            <div className="relative">
              <img
                src="/hero-image.jpg"
                alt="Hero"
                className="rounded-2xl w-[400px] h-[400px] object-cover object-center border-4 border-purple-500/50 dark:border-purple-400/50 shadow-xl shadow-purple-500/20 dark:shadow-purple-400/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 -z-10 blur-md"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">
          <ArrowDown size={32} className="text-gray-400 dark:text-gray-500" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;