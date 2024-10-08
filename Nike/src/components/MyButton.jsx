const MyButton = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  hover,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${hover} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {iconURL && (
        <img
          src={iconURL}
          alt=" arrow right icon"
          className=" ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};
export default MyButton;
