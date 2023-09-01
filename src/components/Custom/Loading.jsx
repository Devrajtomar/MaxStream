import React from "react";

const Loading = ({ style, style_2,num,parentStyle ,parentStyle_2}) => {
   const sequentialNumbers = [];
  for (let i = 1; i <= num; i++) {
    sequentialNumbers.push(i);
  }
 
    return (
      <div
        style={...parentStyle_2}
        className={parentStyle}
      >
        {sequentialNumbers.map((num) => (
          <div key={`_key_${num}`} className={`loading ${style}`} style={...style_2} />
        ))}
      </div>
    );
  }

export default Loading;
