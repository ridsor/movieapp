import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/MovieCategory";
import MovieList from "../../components/fragments/MovieList";
import { useGetMovies } from "../../hooks/useMovies";
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { getMovies, movieSelectors } from "./movieSlice";
import { useMemo } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(movieSelectors.selectAll);

  useMemo(() => {
    dispatch(getMovies());
  }, []);

  return (
    <Main>
      <main>
        <section>
          <div className="container px-3 lg:max-w-[910px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              Browse by category
            </h2>
            <MovieCategory />
            <MovieList movies={movies} />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Home;
