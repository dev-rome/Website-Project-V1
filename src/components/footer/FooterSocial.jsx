import Linkedin from "/images/linkedin.svg";
import Facebook from "/images/facebook.svg";
import Twitter from "/images/twitter.svg";
import Pinterest from "/images/pinterest.svg";
import Instagram from "/images/instagram.svg";
import Youtube from "/images/youtube.svg";

function FooterSocial() {
  return (
    <ul className="flex gap-4 mt-2">
      <li>
        <a href="#">
          <img className="w-4" src={Linkedin} alt="Linkedin" />
        </a>
      </li>
      <li>
        <a href="#">
          <img className="w-4" src={Facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img className="w-4" src={Twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <img className="w-4" src={Pinterest} alt="Pinterest" />
        </a>
      </li>
      <li>
        <a href="#">
          <img className="w-4" src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img className="w-4" src={Youtube} alt="Youtube" />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocial;
