import { Loading } from "../components/Custom";
import { Data, Pages } from "../constants/states";
import Series from "../containers/Series";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const All_Serieses = () => {
  const { seriesPage, setSeriesPage } = Pages();
  const { series } = Data();
  if (series.length === 0) {
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
        {series.map((series) => (
          <Series key={series._id} series={series} />
        ))}
      </div>
      <div className="pages">
        <div
          className={`${seriesPage === 1 ? "hidden" : "page"}`}
          onClick={() => setSeriesPage(seriesPage - 1)}
        >
          <AiOutlineArrowLeft size={24} />
        </div>
        <div
          className={`${seriesPage === 1 ? "hidden" : "page"}`}
          onClick={() => setSeriesPage(seriesPage - 1)}
        >
          {seriesPage - 1}
        </div>
        <div className="selectedpage">{seriesPage}</div>
        <div className="page" onClick={() => setSeriesPage(seriesPage + 1)}>
          {seriesPage + 1}
        </div>
        <div className="page" onClick={() => setSeriesPage(seriesPage + 2)}>
          {seriesPage + 2}
        </div>
        <div className="page" onClick={() => setSeriesPage(seriesPage + 3)}>
          {seriesPage + 3}
        </div>

        <div>...</div>
        <div className="page" onClick={() => setSeriesPage(seriesPage + 1)}>
          <AiOutlineArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default All_Serieses;
