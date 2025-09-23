import { projects } from "../data/projects";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border rounded-lg bg-gray-900">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
