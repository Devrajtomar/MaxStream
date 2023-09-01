import { Data } from "../constants/states";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Favorite = ({ data }) => {
  const { favorite, deleteFav, pushFav } = Data();
  let isfavorite = false;
  for (let i = 0; i < favorite.length; i++) {
    if (favorite[i] === data) {
      isfavorite = true;
    }
  }
  const [isFavorite, setIsFavorite] = useState(isfavorite);

  return (
    <div>
      {isFavorite ? (
        <AiFillHeart
          size={20}
          color="#fff"
          className="favorite"
          onClick={() => {
            deleteFav(data);
            setIsFavorite(false);
          }}
        />
      ) : (
        <AiOutlineHeart
          size={20}
          color="#fff"
          className="favorite"
          onClick={() => {
            pushFav(data);
            setIsFavorite(true);
          }}
        />
      )}
    </div>
  );
};

export default Favorite;
