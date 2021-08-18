import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import ResumeButton from "./ResumeButton";
import BlogButton from "./BlogButton";
import "./Nav.css";

function Nav({ clicked }) {
  return (
    <nav className={`Nav ${clicked ? "active" : ""}`}>
      {navItems.map((item) => (
        <NavItem name={item.name} link={item.link} />
      ))}
      <BlogButton />
      <ResumeButton />
    </nav>
  );
}

export default Nav;
