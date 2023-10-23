import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/Movie/MovieCategory";
import MovieList from "../../components/fragments/Movie/MovieList";
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { getMovies, movieSelectors } from "./movieSlice";
import { useMemo } from "react";
import {
  getMoviezCategory,
  movieCategorySelectors,
} from "./movieCategorySlice";
import MoviePagination from "../../components/fragments/Movie/MoviePagination";

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(movieSelectors.selectAll);
  const movieCategory = useAppSelector(movieCategorySelectors.selectAll);

  useMemo(() => {
    dispatch(getMovies());
    dispatch(getMoviezCategory());
  }, []);

  return (
    <Main>
      <main>
        <section>
          <div className="container px-3 lg:max-w-[880px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              Browse by category
            </h2>
            <MovieCategory />
            <MovieList movies={movies} categories={movieCategory} />
            <MoviePagination />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Home;
