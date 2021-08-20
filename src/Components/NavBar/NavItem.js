import { NavHashLink } from "react-router-hash-link";
import "./NavItem.css";

function NavItem({ clicked, setClicked, name, link }) {
  const isContact = name === "Contact";
  return (
    <NavHashLink
      scroll={(el) =>
        el.scrollIntoView({
          behavior: "smooth",
          block: `${isContact ? "start" : "end"}`,
        })
      }
      to={`/${link}`}
      className="navItem"
      onClick={() => {
        if (clicked) {
          setClicked(false);
        }
      }}
    >
      <h3>{name}</h3>
    </NavHashLink>
  );
}

export default NavItem;
