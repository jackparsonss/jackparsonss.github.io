import DarkWave from "../Waves/DarkWave";
import "./Landing.css";
import { NavHashLink } from "react-router-hash-link";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1>Jack Parsons.</h1>
        <h1>I like to code.</h1>
      </div>

      <hr />

      <div className="landing__bottomText">
        <h1>iOS and</h1>
        <h1>Backend Developer</h1>
      </div>

      <NavHashLink
        className="landing_arrowsButton"
        to="/#about"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        <img
          className="landing__arrows"
          src="/images/bottom_purple_arrows.svg"
          alt="bottom puruple arrows"
        />
      </NavHashLink>
      <DarkWave />
    </section>
  );
}

export default Landing;
