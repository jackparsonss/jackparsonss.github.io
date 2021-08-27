import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__text">
        <h2>About Me</h2>
        <p className="about__body">
          Hello! My name is Jack Parsons and I am a second-year Computer Science
          Student attending the{" "}
          <span className="about__specialText">University of Alberta.</span>{" "}
          Currently, I am very interested in{" "}
          <span className="about__specialText">iOS development</span>, trying to
          bridge the gap between providing value and creating clean and
          intuitive apps. I am also extremely interested in{" "}
          <span className="about__specialText">backend development</span>,
          creating APIs, and working with databases.
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
