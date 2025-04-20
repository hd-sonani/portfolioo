import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("LJgVFmRn9m7TKGySE");
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      await emailjs.sendForm(
        'service_w2asq4j', // Replace with your Service ID
        'template_v2nh70r', // Replace with your Template ID
        form.current,
        'LJgVFmRn9m7TKGySE' // Replace with your Public Key
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300">Get in touch with me</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex flex-col items-center md:items-start space-y-8">
              <div className="flex items-center space-x-4 w-full max-w-md p-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">hdsonani4318@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-md p-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 9409665927</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full max-w-md p-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors resize-none"
                required
              ></textarea>
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;