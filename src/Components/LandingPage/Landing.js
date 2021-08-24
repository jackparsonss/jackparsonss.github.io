import PurpleArrows from "../Contact Me Page/PurpleArrows";
import DarkWave from "../Waves/DarkWave";
import "./Landing.css";

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

      <PurpleArrows />

      <DarkWave />
    </section>
  );
}

export default Landing;
