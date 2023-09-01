"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
const Base_url = "https://moviesdatabase.p.rapidapi.com/titles/";
const headers = {
  "X-RapidAPI-Key": "e136081709msh7e3d80594d70345p169c2djsn9bf6d879cb8f",
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
};
const Movie = ({ params }) => {
  const [movie, setMovie] = useState([]);
  const id = params.id;
  useEffect(() => {
    const fetchdata = async () => {
      // const res = await fetch(`${Base_url}${id}`, { headers });
      // const data = await res.json();
      // setMovie(data.results);
      // console.log(data);
      const res = await axios.get(`http://localhost:3001/movie/${id}`);
      setMovie(res.data);
    };
    fetchdata();
  }, []);
  console.log(movie);
  if (movie.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <div className="bg-black w-full flex items-center justify-start flex-col pb-10 px-3">
      <div className="text-white text-sm md:text-2xl font-semibold flex items-center justify-center mt-5">
        <h1>{movie.title}</h1>
        <pre> from </pre>
        <h1>{movie.tomatoes.production}</h1>
      </div>
      <pre className="heading_3">( {movie.rated} )</pre>
      {movie.languages.map((lang, i) => (
        <pre className="heading_3" key={lang}>
          {lang}
          {i !== movie.languages.length - 1 && ","}
        </pre>
      ))}
      <div className="heading_3">{movie.fullplot}</div>
      <img
        src={movie.poster}
        alt={movie.title}
        height={2000}
        width={2000}
        className="w-full h-full object-contain shadow-md shadow-white rounded-md border border-emerald-100 m-10"
      />
    </div>
  );
};

export default Movie;
