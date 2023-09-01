import { Data } from "../../constants/states";
import { Loading } from "../Custom";
import { Movie } from "../../containers";
import { useEffect } from "react";
import axios from "axios";
import { AllMovies } from "../../utilts";

const Movies = () => {
  AllMovies();
  const { movies, setMovies } = Data();
  useEffect(() => {
    const fetchMovies = async () => {
      //const res = await axios.get("http://localhost:3001/");
      //setMovies(res.data);
    };
    fetchMovies();
  }, []);
  if (movies.length === 0) {
    return <Loading parentStyle="scroll_view" num={10} style="container" />;
  }
  return (
    <div className="scroll_view">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie._id} />
      ))}
    </div>
  );
};

export default Movies;
