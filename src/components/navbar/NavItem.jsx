function NavItem({ onClick, title, href }) {
  return (
    <li className="mr-[4.375rem] last-of-type:mr-[3.125rem]">
      <a
        href={href}
        className="tracking-widest font-sans-serif font-semibold hover:bg-hover-gradient hover:bg-clip-text hover:text-transparent"
        onClick={onClick}
      >
        {title}
      </a>
    </li>
  );
}
export default NavItem;
