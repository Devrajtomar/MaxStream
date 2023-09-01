import { containers } from "../../constants/home_containers";
import { Scroll_Container } from "../Custom";

const Main = () => {
  return (
    <div className="main_contant">
      {containers.map((item) => (
        <Scroll_Container
          key={item.title}
          element={item.element}
          title={item.title}
          more={item.more}
        />
      ))}
    </div>
  );
};

export default Main;
