import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image"
          src="/images/flavour_flow_image_large.png"
          srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Flavour Flow</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">hackathon</span> project
            for Hack The North 2021. Allows users to{" "}
            <span className="project__specialText">enter ingredients</span> and{" "}
            <span className="project__specialText">get recipes</span>. The
            recipe generator maximizes given ingredients and minimizes any
            missing ingredients, using the{" "}
            <span className="project__specialText">Spoonacular API</span>.
          </p>
          <p className="project__tech project__body">
            &gt; Django · React · CSS · CockroachDB · Spoonacular API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/Flavour-Flow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
