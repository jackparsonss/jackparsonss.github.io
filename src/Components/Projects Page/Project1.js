import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image"
          src="/images/covid_bot_project_image_large.jpg"
          srcset="/images/covid_bot_project_image_small.jpg 750w, /images/covid_bot_project_image_large.jpg 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
        />
        <div className="project__right">
          <h3 className="project__title">Covid-19 Discord Bot</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">hackathon</span> project
            for HackED 2021. Using a variety of commands you can retrieve
            different <span className="project__specialText">Covid-19</span>{" "}
            data including cases, test, and vaccines.
          </p>
          <p className="project__tech project__body">
            &gt; Python · Discord API · Johns Hopkins API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/Covid-Tracker-Bot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3>Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
