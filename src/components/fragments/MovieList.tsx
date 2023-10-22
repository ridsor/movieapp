import MovieItem from "./MovieItem";

type Props = {
  movies: Movie[];
};

type Movie = {
  id: number;
  img: string;
  title: string;
  genre_ids: number[];
};

export default function MovieList({ movies }: Props) {
  return (
    <div className="movie-list grid [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-10 justify-center my-8">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
