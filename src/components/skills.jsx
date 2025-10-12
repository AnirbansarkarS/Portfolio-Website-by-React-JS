import { skills } from "../data/skills";
import Spline from '@splinetool/react-spline'; // <-- Make sure to import Spline

// If using Next.js App Router, uncomment the line below
// 'use client';

function Skills() {
  return (
    // 1. Set the section to "relative" to act as a container for the absolute background
    //    Remove the old gradient background and add "overflow-hidden"
    <section
      id="skills"
      className="relative py-20 text-center overflow-hidden"
    >
      
      {/* 2. Add the Spline component for the background */}
      {/* It's positioned "absolute" to fill the entire section and has a negative z-index to stay behind */}
      <div className="absolute inset-0 z-[-1]">
        <Spline scene="https://prod.spline.design/WUbRWdvT2DGf2eF1/scene.splinecode" />
      </div>

      {/* 3. Wrap your existing content to control its layering */}
      {/* "relative z-10" ensures this content stays on top of the background */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 drop-shadow-[0_0_20px_#00f7ff]">
          Skills
        </h2>

        {/* Honeycomb Grid (Your existing code) */}
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
      </div>
    </section>
  );
}

export default Skills;



