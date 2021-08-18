import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuIcon.css";

function MenuIcon({ clicked, setClicked }) {
  return (
    <div className="menuIcon" onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <FaTimes className="menuIcon__icon" size={45} />
      ) : (
        <FaBars className="menuIcon__icon" size={45} />
      )}
    </div>
  );
}

export default MenuIcon;
