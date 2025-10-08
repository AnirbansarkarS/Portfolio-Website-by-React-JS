import { skills } from "../data/skills";
import { Link } from "react-scroll";

function Skills() {
  return (
    
    <section
      id="skills"
      className="py-20 text-center bg-gradient-to-br from-[#050014] via-[#0a0433] to-[#00111a]"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 drop-shadow-[0_0_20px_#00f7ff]">
        Skills
      </h2>

      {/* Honeycomb Grid */}
      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="w-28 h-32 flex items-center justify-center 
              text-cyan-300 font-semibold uppercase tracking-wide
              bg-[#0b1120] clip-hex hex-spin border border-cyan-400
              transition-all duration-500 ease-in-out
              hover:scale-110 hover:shadow-[0_0_30px_10px_#00eaff] hover:bg-[#04152e]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;



