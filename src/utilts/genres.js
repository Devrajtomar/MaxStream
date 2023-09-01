import axios from "axios";

const genres_ = async () => {
  const allGenres = await axios
    .get("/api/genres")
    .then((res) => console.log(res));
};
export default genres_;
