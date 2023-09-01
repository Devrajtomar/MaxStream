import React from "react";
import { Loading } from "../Custom";
import { Data, navbar } from "../../constants/states";
import { AllGenres } from "../../utilts";
import genres_ from "../../utilts/genres";
const Genres = () => {
  const { genres } = Data();
  const { selectedGenre, setGenre } = navbar();
  AllGenres();
  if (genres.length === 0) {
    return (
      <Loading
        parentStyle="scroll_view"
        num={10}
        style="min-w-[200px] h-[30px] rounded-md"
      />
    );
  }
  return (
    <div className="scroll_view">
      {genres.map(
        (name, i) =>
          i != 0 && (
            <pre
              className={selectedGenre === name ? "selectedgenre" : "genre"}
              key={name}
              onClick={() => setGenre(name)}
            >
              {name}
            </pre>
          ),
      )}
    </div>
  );
};

export default Genres;
