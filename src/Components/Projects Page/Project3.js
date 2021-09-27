import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/pacman_project_image_large.jpg"
          srcset="/images/pacman_project_image_small.jpg 900w, /images/pacman_project_image_large.jpg 1800w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">3D Pacman</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">3D video game</span> based
            on the classic retro game Pacman. However, there are twists, such as
            a <span className="project__specialText">physics</span> based
            movement system. All ghosts are using a{" "}
            <span className="project__specialText">finite state machine</span>{" "}
            and the <span className="project__specialText">A* algorithm</span>{" "}
            to hunt.
          </p>
          <p className="project__tech project__body">
            &gt; C# · Unity Game Engine
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/3D-Pacman"
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
