"use client";

import { Data, Pages, navbar } from "../constants/states";
import { useEffect } from "react";

const Base_Url = "https://moviesdatabase.p.rapidapi.com/";
const headers = {
  "X-RapidAPI-Key": "e136081709msh7e3d80594d70345p169c2djsn9bf6d879cb8f",
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
};
export const AllGenres = () => {
  const { setGenres } = Data();
  useEffect(() => {
    const fetchAllGenres = async () => {
      try {
        const res = await fetch(`${Base_Url}titles/utils/genres`, { headers });
        const data = await res.json();
        setGenres(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGenres();
  }, []);
};
export const AllMovies = () => {
  const { selectedGenre, Year } = navbar();
  const { moviesPage } = Pages();
  const { setMovies } = Data();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${Base_Url}titles?genre=${selectedGenre}&startYear=${Year}&list=most_pop_movies&limit=50&page=${moviesPage}`,
          { headers },
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, [selectedGenre, moviesPage]);
};
export const AllSerieses = () => {
  const { selectedGenre, Year } = navbar();
  const { seriesPage } = Pages();
  const { setSeries } = Data();
  useEffect(() => {
    const fetchSerieses = async () => {
      try {
        const res = await fetch(
          `${Base_Url}titles?genre=${selectedGenre}&startYear=${Year}&list=top_rated_series_250&limit=50&page=${seriesPage}`,
          { headers },
        );
        const data = await res.json();
        setSeries(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSerieses();
  }, [selectedGenre, seriesPage]);
};
export const AllRecommended = () => {
  const { setRecommended } = Data();
  const { recommendedPage } = Pages();
  const { Year, selectedGenre } = navbar();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${Base_Url}titles?genre=${selectedGenre}&startYear=${Year}&list=top_boxoffice_200&page=${recommendedPage}&limit=50`,
          { headers },
        );
        const data = await res.json();
        setRecommended(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [recommendedPage, Year, selectedGenre]);
};
export const AllTopRated = () => {
  const { setRated } = Data();
  const { RatedPage } = Pages();
  const { Year, selectedGenre } = navbar();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${Base_Url}titles?genre=${selectedGenre}&startYear=${Year}&list=top_rated_250&page=${RatedPage}&limit=50`,
          { headers },
        );
        const data = await res.json();
        setRated(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [RatedPage, Year, selectedGenre]);
};
