import { Footer } from "../components/home";
import { Data } from "../constants/states";
import { Movie, Series } from "../containers";
import React, { useState } from "react";

const All_Favorite = () => {
  const [Page, setPage] = useState("movies");
  const { favorite } = Data();
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center p-2">
        <div className="favoritePages">
          <div
            className={`mx-2 py-1 px-3 cursor-pointer font-serif ${
              Page === "movies" && "selectedPage"
            }`}
            onClick={() => setPage("movies")}
          >
            Movies
          </div>
          <div
            className={`mx-2 py-1 px-3 cursor-pointer font-serif ${
              Page === "series" && "selectedPage"
            }`}
            onClick={() => setPage("series")}
          >
            Series
          </div>
        </div>
      </div>
      {favorite.length === 0 ? (
        <div className="w-full mt-10 text-lg flex justify-center font-bold min-h-[600px]">
          Nothing Here.
        </div>
      ) : (
        <div
          style={{ flexWrap: "wrap" }}
          className="flex items-center justify-center flex-wrap p-3 gap-2 overflow-hidden"
        >
          {Page === "movies" &&
            favorite.map(
              (data) =>
                data.type === "movie" && (
                  <Movie movie={data.type === "movie" && data} />
                ),
            )}
          {Page === "series" &&
            favorite.map((data) => (
              <Series series={data.type === "TV Series" && data} />
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default All_Favorite;
