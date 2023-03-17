import Button from "../Button";

function NavItems() {
  return (
    <>
      <ul className="flex items-center">
        {[
          ["What we do", "/what we do"],
          ["Our clients", "/our clients"],
          ["How it works", "/how it works"],
          ["About us", "/about us"],
          ["Contact", "/contact"],
        ].map(([title, url]) => (
          <li key={title} className="mr-[4.375rem] last-of-type:mr-[3.125rem]">
            <a
              href={url}
              className="tracking-widest font-sans-serif font-semibold hover:bg-hover-gradient hover:bg-clip-text hover:text-transparent"
            >
              {title}
            </a>
          </li>
        ))}
        <Button logIn>Log in</Button>
      </ul>
    </>
  );
}
export default NavItems;
