import Tree from "/images/tree-footer.png";
import Logo from "/images/timber-hatchet-logo.svg";
import Linkedin from "/images/linkedin.svg";
import Facebook from "/images/facebook.svg";
import Twitter from "/images/twitter.svg";
import Pinterest from "/images/pinterest.svg";
import Instagram from "/images/instagram.svg";
import Youtube from "/images/youtube.svg";

function Footer() {
  return (
    <footer className="relative lg:pt-44">
      <img className=" absolute right-0 bottom-0 w-96" src={Tree} alt="Trees" />
      <div className="grid lg:grid-cols-12 lg:place-items-center lg:gap-x-4 lg:gap-y-3">
        <div className="lg:col-span-2 lg:pl-14">
          <img src={Logo} alt="Timber & Hatchet" />
          <p className="font-zwodrei font-bold text-xl text-center">
            Built in Boston
          </p>
        </div>
        <div className="lg:row-span-4 lg:col-span-2">
          <ul>
            <li>Contact us</li>
            <li>Email: Info@Timber.io</li>
            <li>Phone: (123)456-7890</li>
          </ul>
          <div className="mt-3">
            <p className="">Follow us</p>
            <ul className="flex gap-4 mt-2">
              <li>
                <a href="#">
                  <img className="w-4" src={Linkedin} alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-4" src={Facebook} alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-4" src={Twitter} alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-4" src={Pinterest} alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-4" src={Instagram} alt="Linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="w-4" src={Youtube} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative grid lg:col-start-12 justify-between items-center lg:mt-6 px-6 pb-2">
        <p className="font-roboto text-black">© 2023 Timber and Hatchet LLC.</p>
        <ul className="flex gap-16 lg:col-start-9">
          <li>Site Map</li>
          <li>Accessibility </li>
          <li className="text-white">Terms & conditions</li>
          <li className="text-white">Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
