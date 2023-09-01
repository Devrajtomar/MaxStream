import Rating from "react-rating";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { Favorite } from "./";
import { navbar } from "../constants/states";

const Movie = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const { selectedGenre } = navbar();
  const id = movie._id;
  const headers = {
    "X-RapidAPI-Key": "e136081709msh7e3d80594d70345p169c2djsn9bf6d879cb8f",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  };
  const title = movie.originalTitleText.text;
  const img = movie.primaryImage.url;
  const releaseYear = movie.releaseYear.year;
  const category = movie.titleType.categories.value;
  //const rated = movie.rated;
  const duration = {
    hour: movie.runtime / 60,
    minut: movie.runtime % 60,
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        //`https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`,
        { headers },
      );
      const data = await res.json();
      setRating(data.results.averageRating / 2);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Link href={`/movie/${id}`} style={{ height: "75%", width: "100%" }}>
        <img src={img} alt={title} className="img" />{" "}
      </Link>
      <Favorite data={movie} />
      <div className="rating">
        <Rating
          initialRating={rating}
          fullSymbol={<AiFillStar size={18} color="#b3ad96" />}
          emptySymbol={<AiOutlineStar size={18} color="#b3ad96" />}
          readonly
          fractions={10}
        />
      </div>
      <div className="contant_headings">
        <div className="heading_3 bg-black bg-opacity-80 rounded-md w-fit ">
          {parseInt(duration.hour)}&nbsp;hour&nbsp;
          {duration.minut !== 0 && duration.minut + " minutes"}
        </div>
        <div className="title">{title}</div>
        <div className="flex justify-between items-center w-full">
          <div className="heading_2">{releaseYear}</div>
          <BsFillCircleFill size={7} />
          <div className="heading_2">{category}</div>
          <BsFillCircleFill size={7} />
          <div className="heading_2">movie</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
