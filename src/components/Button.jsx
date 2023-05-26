import className from "classnames";

function Button({ children, ReadMoreButton, LogInButton, ...rest }) {
  const classes = className(rest.className, "font-roboto tracking-widest", {
    "bg-black text-white font-semibold py-[1rem] px-[1.75rem] rounded-[0.313rem]": LogInButton,
    "bg-white text-black py-3.5 px-[1.125rem] rounded-[0.375rem] drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)]":
      ReadMoreButton,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
