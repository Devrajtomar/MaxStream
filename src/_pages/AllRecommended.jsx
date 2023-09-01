import { Loading } from "../components/Custom";
import { Data, Pages } from "../constants/states";
import { Movie } from "../containers";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const All_Recommended = () => {
  const { recommendedPage, setRecommendedPage } = Pages();
  const { Recommended } = Data();
  if (Recommended.length === 0) {
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
        {Recommended.map((data) => (
          <Movie key={data._id} movie={data} />
        ))}
      </div>
      <div className="pages">
        <div
          className={`${recommendedPage === 1 ? "hidden" : "page"}`}
          onClick={() => setRecommendedPage(recommendedPage - 1)}
        >
          <AiOutlineArrowLeft size={24} />
        </div>
        <div
          className={`${recommendedPage === 1 ? "hidden" : "page"}`}
          onClick={() => setRecommendedPage(recommendedPage - 1)}
        >
          {recommendedPage - 1}
        </div>
        <div className="selectedpage">{recommendedPage}</div>
        <div
          className="page"
          onClick={() => setRecommendedPage(recommendedPage + 1)}
        >
          {recommendedPage + 1}
        </div>
        <div
          className="page"
          onClick={() => setRecommendedPage(recommendedPage + 2)}
        >
          {recommendedPage + 2}
        </div>
        <div
          className="page"
          onClick={() => setRecommendedPage(recommendedPage + 3)}
        >
          {recommendedPage + 3}
        </div>

        <div>...</div>
        <div
          className="page"
          onClick={() => setRecommendedPage(recommendedPage + 1)}
        >
          <AiOutlineArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default All_Recommended;
