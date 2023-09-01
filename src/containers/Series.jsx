import Rating from "react-rating";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Favorite } from "./";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { navbar } from "../constants/states";

const Series = ({ series }) => {
  const [rating, setRating] = useState(0);
  const headers = {
    "X-RapidAPI-Key": "e136081709msh7e3d80594d70345p169c2djsn9bf6d879cb8f",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  };
  const { selectedGenre } = navbar();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`,
        { headers },
      );
      const data = await res.json();
      setRating(data.results.averageRating / 2);
    };
    fetchData();
  }, []);

  const id = series.id;
  const category = selectedGenre;
  const title = series.titleText.text;
  const img = series.primaryImage.url;
  const releaseYear = series.releaseYear.year;
  return (
    <div className="container justify-between" style={{ height: 300 }}>
      <Link href={`/series/${id}`} className="w-full" style={{ height: 230 }}>
        <img style={{ height: 230 }} src={img} alt={title} className="img" />
      </Link>
      <Favorite data={series} />
      <div className="rating">
        <Rating
          initialRating={rating}
          fullSymbol={<AiFillStar size={20} color="#b3ad96" />}
          emptySymbol={<AiOutlineStar size={20} color="#b3ad96" />}
          readonly
          fractions={2}
        />
      </div>
      <div className="contant_headings">
        <div className="title px-2 pt-2">{title}</div>
        <div className="w-full px-2">
          <div className="flex justify-between items-center w-full pr-2 gap-1">
            <div className="heading_2">{releaseYear}</div>
            <BsFillCircleFill size={7} />
            <div className="heading_2">{category}</div>
            <BsFillCircleFill size={7} />
            <div className="heading_2">Series</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
