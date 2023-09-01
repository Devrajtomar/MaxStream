import { navbar } from "../../constants/states";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GoBack = ({ title }) => {
  const { setPage } = navbar();

  return (
    <div
      className="flex font-bold justify-start gap-2 items-center text-lg px-3 cursor-pointer"
      onClick={() => setPage("Home")}
    >
      <AiOutlineArrowLeft size={25} />
      {title}
    </div>
  );
};

export default GoBack;
