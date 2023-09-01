import React from "react";

const Logo = ({ style }) => {
  return (
    <a href="/" className={`logo ${style}`}>
      Max<span>S</span>treem
    </a>
  );
};

export default Logo;
