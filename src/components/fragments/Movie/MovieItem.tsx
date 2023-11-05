import { Link } from "react-router-dom";
import { imageUrl } from "../../../lib/api";

type Props = {
  movie: Movie;
  categories: MovieCategory[];
};

interface MovieCategory {
  id: number;
  name: string;
}

type Movie = {
  id: number;
  img: string;
  title: string;
  genre_ids: number[];
};

const MovieItem = ({ movie, categories }: Props) => {
  return (
    <Link to={`/movie/${movie.id}`} className="hover:scale-95 transition">
      <div className="movie-item flex flex-col">
        <div className="movie-img w-full h-fit bg-gray-200 rounded-md mb-1 overflow-hidden">
          <img
            src={imageUrl + movie.img}
            alt=""
            className="w-full h-[250px] object-cover object-center"
          />
        </div>
        <div className="font-bold text-lg leading-5 mt-1 h-10 text-ellipsis w-full overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {movie.title}
        </div>
        <span className="category text-[13px] leading-4 min-h-[32px] h-fit">
          {movie.genre_ids.map((item, i) => {
            for (const category of categories) {
              if (category.id === item) {
                return (
                  category.name + (i === movie.genre_ids.length - 1 ? "" : ", ")
                );
              }
            }
          })}
        </span>
      </div>
    </Link>
  );
};

export default MovieItem;
