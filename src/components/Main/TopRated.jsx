import { Loading } from "../Custom";
import { AllTopRated } from "../../utilts";
import { Data } from "../../constants/states";
import { Movie, Series } from "../../containers";

const TopRated = () => {
  AllTopRated();
  const { TopRated } = Data();

  if (TopRated.length === 0) {
    return <Loading parentStyle="scroll_view" num={10} style="container" />;
  }
  return (
    <div className="scroll_view">
      {TopRated.map((data) => {
        const type = data.titleType.text;
        if (type === "Movie") {
          return <Movie movie={data} key={data._id} />;
        }
        if (type === "Series") {
          return <Series series={data} key={data._id} />;
        }
      })}
    </div>
  );
};

export default TopRated;
