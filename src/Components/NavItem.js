import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem({ name, link }) {
  return (
    <Link to={`/${link}`} className="navItem">
      <h3>{name}</h3>
    </Link>
  );
}

export default NavItem;
