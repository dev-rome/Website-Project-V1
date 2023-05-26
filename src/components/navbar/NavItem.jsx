function NavItem({ onClick, title, href, isActive }) {
  return (
    <li className="mr-[4.375rem] last-of-type:mr-[3.125rem]">
      <a
        href={href}
        className={`tracking-widest font-roboto font-semibold hover:bg-hover-gradient hover:bg-clip-text hover:text-transparent ${
          isActive ? "bg-hover-gradient bg-clip-text text-transparent" : ""
        }`}
        onClick={onClick}
      >
        {title}
      </a>
    </li>
  );
}

export default NavItem;
