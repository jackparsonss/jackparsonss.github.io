import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/health_fusion_map.png"
              alt="Health Fusion Project Add Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Health Fusion</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">mobile app</span> built to
            help manage life. Allows users to{" "}
            <span className="project__specialText">
              manage all of their medications
            </span>
            , with an intuitive add button combined with a simple home screen to
            checkoff all medications. An enjoyable{" "}
            <span className="project__specialText">calendar view</span> is
            available for all users so they can view their{" "}
            <span className="project__specialText">medication history</span>
            from the past or look to the future and see what they need to take.
            Finally, users are also given a{" "}
            <span className="project__specialText">map view</span> so that they
            have no problem finding any nearby pharmacies or hostiptals if
            needed.
          </p>
          <p className="project__tech project__body">
            &gt; React Native · Firebase · Firestore · Google Maps API · Google
            Autocomplete API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/health-fusion"
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

export default Project1;
