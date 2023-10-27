import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/Movie/MovieCategory";
import MovieList from "../../components/fragments/Movie/MovieList";
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { getMovies, movieSelectors } from "./movieSlice";
import { useEffect, useMemo, useCallback } from "react";
import {
  getMoviezCategory,
  movieCategorySelectors,
} from "./movieCategorySlice";
import MoviePagination from "../../components/fragments/Movie/MoviePagination";
import Slider from "../../components/fragments/SliderCustom";

// Import css files
import "slick-carousel/slick/slick.css";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(movieSelectors.selectAll);
  const movieCategories = useAppSelector(movieCategorySelectors.selectAll);
  const movieCategory = useAppSelector((state) => state.movie.category);
  const moviePage = useAppSelector((state) => state.movie.page);
  const movieTotalPages = useAppSelector((state) => state.movie.total_pages);

  const [searchParams] = useSearchParams();

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
    (destination: number) => {
      dispatch(getMovies({ destination, category: movieCategory }));
    },
    [movieCategory]
  );

  const getMovieCategoryId = useCallback(
    (category: string) => {
      category = category === "anime" ? (category = "animation") : category;

      let id: number | string = "";

      if (category) {
        const findCategory = movieCategories.find(
          (item) =>
            item.name.toLocaleLowerCase() === category.toLocaleLowerCase()
        );

        id = findCategory?.id as number;
      }

      console.log(category);

      return id;
    },
    [movieCategories]
  );

  useMemo(() => {
    dispatch(getMoviezCategory());
  }, []);

  useEffect(() => {
    if (movieCategories.length > 0) {
      let category = searchParams.get("category") as string;
      const categoryId = getMovieCategoryId(category);

      dispatch(getMovies({ category: categoryId }));
    }
  }, [searchParams, movieCategories]);

  useEffect(() => {
    // slick
    const dots: any = document.querySelectorAll(".slick-dots>li>button");
    for (const dot of dots) {
      dot.innerText = "";
    }
  }, []);

  console.log(movieCategories);

  return (
    <Main>
      <main>
        <section>
          <div className="container max-w-full">
            <Slider settings={sliderMovieSettings}>
              <div className="bg-red-500">
                <div className="h-[400px] w-full">
                  <img
                    src="https://image.tmdb.org/t/p/original/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="h-[400px] w-full">
                  <img
                    src="https://image.tmdb.org/t/p/original/k0VC5O8PrrJRqqDDbHDiDo8qAE0.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="h-[400px] w-full">
                  <img
                    src="https://image.tmdb.org/t/p/original/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section>
          <div className="container px-3 lg:max-w-[880px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              Browse by category
            </h2>
            <MovieCategory />
            <MovieList movies={movies} categories={movieCategories} />
            <MoviePagination page={moviePage} handleClick={onClickPagination} />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Home;
