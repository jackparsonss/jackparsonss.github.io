import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/home_api_project_image_large.jpg"
          srcset="/images/home_api_project_image_large.jpg 500w, /images/home_api_project_image_large.jpg 980w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="40%"
          height="auto"
          loading="lazy"
        />
        <div className="project__right">
          <h3 className="project__title">Home Webserver API</h3>
          <p className="project__description project__body">
            An <span className="project__specialText">API</span> created using{" "}
            <span className="project__specialText">flask</span>, hosted on a{" "}
            <span className="project__specialText">rasberry pi 4</span>. Taking
            data from an{" "}
            <span className="project__specialText">Arduino Uno R3</span> using
            GPIO pins connected to a temperature sensor which is feeding data
            into the raspberry pi to be fetched from the frontend.
          </p>
          <p className="project__tech project__body">
            &gt; Python · Flask · Rasberry Pi · Arduino · API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/Home-Webserer-API"
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

export default Project3;
