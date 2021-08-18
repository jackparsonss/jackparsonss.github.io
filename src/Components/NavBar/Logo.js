import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src="/images/logo.svg" alt="Brand Logo" width="75" height="75" />
      </Link>
    </div>
  );
}

export default Logo;
