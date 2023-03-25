import Logo from "/images/timber-hatchet-logo.png";
import Image from "../Image";
import NavItem from "./NavItem";
import Button from "../Button";

function Navbar() {
  const items = [
    { title: "What we do", href: "#company" },
    { title: "Our clients", href: "#clients" },
    { title: "How it works", href: "#steps" },
    { title: "About us", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    const sectionPosition = document.querySelector(sectionId).offsetTop;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full flex justify-between py-[0.625rem] pl-3 pr-[4.375rem] bg-white/10 backdrop-filter backdrop-blur-sm">
      <Image src={Logo} width={225} height={80} alt={"Timber & Hatchet Logo"} />
      <ul className="flex items-center">
        {items.map(({ title, href }) => {
          return (
            <NavItem
              onClick={handleClick}
              key={href}
              title={title}
              href={href}
            />
          );
        })}
        <Button logIn>Log in</Button>
      </ul>
    </nav>
  );
}

export default Navbar;
