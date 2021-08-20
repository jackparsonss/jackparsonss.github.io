import { HashLink } from "react-router-hash-link";

function Logo() {
  return (
    <div className="header__logo">
      <HashLink smooth to="/#">
        <img src="/images/logo.svg" alt="Brand Logo" width="75" height="75" />
      </HashLink>
    </div>
  );
}

export default Logo;
