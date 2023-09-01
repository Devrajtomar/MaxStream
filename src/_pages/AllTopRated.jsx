import { Loading } from "../components/Custom";
import { Data, Pages, navbar } from "../constants/states";
import { Movie } from "../containers";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const All_TopRated = () => {
  const { RatedPage, setRatedPage } = Pages();
  const { TopRated } = Data();

  if (TopRated.length === 0) {
    return (
      <Loading
        parentStyle="flex items-center justify-center flex-wrap max-w-full p-3 gap-2 overflow-hidden"
        num={50}
        parentStyle_2={{ flexWrap: "wrap" }}
        style="container"
      />
    );
  }
  return (
    <div>
      <div
        className="flex justify-center items-center flex-wrap max-w-full p-3 overflow-hidden"
        style={{ flexWrap: "wrap" }}
      >
        {TopRated.map((data) => (
          <Movie key={data._id} movie={data} />
        ))}
      </div>
      <div className="pages">
        <div
          className={`${RatedPage === 1 ? "hidden" : "page"}`}
          onClick={() => setRatedPage(RatedPage - 1)}
        >
          <AiOutlineArrowLeft size={24} />
        </div>
        <div
          className={`${RatedPage === 1 ? "hidden" : "page"}`}
          onClick={() => setRatedPage(RatedPage - 1)}
        >
          {RatedPage - 1}
        </div>
        <div className="selectedpage">{RatedPage}</div>
        <div className="page" onClick={() => setRatedPage(RatedPage + 1)}>
          {RatedPage + 1}
        </div>
        <div className="page" onClick={() => setRatedPage(RatedPage + 2)}>
          {RatedPage + 2}
        </div>
        <div className="page" onClick={() => setRatedPage(RatedPage + 3)}>
          {RatedPage + 3}
        </div>

        <div>...</div>
        <div className="page" onClick={() => setRatedPage(RatedPage + 1)}>
          <AiOutlineArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default All_TopRated;
