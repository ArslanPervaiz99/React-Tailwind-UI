import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ children, href, onClick, className, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} `;

  const spanClas = "relative";

  const renderBtn = () => (
    <button className={classes}>
      <span className={spanClas}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClas}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  //   return renderBtn();
  return href ? renderLink() : renderBtn();
};

export default Button;
