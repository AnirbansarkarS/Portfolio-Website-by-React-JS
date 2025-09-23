import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-16 bg-black text-center">
      <h2 className="text-3xl text-cyan-400 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="w-24 h-24 flex items-center justify-center bg-gray-900 border border-cyan-500 rounded-xl hover:scale-110 hover:shadow-[0_0_15px_#00fff7] transition-transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
