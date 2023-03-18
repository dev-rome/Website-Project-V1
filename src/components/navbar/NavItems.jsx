import Button from "../Button";

function NavItems({ onClick }) {
  return (
    <>
      <ul className="flex items-center">
        {[
          ["What we do", "#company"],
          ["Our clients", "#clients"],
          ["How it works", "#steps"],
          ["About us", "#about"],
          ["Contact", "#contact"],
        ].map(([title, id]) => (
          <li key={title} className="mr-[4.375rem] last-of-type:mr-[3.125rem]">
            <a
              href={id}
              className="tracking-widest font-sans-serif font-semibold hover:bg-hover-gradient hover:bg-clip-text hover:text-transparent"
              onClick={onClick}
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
