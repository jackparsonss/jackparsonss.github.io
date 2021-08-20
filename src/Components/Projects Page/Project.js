import "./Project.css";
import DarkWave from "../Waves/DarkWave";
import LightWave from "../Waves/LightWave";

function Project({ id, name, dark }) {
  return (
    <article id={id} className={`project ${dark ? "dark" : ""}`}>
      <h1>This is {name}</h1>
      {dark ? <LightWave /> : <DarkWave />}
    </article>
  );
}

export default Project;
