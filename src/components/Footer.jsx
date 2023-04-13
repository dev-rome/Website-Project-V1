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
    <footer className="relative pt-16 md:pt-40 lg:pt-32">
      <img
        className="absolute right-0 bottom-0 w-80 sm:w-96"
        src={Tree}
        alt="Trees"
      />
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 items-center sm:gap-y-3 sm:gap-x-6 md:gap-x-8 lg:gap-y-3 lg:gap-x-10 lg:mt-6 px-4 lg:px-6 pb-2">
        <div className="col-span-1 md:col-span-2">
          <img src={Logo} alt="Timber & Hatchet" />
          <p className="font-zwodrei font-bold text-base sm:text-lg md:text-lg text-center">
            Built in Boston
          </p>
        </div>
        <div className="row-span-4 sm:col-start-2 col-span-4 md:row-start-1 md:col-start-3 lg:row-span-4 lg:col-span-3">
          <ul className="mt-4 sm:mt-2">
            <li className="font-roboto text-sm sm:text-base">Contact us</li>
            <li className="font-roboto text-sm sm:text-base">Email: Info@Timber.io</li>
            <li className="font-roboto text-sm sm:text-base">Phone: (123)456-7890</li>
          </ul>
          <div className="mt-3">
            <p className="font-roboto">Follow us</p>
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
      <div className="relative grid lg:col-start-12 items-center lg:mt-6 px-4 lg:px-6 pb-2">
        <div className="flex flex-col sm:flex-col md:flex-row md:justify-between">
          <p className="font-roboto text-black text-sm md:text-base mt-4">
            © 2023 Timber and Hatchet LLC.
          </p>
          <ul className="flex flex-col md:flex-row lg:col-start-9 lg:justify-between gap-5 md:gap-16 mt-4">
            <li className="font-roboto text-sm md:text-base">Site Map</li>
            <li className="font-roboto text-sm md:text-base">Accessibility </li>
            <li className="font-roboto md:text-white text-sm md:text-base">Terms & conditions</li>
            <li className="font-roboto md:text-white text-sm md:text-base">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;