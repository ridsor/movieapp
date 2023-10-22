type Props = {
  movie: Movie;
};

type Movie = {
  id: number;
  img: string;
  title: string;
  genre_ids: number[];
};

const MovieItem = ({ movie }: Props) => {
  return (
    <div className="movie-item">
      <div className="movie-img w-full h-fit bg-gray-200 rounded-md mb-1 overflow-hidden">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.img}
          alt=""
          className="w-full h-[250px] object-cover object-center"
        />
      </div>
      <div className="font-bold text-xl">{movie.title}</div>
      <span className="category text-[13px]">Anime</span>
    </div>
  );
};

export default MovieItem;
