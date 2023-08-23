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
          👋 Hello My name is Jack Parsons and I am a fourth-year Computer
          Science Student attending the{" "}
          <span className="about__specialText">University of Alberta</span>.
          <br />
          <br />
          🏢 I have previously interned at{" "}
          <span className="about__specialText">Okta</span> this past summer, and
          at <span className="about__specialText">Psystem</span> the previous
          summer. With roles as a Software Engineer and a Fullstack Developer
          respectively. <br /> <br />
          🏎️ This year I am co-leading the University of Alberta Formula Racing
          club's new{" "}
          <span className="about__specialText">
            Autonomous Driving Subsystem
          </span>{" "}
          from the ground up.
          <br /> <br /> 💥Currently, I am very interested in, and learning about{" "}
          <span className="about__specialText">compilers</span>,{" "}
          <span className="about__specialText">autonomous driving</span>, and{" "}
          <span className="about__specialText">deep learning</span>.
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
