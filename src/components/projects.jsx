import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <p className="section-kicker">lab release</p>
        <h2 className="section-heading">Quantum Builds</h2>
        <p className="section-subtitle">
          Explorations mixing data, delightful UI, and high-frequency research
          experiments. Each project pushes a different boundary.
        </p>

        <div className="flex justify-center">
          <a
            href="https://github.com/AnirbansarkarS"
            target="_blank"
            rel="noreferrer"
            className="primary-chip"
          >
            Explore GitHub Lab ↗
          </a>
        </div>

        <div className="project-grid mt-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="project-card__glow" aria-hidden />
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
                <span className="tag-chip">{project.title.split(" ")[0]}</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    launch vector
                  </p>
                  <p className="text-cyan-300 font-semibold mt-1">
                    Research + Engineering
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-chip text-sm border border-cyan-400/30"
                >
                  Visit Repo ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
