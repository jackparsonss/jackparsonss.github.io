import { HashLink } from "react-router-hash-link";

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src="/images/logo.png" alt="Brand Logo" width="75" height="75" />
      </HashLink>
    </div>
  );
}

export default Logo;
