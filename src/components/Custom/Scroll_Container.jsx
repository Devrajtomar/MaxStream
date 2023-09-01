import { navbar } from "../../constants/states";
import React from "react";

const Scroll_Container = ({ title, element, more }) => {
  const { setPage } = navbar();
  return (
    <div className="relative">
      <div className="flex justify-between items-center px-2 w-full">
        <div>{title}</div>
        <div className="more_btn" onClick={() => setPage(more)}>
          more
        </div>
      </div>
      <div>{element}</div>
    </div>
  );
};

export default Scroll_Container;
