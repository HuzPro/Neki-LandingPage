const Button = ({ 
  label, 
  iconURL, 
  backgroundColor, 
  textColor, 
  borderColor, 
  hoverText, 
  hoverBg,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none rounded-full shadow-xl transition duration-300 ease-in-out
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor} ${hoverText} ${hoverBg}`
            : "bg-coral-red text-white border-coral-red hover:text-coral-red hover:bg-white"
        }
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;

