import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/fragments/Movie/MovieList";
import MovieLoading from "../../components/fragments/Movie/MovieLoading";
import MovieNotFound from "../../components/fragments/Movie/MovieNotFound";
import MoviePagination from "../../components/fragments/Movie/MoviePagination";
import Main from "../../components/layouts/Main";
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { movieCategorySelectors } from "../Home/movieCategorySlice";
import { getMovies, movieSelectors } from "../Home/movieSlice";

const Results = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(movieSelectors.selectAll);
  const movieCategories = useAppSelector(movieCategorySelectors.selectAll);
  const movieCategory = useAppSelector((state) => state.movie.category);
  const moviePage = useAppSelector((state) => state.movie.page);
  const movieSearch = useAppSelector((state) => state.movie.search);
  const movieLoading = useAppSelector((state) => state.movie.loading);
  const [searchParams] = useSearchParams();

  const [keyword, setKeyword] = useState<string>("");

  const onClickPagination = useCallback(
    (
      destination: number,
      category: string | number,
      search: string | undefined
    ) => {
      dispatch(getMovies({ destination, category, search }));
    },
    [dispatch]
  );

  useEffect(() => {
    const getKeyword = searchParams.get("s") as string;
    dispatch(getMovies({ search: getKeyword })).then(() => {
      setKeyword(getKeyword);
    });
  }, [searchParams]);

  return (
    <Main>
      <main>
        <section>
          <div className="container px-3 lg:max-w-[885px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              {keyword} - search results
            </h2>
            {movieLoading ? (
              <MovieLoading />
            ) : movies.length > 0 ? (
              <MovieList movies={movies} categories={movieCategories} />
            ) : (
              <MovieNotFound />
            )}
            <MoviePagination
              page={moviePage}
              category={movieCategory}
              search={movieSearch}
              handleClick={onClickPagination}
            />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Results;
