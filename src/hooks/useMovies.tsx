import { useEffect, useState } from "react";
import axios from "../lib/api";

const useGetMovies = () => {
  const [dataMovies, setDataMovies] = useState({
    results: [],
  });

  useEffect(() => {
    axios
      .get("/discover/movie")
      .then((res) => setDataMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return dataMovies;
};

export { useGetMovies };
