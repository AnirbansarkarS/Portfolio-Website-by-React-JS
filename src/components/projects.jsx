import { projects } from "../data/projects";
import Spline from '@splinetool/react-spline';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {/* <Spline
        //scene="https://prod.spline.design/1CC5yLpeNWM0Njtj/scene.splinecode" 
      /> */}
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



