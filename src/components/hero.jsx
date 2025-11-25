import { useEffect, useState } from "react";

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
          <p className="uppercase tracking-[0.5em] text-xs text-cyan-300/70">
            building quantum-grade experiences
          </p>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Hi, I’m <span className="text-cyan-300">Anirban</span> — crafting
              sleek web systems that feel <span className="text-purple-300">futuristic</span>.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl">
              Currently focused on immersive frontends, research-driven
              prototyping, and intelligent interfaces. {text}
              <span className="animate-blink text-cyan-400 ml-1">|</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="primary-chip">
              View Quantum Builds
            </a>
            <a href="#contact" className="ghost-chip">
              Let’s Collaborate
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            {[
              { label: "Years crafting", value: "04+" },
              { label: "Projects shipped", value: "25+" },
              { label: "Hackathons won", value: "06" },
              { label: "Open-source PRs", value: "80+" },
            ].map((item) => (
              <div key={item.label} className="stat-chip">
                <h3 className="text-3xl font-semibold text-white">
                  {item.value}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hero-orb" aria-hidden />
          <div className="hero-card">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
