import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Stats from "./components/stats";
import Contact from "./components/contacts";
import Footer from "./components/footer";

import "./App.css";

function App() {
  const [startupComplete, setStartupComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartupComplete(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell text-white">
      <AnimatePresence>
        {!startupComplete && (
          <motion.div
            className="startup-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ANIRBAN
              </motion.h1>
              <motion.div
                className="flex gap-2 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {["█", "█", "█"].map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-cyan-400 text-2xl"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                className="text-cyan-300/70 font-orbitron text-sm mt-6 tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Initializing Quantum Interface...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: startupComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="grid-overlay" aria-hidden />
        <div className="floating-blob blob-one" aria-hidden />
        <div className="floating-blob blob-two" aria-hidden />
        <div className="floating-blob blob-three" aria-hidden />

        <Navbar />

        <main className="content-wrapper">
          <Hero />
          <Skills />
          <Projects />
          <Stats />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
