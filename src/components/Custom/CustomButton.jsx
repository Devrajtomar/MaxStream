import React from "react";

const CustomButton = ({ containerStyle, title, handleClick }) => {
  return (
    <div onClick={handleClick} className={`CustomButton ${containerStyle}`}>
      {title}
    </div>
  );
};

export default CustomButton;
