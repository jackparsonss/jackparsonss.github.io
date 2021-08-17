import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="/images/logo.svg"
          alt="Brand Logo"
          width="75"
          height="75"
        />
      </Link>
      <nav className="header__nav">
        <NavItem name="About" link="about" />
        <NavItem name="Projects" link="project1" />
        <NavItem name="Contact" link="contact" />
        <a
          className="navItem"
          href="https://jackparsonss.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Blog</h3>
        </a>
        <NavItem name="Contact" link="contact" />
        <Link
          className="navItem resume"
          to="/jack-parsons-resume.pdf"
          target="_blank"
        >
          <h3>Resume</h3>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
