import DarkWave from "../Waves/DarkWave";
import "./Project.css";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2>Projects</h2>
      <h3>This is project 1</h3>
      <DarkWave />
    </article>
  );
}

export default Project1;
