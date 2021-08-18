import "./Header.css";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import ResumeButton from "./ResumeButton";
import BlogButton from "./BlogButton";

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
        {navItems.map((item) => (
          <NavItem name={item.name} link={item.link} />
        ))}
        <BlogButton />
        <ResumeButton />
      </nav>
    </header>
  );
}

export default Header;
