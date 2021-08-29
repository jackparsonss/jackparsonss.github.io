import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">3D Pacman</h3>
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
            className="project__sourceCodeDark"
            href="https://github.com/jackparsonss/3D-Pacman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3>Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/pacman_project_image_large.jpg"
          srcset="/images/pacman_project_image_small.jpg 900w, /images/pacman_project_image_large.jpg 1800w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
