import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "DSA Learner",
  "Research Lover",
  "The ML Explorer",
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [charIndex, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <motion.p
            className="uppercase tracking-[0.5em] text-xs text-cyan-300/70 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            building quantum-grade experiences
          </motion.p>

          <div>
            <motion.div
              className="flex items-start gap-6 mb-4 flex-wrap md:flex-nowrap"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img
                src="https://github.com/AnirbansarkarS.png"
                alt="Anirban Sarkar"
                className="profile-image w-28 h-28 md:w-36 md:h-36 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/280x280/0ff5ff/030014?text=AS";
                }}
              />
              <div className="flex-1">
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-orbitron"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Hi, I'm <span className="text-cyan-300">Anirban</span>
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-orbitron mt-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Crafting sleek web systems that feel{" "}
                  <span className="text-purple-300">futuristic</span>.
                </motion.p>
              </div>
            </motion.div>
            <motion.p
              className="mt-5 text-lg text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Currently focused on immersive frontends, research-driven
              prototyping, and intelligent interfaces. {text}
              <span className="animate-blink text-cyan-400 ml-1">|</span>
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a href="#projects" className="primary-chip">
              View Quantum Builds
            </a>
            <a href="#contact" className="ghost-chip">
              Let's Collaborate
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {[
              { label: "Years crafting", value: "04+" },
              { label: "Projects shipped", value: "25+" },
              { label: "Hackathons won", value: "06" },
              { label: "Open-source PRs", value: "80+" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                className="stat-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
              >
                <h3 className="text-3xl font-semibold text-white font-orbitron">
                  {item.value}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-orbitron">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero-orb" aria-hidden />
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="dot" />
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
                live transmission
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em]">
                  signature stack
                </p>
                <p className="text-2xl font-semibold text-white mt-2">
                  React • Three.js • ML Prototyping
                </p>
              </div>

              <div className="h-32 rounded-xl border border-cyan-500/20 bg-[#050610]/70 p-4 flex flex-col justify-between">
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em]">
                  current focus
                </p>
                <p className="text-lg text-white">
                  Real-time data visualizations &amp; immersive research tools.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Web3", "AI-Ready", "System Design", "GSAP"].map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
