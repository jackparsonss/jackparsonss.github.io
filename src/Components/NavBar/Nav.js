import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import ResumeButton from "./ResumeButton";
import "./Nav.css";

function Nav({ setClicked, clicked }) {
  return (
    <nav className={`Nav ${clicked ? "active" : ""}`}>
      {navItems.map((item) => (
        <NavItem
          setClicked={setClicked}
          clicked={clicked}
          name={item.name}
          link={item.link}
        />
      ))}
      {/* <BlogButton /> */}
      <ResumeButton />
    </nav>
  );
}

export default Nav;
