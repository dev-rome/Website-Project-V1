import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Logo from "/images/timber-hatchet-logo.png";
import Image from "../Image";
import NavItem from "./NavItem";
import Button from "../Button";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionOffsets = useRef({});

  const items = [
    { title: "What we do", href: "#company" },
    { title: "Our clients", href: "#clients" },
    { title: "How it works", href: "#steps" },
    { title: "About us", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = Array.from(
        document.querySelectorAll("section[id]")
      ).reverse();

      let active = "";

      for (const section of sections) {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const sectionTop = offset - 50;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + height
        ) {
          active = `#${section.id}`;
          break;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const sectionId = href.replace("#", "");

    if (sectionId) {
      if (window.location.pathname === "/") {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, null, href);
        }
      } else {
        const homeUrl = window.location.origin + "/";
        const newUrl = homeUrl + href;
        window.location.assign(newUrl);
      }
    }
    setIsMenuOpen(false);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <Button className="block xl:hidden"
        onClick={handleMenuClick}
      >
        <Icon className="text-3xl" icon="icon-park-outline:hamburger-button" />
      </Button>
      <ul className="hidden xl:flex items-center">
        {items.map(({ title, href }) => {
          return (
            <NavItem
              key={href}
              title={title}
              href={href}
              isActive={activeSection === href}
              onClick={handleClick}
            />
          );
        })}
        <Button LogInButton>Log in</Button>
      </ul>

        {isMenuOpen && (
          <ul className="xl:hidden bg-white absolute right-8 top-28 flex flex-col rounded gap-4 p-4">
            {items.map(({ title, href }) => {
              return (
                <NavItem
                  key={href}
                  title={title}
                  href={href}
                  isActive={activeSection === href}
                  onClick={handleClick}
                />
              );
            })}
          </ul>
        )}


    </nav>
  );
}

export default Navbar;
