import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/Movie/MovieCategory";
import MovieList from "../../components/fragments/Movie/MovieList";
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { getMovies, movieSelectors } from "./movieSlice";
import { useEffect, useMemo, useCallback, useState } from "react";
import {
  getMoviezCategory,
  movieCategorySelectors,
} from "./movieCategorySlice";
import MoviePagination from "../../components/fragments/Movie/MoviePagination";

// Import css files
import "slick-carousel/slick/slick.css";
import { useSearchParams } from "react-router-dom";
import MovieSlider from "../../components/fragments/Movie/MovieSlider";
import apiAxios from "../../lib/api";

interface MoviePopuler {
  id: number;
  img: string;
}

interface MovieCategory {
  id: number;
  name: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(movieSelectors.selectAll);
  const movieCategories = useAppSelector(movieCategorySelectors.selectAll);
  const movieCategory = useAppSelector((state) => state.movie.category);
  const moviePage = useAppSelector((state) => state.movie.page);
  const movieSearch = useAppSelector((state) => state.movie.search);

  const [searchParams] = useSearchParams();

  const [moviesPopuler, setMoviesPopuler] = useState<MoviePopuler[]>([]);

  const sliderMovieSettings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }),
    []
  );

  const onClickPagination = useCallback(
    (destination: number, category: string | number, search: string) => {
      dispatch(getMovies({ destination, category, search }));
    },
    []
  );

  const getMovieCategoryId = useCallback(
    (category: string, categories: MovieCategory[]) => {
      category = category === "anime" ? (category = "animation") : category;

      let id: number | string = "";

      if (category) {
        const findCategory = categories.find(
          (item) =>
            item.name.toLocaleLowerCase() === category.toLocaleLowerCase()
        );

        id = findCategory?.id as number;
      }

      return id;
    },
    []
  );

  useMemo(() => {
    dispatch(getMoviezCategory());
  }, []);

  useEffect(() => {
    if (movieCategories.length > 0) {
      let category = searchParams.get("category") as string;
      const categoryId = getMovieCategoryId(category, movieCategories);

      dispatch(getMovies({ category: categoryId }));
    }
  }, [searchParams, movieCategories]);

  useEffect(() => {
    const loadMoviePopuler = async () => {
      const movies = await apiAxios
        .get("/discover/movie?sort_by=popularity.desc")
        .then((res) => res.data.results);

      const moviesFilter = movies.map((item: any) => {
        return { id: item.id, img: item.backdrop_path };
      });

      return [moviesFilter[0], moviesFilter[1], moviesFilter[2]];
    };

    loadMoviePopuler().then((res) => setMoviesPopuler(res));
  }, []);

  return (
    <Main>
      <main>
        <section>
          <div className="container max-w-full">
            <MovieSlider
              settings={sliderMovieSettings}
              movies={moviesPopuler}
            />
          </div>
        </section>
        <section>
          <div className="container px-3 lg:max-w-[885px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              Browse by category
            </h2>
            <MovieCategory search={movieSearch} />
            <MovieList movies={movies} categories={movieCategories} />
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

export default Home;
