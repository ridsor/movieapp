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
  const category = categories.find((x) => x.id === movie.genre_ids[0])?.name;

  return (
    <div className="movie-item flex flex-col">
      <div className="movie-img w-full h-fit bg-gray-200 rounded-md mb-1 overflow-hidden">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.img}
          alt=""
          className="w-full h-[250px] object-cover object-center"
        />
      </div>
      <div className="font-bold text-lg">{movie.title}</div>
      <span className="category text-[13px] leading-3">{category}</span>
    </div>
  );
};

export default MovieItem;
