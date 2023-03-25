import className from "classnames";

function Button({ children, readMore, logIn, caseStudy, back, ...rest }) {
  const classes = className(rest.className, "font-sans-serif tracking-widest", {
    "bg-black text-white font-semibold py-[1rem] px-[1.75rem] rounded-[0.313rem]": logIn,
    "bg-white text-black py-3.5 px-[1.125rem] rounded-[0.375rem] drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)]":
      readMore,
    "font-light italic border-b-2 border-black": caseStudy || back,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
// hover:bg-hover-gradient hover:bg-clip-text hover:text-transparent
// relative after:absolute after:border-b-2 after:inset-0 z-[-1] after:mb-[-2px] after:bg-hover-gradient"
