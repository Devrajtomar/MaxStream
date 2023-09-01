import React from "react";
import { Loading } from "../Custom";

const TopStudios = () => {
  const topStudios = [];

  if (topStudios.length === 0) {
    return <Loading parentStyle="scroll_view" num={10} style="studio" />;
  }
  return <div>TopStudios</div>;
};

export default TopStudios;
