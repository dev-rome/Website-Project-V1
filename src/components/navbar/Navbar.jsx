import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Logo from "/images/timber-hatchet-logo.png";
import NavItem from "./NavItem";
import Button from "../Button";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full flex justify-between py-[0.625rem] xl:pl-3 pr-10 xl:pr-[4.375rem] bg-white/10 backdrop-filter backdrop-blur-sm">
      <a href="#" onClick={handleImageClick}>
        <img
          src={Logo}
          alt="Timber & Hatchet Logo"
          className="w-48 h-14 md:w-56 md:h-16"
        />
      </a>
      <Icon
        className="block xl:hidden text-3xl cursor-pointer self-center"
        icon="icon-park-outline:hamburger-button"
        onClick={handleMenuClick}
      />
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
        <Button
          buttonType="dark"
          className="font-semibold py-[1rem] px-[1.75rem] rounded-[0.313rem]"
        >
          Log in
        </Button>
      </ul>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="xl:hidden bg-menu-gradient absolute right-0 top-0 h-screen flex flex-col rounded gap-4 p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <Icon
              className="self-end text-4xl cursor-pointer"
              icon="icon-park-outline:close-small"
              onClick={handleMenuClick}
            />

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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
