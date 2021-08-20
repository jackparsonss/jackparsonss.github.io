import "./Project.css";

function Project({ id, name, dark }) {
  return (
    <article id={id} className={`project ${dark ? "dark" : ""}`}>
      <h1>This is {name}</h1>
    </article>
  );
}

export default Project;
