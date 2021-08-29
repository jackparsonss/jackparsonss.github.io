import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2>Contact Me</h2>
        <p className="contact__p">
          Currently I am looking from a summer 2022 Software Development
          Internship
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: jparsons@ualberta.ca">
            <span className="contact__text">jparsons@ualberta.ca</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/jack-parsonss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">jack-parsonss</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
