import { create } from "zustand";

export const Client = create((set) => ({
  loged: false,
  setUser: (value) => set(() => ({ loged: value })),
}));

export const navbar = create((set) => ({
  Page: "Home",
  setPage: (value) => set(() => ({ Page: value })),
  Year: 2020,
  setYear: (value) => set(() => ({ Year: value })),
  SideBar: false,
  setSideBar: (value) => set(() => ({ SideBar: value })),
  selectedGenre: "Action",
  setGenre: (value) => set(() => ({ selectedGenre: value })),
}));

export const Pages = create((set) => ({
  seriesPage: 1,
  setSeriesPage: (data) => set(() => ({ seriesPage: data })),
  moviesPage: 1,
  setMoviesPage: (data) => set(() => ({ moviesPage: data })),
  studiosPage: 1,
  seStudiosPage: (data) => set(() => ({ studiosPage: data })),
  recommendedPage: 1,
  setRecommendedPage: (data) => set(() => ({ recommendedPage: data })),
  RatedPage: 1,
  setRatedPage: (data) => set(() => ({ RatedPage: data })),
}));
export const Data = create((set) => ({
  series: [],
  setSeries: (data) => set(() => ({ series: data })),
  movies: [],
  setMovies: (data) => set(() => ({ movies: data })),
  Recommended: [],
  setRecommended: (data) => set(() => ({ Recommended: data })),
  TopRated: [],
  setRated: (data) => set(() => ({ TopRated: data })),
  studios: [],
  setStudios: (data) => set(() => ({ studios: data })),
  genres: [],
  setGenres: (data) => set(() => ({ genres: data })),
  favorite: [],
  pushFav: (value) => {
    set((state) => ({ favorite: [...state.favorite, value] }));
  },
  deleteFav: (value) => {
    set((state) => ({
      favorite: state.favorite.filter((item) => item !== value),
    }));
  },
}));
