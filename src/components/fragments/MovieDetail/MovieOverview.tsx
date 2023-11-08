import { useOutletContext } from "react-router-dom";

type Movie = {
  movie: {
    id: number;
    original_title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    spoken_language: string;
    genres: string[];
    runtime: number;
    revenue: number;
    production_companies: string[];
    budget: string;
  };
};

const MovieOverview = () => {
  const { movie } = useOutletContext<Movie>();

  return (
    <div className="px-2">
      <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-2 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
        <span className="bg-white pr-3.5">Synopsis</span>
      </h2>
      <div className="text-2xl flex flex-col gap-y-6 leading-7 mb-6">
        <p>{movie.overview}</p>
      </div>
      <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-10 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
        <span className="bg-white pr-2">Movie Info</span>
      </h2>
      <ul className="text-2xl leading-7 mb-20">
        <li>
          <span className="font-medium mr-5">Release date : </span>
          {movie.release_date}
        </li>
        <li>
          <span className="font-medium mr-5">Budget : </span>
          {movie.budget}
        </li>
        <li>
          <span className="font-medium mr-5">Revenue : </span> {movie.revenue}
        </li>
        <li>
          <span className="font-medium mr-5">Runtime : </span> {movie.runtime}{" "}
          Minutes
        </li>
        <li>
          <span className="font-medium mr-5">Genre : </span>{" "}
          {movie.genres.map(
            (genre, i) => genre + (i === movie.genres.length - 1 ? "" : ", ")
          )}
        </li>
        <li>
          <span className="font-medium mr-5">Spoken Languages : </span>{" "}
          {movie.spoken_language}
        </li>
        <li>
          <span className="font-medium mr-5">Production Companies : </span>{" "}
          {movie.production_companies.map(
            (production_companie, i) =>
              production_companie +
              (i === movie.production_companies.length - 1 ? "" : ", ")
          )}
        </li>
      </ul>
    </div>
  );
};

export default MovieOverview;
