import MovieItem from "./MovieItem";

type Props = {
  movies: Movie[];
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

export default function MovieList({ movies, categories }: Props) {
  return (
    <div className="movie-list grid [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-10 justify-center mt-8 mb-10">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} categories={categories} />
      ))}
    </div>
  );
}
