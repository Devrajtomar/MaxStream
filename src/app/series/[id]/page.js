"use client";

import React, { useEffect, useState } from "react";

const Base_url = "https://moviesdatabase.p.rapidapi.com/titles/";
const headers = {
  "X-RapidAPI-Key": "e136081709msh7e3d80594d70345p169c2djsn9bf6d879cb8f",
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
};
const Series = ({ params }) => {
  const [series, setSeries] = useState([]);
  const id = params.id;
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`${Base_url}${id}`, { headers });
      const data = await res.json();
      setSeries(data.results);
      console.log(data);
    };
    // fetchdata();
  }, []);
  console.log(series);
  if (series.length === 0) {
    return <div>loading...</div>;
  }
  return <div>{params.id}</div>;
};
export default Series;
