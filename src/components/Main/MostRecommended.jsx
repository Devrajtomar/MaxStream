import { Loading } from "../Custom";
import { Data } from "../../constants/states";
import { Movie, Series } from "../../containers";
import { AllRecommended } from "../../utilts";

const MostRecommended = () => {
  AllRecommended();
  const { Recommended } = Data();

  if (Recommended.length === 0) {
    return <Loading parentStyle="scroll_view" num={10} style="container" />;
  }
  return (
    <div className="scroll_view">
      {Recommended.map((data) => {
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

export default MostRecommended;
