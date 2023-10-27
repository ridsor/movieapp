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
  let category = categories.find((x) => x.id === movie.genre_ids[0])?.name;

  return (
    <div className="movie-item flex flex-col">
      <div className="movie-img w-full h-fit bg-gray-200 rounded-md mb-1 overflow-hidden">
        <img
          src={imageUrl + movie.img}
          alt=""
          className="w-full h-[250px] object-cover object-center"
        />
      </div>
      <div className="font-bold text-lg text-ellipsis leading-5 mt-1 h-5 whitespace-nowrap w-full overflow-hidden">
        {movie.title}
      </div>
      <span className="category text-[13px] leading-4 h-[32px]">
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
  );
};

export default MovieItem;
