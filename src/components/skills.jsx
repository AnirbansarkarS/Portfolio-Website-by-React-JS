import { skills } from "../data/skills";
import Spline from "@splinetool/react-spline";

function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Spline scene="https://prod.spline.design/WUbRWdvT2DGf2eF1/scene.splinecode" />
      </div>

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
