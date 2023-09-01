import {
  MostRecommended,
  Movies,
  Serieses,
  TopRated,
  TopStudios,
} from "../components/Main";

export const containers = [
  { title: " Top Studios", element: <TopStudios />, more: "All Studios" },
  {
    title: " Most Recommended",
    element: <MostRecommended />,
    more: "All Recommended",
  },
  { title: " Movies", element: <Movies />, more: "All Movies" },
  { title: " Series", element: <Serieses />, more: "All Series" },
  { title: " Top Rated", element: <TopRated />, more: "All Rated" },
];
