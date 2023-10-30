import Slider from "react-slick";
import MovieItemSlider from "./MovieItemSlider";
import { useEffect } from "react";

interface Props {
  settings: Object;
  movies: Movie[];
}

interface Movie {
  id: number;
  img: string;
}

const MovieSlider = (props: Props) => {
  // slick
  var dots: any = document.querySelectorAll(".slick-dots>li>button");
  useEffect(() => {
    if (dots.length > 0) {
      if (dots[0].innerText === "") {
        dots = undefined;
        return;
      }

      for (const dot of dots) {
        dot.innerText = "";
      }
    }
  }, [dots]);

  return (
    <>
      {props.movies.length < 1 ? (
        <div className="animate-pulse">
          <div className="h-[400px] w-full bg-gray-200"></div>
        </div>
      ) : (
        <Slider {...props.settings} className="overflow-hidden block">
          {props.movies.map((movie) => (
            <MovieItemSlider img={movie.img} key={movie.id} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default MovieSlider;
