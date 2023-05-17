import { Icon } from "@iconify/react";
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
    window.history.pushState(null, null, sectionId);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    const heroSection = e.target.getAttribute("href");
    const heroSectionPosition = document.querySelector(heroSection);
    window.scrollTo({ top: heroSectionPosition, behavior: "smooth" });
    window.history.pushState(null, null, "#hero");
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full flex justify-between py-[0.625rem] xl:pl-3 pr-10 xl:pr-[4.375rem] bg-white/10 backdrop-filter backdrop-blur-sm">
      <a href="#hero" onClick={handleImageClick}>
        <Image
          src={Logo}
          width={225}
          height={80}
          alt={"Timber & Hatchet Logo"}
        />
      </a>
      <Button className="block xl:hidden">
        <Icon className="text-3xl" icon="icon-park-outline:hamburger-button" />
      </Button>
      <ul className="hidden xl:flex items-center">
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
        <Button LogInButton>Log in</Button>
      </ul>
    </nav>
  );
}

export default Navbar;
