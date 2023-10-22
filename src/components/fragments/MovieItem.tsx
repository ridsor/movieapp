type Props = {
  // movie: Movie;
};

type Movie = {
  id: number;
  title: string;
  genre_ids: number[];
};

const MovieItem = (props: Props) => {
  return (
    <div className="movie-item">
      <div className="movie-img w-full min-h-[250px] h-fit bg-gray-200 rounded-md mb-1">
        <img src="" alt="" />
      </div>
      <div className="font-bold text-xl">Saint Seiya</div>
      <span className="category text-[13px]">Anime</span>
    </div>
  );
};

export default MovieItem;
