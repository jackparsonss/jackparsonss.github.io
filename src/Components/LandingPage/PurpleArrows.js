import "./PurpleArrows.css";
import { NavHashLink } from "react-router-hash-link";

function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
    >
      <img
        className="purpleArrows"
        src="/images/bottom_purple_arrows.svg"
        alt="bottom puruple arrows"
      />
    </NavHashLink>
  );
}

export default PurpleArrows;
