import { Data } from "../../constants/states";
import { Loading } from "../Custom";
import Series from "../../containers/Series";
import { AllSerieses } from "../../utilts";

const Serieses = () => {
  AllSerieses();
  const { series } = Data();

  if (series.length === 0) {
    return <Loading parentStyle="scroll_view" num={10} style="container" />;
  }
  return (
    <div className="scroll_view">
      {series.map((series) => (
        <Series series={series} key={series._id} />
      ))}
    </div>
  );
};

export default Serieses;
