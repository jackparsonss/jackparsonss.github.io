import "./Project.css";

function Project({ name }) {
  return (
    <article className="project">
      <h1>This is {name}</h1>
    </article>
  );
}

export default Project;
