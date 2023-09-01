import { Loading } from "../components/Custom";
import { Data, Pages } from "../constants/states";
import { Movie } from "../containers";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const All_Movies = () => {
  const { moviesPage, setMoviesPage } = Pages();
  const { movies } = Data();

  if (movies.length === 0) {
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
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="pages">
        <div
          className={`${moviesPage === 1 ? "hidden" : "page"}`}
          onClick={() => setMoviesPage(moviesPage - 1)}
        >
          <AiOutlineArrowLeft size={24} />
        </div>
        <div
          className={`${moviesPage === 1 ? "hidden" : "page"}`}
          onClick={() => setMoviesPage(moviesPage - 1)}
        >
          {moviesPage - 1}
        </div>
        <div className="selectedpage">{moviesPage}</div>
        <div className="page" onClick={() => setMoviesPage(moviesPage + 1)}>
          {moviesPage + 1}
        </div>
        <div className="page" onClick={() => setMoviesPage(moviesPage + 2)}>
          {moviesPage + 2}
        </div>
        <div className="page" onClick={() => setMoviesPage(moviesPage + 3)}>
          {moviesPage + 3}
        </div>

        <div>...</div>
        <div className="page" onClick={() => setMoviesPage(moviesPage + 1)}>
          <AiOutlineArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default All_Movies;
