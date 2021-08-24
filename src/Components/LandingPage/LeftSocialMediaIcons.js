import "./LeftSocialMediaIcons.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar" />
      <a
        href="https://github.com/jackparsonss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/jack-parsonss/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      <a
        href="https://www.instagram.com/jack.par/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className="leftSocialMediaIcons__instagram icon"
          size={30}
        />
      </a>
      <a
        href="https://twitter.com/jackparsonss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="leftSocialMediaIcons__twitter icon" size={30} />
      </a>
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar" />
    </div>
  );
}

export default LeftSocialMediaIcons;
