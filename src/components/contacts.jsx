import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        className="max-w-4xl mx-auto contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="section-kicker text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          open channel
        </motion.p>
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Architect the Next Build
        </motion.h2>
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready for freelance collabs, research experiments, or speaking about
          futuristic interfaces.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="mailto:sanirban2006@gmail.com" className="primary-chip text-center">
            sanirban2006@gmail.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="ghost-chip text-center"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
  