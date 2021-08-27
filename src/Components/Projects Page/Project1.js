import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./Project.css";
import "./Projects.css";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image"
          src="/images/covid_bot_project_image.jpg"
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
            <FaGithub className="" size={25} />
            <h3 className="">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
