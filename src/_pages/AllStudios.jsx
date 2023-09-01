import { Loading } from "../components/Custom";
import { Data, navbar } from "../constants/states";
import React from "react";

const All_Studios = () => {
  const { setPage } = navbar();
  const { studios } = Data();

  if (studios.length === 0) {
    return (
      <Loading
        parentStyle="flex items-center justify-center flex-wrap max-w-full p-3 gap-2 overflow-hidden"
        num={50}
        parentStyle_2={{ flexWrap: "wrap" }}
        style_2={{ height: 150, width: 150 }}
        style="rounded-full"
      />
    );
  }
  return <div onClick={() => setPage("Home")}>AllStudios</div>;
};

export default All_Studios;
