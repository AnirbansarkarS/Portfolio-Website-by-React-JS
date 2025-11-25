import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skills } from "../data/skills";

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        stagger: {
          amount: 1.2,
          from: "random",
        },
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="skills-halo" aria-hidden />
      <div className="skills-gridlines" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        <p className="section-kicker">systems i’m fluent in</p>
        <h2 className="section-heading">Skill Nebula</h2>
        <p className="section-subtitle">
          A curated toolkit blending high-performance frontends, ML stacks, and
          bleeding-edge creative coding workflows.
        </p>

        <div className="skill-grid mt-12">
          {skills.map((skill, i) => (
            <div key={skill + i} className="skill-card">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
