import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello! My name is Jack Parsons and I am a third-year Computer Science
          Student attending the{" "}
          <span className="about__specialText">University of Alberta.</span>{" "}
          This summer I am working as a web and platform developer at{" "}
          <Link
            to={{ pathname: "https://www.psystem.ca/" }}
            className="about__externLink"
            target="_blank"
          >
            <span className="about__specialText">Psystem</span>
          </Link>
          . I am very interested in{" "}
          <span className="about__specialText">backend development</span>,
          creating APIs, and working with databases. As well, I am extremely
          interested in Data Science, more specifically{" "}
          <span className="about__specialText">Artificial Intelligence</span>{" "}
          and <span className="about__specialText">Machine Learning.</span>
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/jack_parsons_headshot.jpg"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
