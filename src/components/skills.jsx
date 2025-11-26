import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillDomains } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const [waveOffset, setWaveOffset] = useState(0);

  // Animate wave offset for sine/cosine wave effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => prev + 0.02);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate domain sections
      gsap.from(".domain-section", {
        y: 60,
        opacity: 0,
        stagger: {
          amount: 1.5,
          from: "start",
        },
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate skill cards with wave delay
      gsap.from(".skill-badge-container", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        stagger: {
          amount: 0.8,
          from: "random",
        },
        duration: 0.6,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate wavy separators
      gsap.fromTo(
        ".wave-separator",
        { pathLength: 0, opacity: 0 },
        {
          pathLength: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Calculate wave Y position for each domain
  const getWaveY = (index, x) => {
    const amplitude = 15;
    const frequency = 0.02;
    const phase = waveOffset + index * 0.5;
    return amplitude * Math.sin(frequency * x + phase);
  };

  // Generate SVG wave path
  const generateWavePath = (index, width = 800) => {
    const points = 100;
    const step = width / points;
    let path = `M 0 ${50 + getWaveY(index, 0)}`;
    
    for (let i = 0; i <= points; i++) {
      const x = i * step;
      const y = 50 + getWaveY(index, x);
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="skills-halo" aria-hidden />
      <div className="skills-gridlines" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6">
          <p className="section-kicker">systems i'm fluent in</p>
          <h2 className="section-heading">Skill Nebula</h2>
          <p className="section-subtitle">
            A curated toolkit blending high-performance frontends, ML stacks, and
            bleeding-edge creative coding workflows.
          </p>
        </div>

        <div className="space-y-20">
          {skillDomains.map((domain, domainIndex) => (
            <div key={domain.domain} className="domain-section">
              {/* Domain Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl md:text-5xl">{domain.icon}</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300">
                  {domain.domain}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 via-purple-500/60 to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="skill-grid">
                {domain.skills.map((skill, skillIndex) => {
                  const delay = skillIndex * 0.1;
                  const waveY = getWaveY(domainIndex, skillIndex * 50);
                  
                  return (
                    <div
                      key={skill.name}
                      className="skill-badge-container"
                      style={{
                        transform: `translateY(${waveY}px)`,
                        transition: "transform 0.1s ease-out",
                      }}
                    >
                      <div className="skill-badge-wrapper">
                        <img
                          src={skill.badge}
                          alt={skill.name}
                          className="skill-badge"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                        <span className="skill-badge-fallback" style={{ display: "none" }}>
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Wavy Separator between domains */}
              {domainIndex < skillDomains.length - 1 && (
                <div className="wave-separator-wrapper mt-16 mb-8 relative">
                  <svg
                    className="wave-separator"
                    width="100%"
                    height="100"
                    viewBox="0 0 800 100"
                    preserveAspectRatio="none"
                    style={{ overflow: "visible" }}
                  >
                    <defs>
                      <linearGradient id={`waveGradient${domainIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(15, 245, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(15, 245, 255, 0.6)" />
                        <stop offset="100%" stopColor="rgba(15, 245, 255, 0)" />
                      </linearGradient>
                    </defs>
                    <path
                      d={generateWavePath(domainIndex)}
                      stroke={`url(#waveGradient${domainIndex})`}
                      strokeWidth="2"
                      fill="none"
                      style={{
                        filter: "blur(1px) drop-shadow(0 0 8px rgba(15, 245, 255, 0.5))",
                      }}
                    />
                    <path
                      d={generateWavePath(domainIndex + 0.3, 800)}
                      stroke={`url(#waveGradient${domainIndex})`}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.5"
                      style={{
                        filter: "blur(0.5px)",
                      }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
