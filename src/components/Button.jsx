import PropTypes from "prop-types";

const BUTTON_TYPE = {
  DARK: "dark",
  LIGHT: "light",
};

const Button = ({ type, children, className, ...rest }) => {
  const buttonClassNames = `${
    type === BUTTON_TYPE.DARK ? "bg-black text-white" : "bg-white text-black"
  } font-roboto tracking-widest ${className}`;

  return (
    <button className={buttonClassNames} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
