import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
      {/* <img src="/images/logo.svg" alt="Brand Logo" width="50" height="50" /> */}
      <p className="footer__copyright">Copyright © 2021 Jack Parsons.</p>
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;
