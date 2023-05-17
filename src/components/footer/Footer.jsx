import Tree from "/images/tree-footer.png";
import Logo from "/images/timber-hatchet-logo.svg";
import FooterSocial from "./FooterSocial";
import FooterContact from "./FooterContact";


function Footer() {
  const items = [
    { text: "Site Map", classname: "font-roboto text-sm md:text-base" },
    { text: "Accessibility", classname: "font-roboto text-sm md:text-base" },
    {
      text: "Terms & conditions",
      classname: "font-roboto md:text-white text-sm md:text-base",
    },
    {
      text: "Privacy Policy",
      classname: "font-roboto md:text-white text-sm md:text-base",
    },
  ];

  return (
    <footer className="relative pt-16 md:pt-40 lg:pt-32">
      <img
        className="absolute right-0 bottom-0 w-64 sm:w-96"
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
         <FooterContact />
          <div className="mt-3">
            <p className="font-roboto">Follow us</p>
            <FooterSocial />
          </div>
        </div>
      </div>
      <div className="relative grid lg:col-start-12 items-center lg:mt-6 px-4 lg:px-6 pb-2">
        <div className="flex flex-col sm:flex-col md:flex-row md:justify-between">
          <p className="font-roboto text-black text-sm md:text-base mt-4">
            © 2023 Timber and Hatchet LLC.
          </p>
          <ul className="flex flex-col md:flex-row lg:col-start-9 lg:justify-between gap-5 md:gap-16 mt-4">
            {items.map(({ text, classname }) => (
              <li key={text} className={classname}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
