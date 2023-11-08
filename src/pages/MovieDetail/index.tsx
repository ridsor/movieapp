import Main from "../../components/layouts/Main";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import yellowStar from "../../assets/img/icons/Star 4.svg";
import whiteStar from "../../assets/img/icons/Star 5.svg";
import { useEffect, useState } from "react";
import apiAxios from "../../lib/api";

interface MovieDetail {
  id: number;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  spoken_language: string;
  genres: string[];
  runtime: number;
  revenue: number;
  production_companies: string[];
  budget: string;
}

interface Character {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Review {
  id: string;
  author: string;
  username: string;
  avartar_path: string;
  rating: number;
  content: string;
  date: string;
  url: string;
}

const Detail = () => {
  const location = useLocation();

  const { movie_id } = useParams();
  const [movie, setMovie] = useState<MovieDetail>({
    id: 0,
    original_title: "",
    backdrop_path: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    spoken_language: "",
    genres: [],
    runtime: 0,
    revenue: 0,
    production_companies: [],
    budget: "",
  });
  const [characters, setCharacters] = useState<Character[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getDetailMovie = async (movie_id: string) => {
      const movie = await apiAxios
        .get("/movie/" + movie_id)
        .then((res) => res.data)
        .catch((err) => console.error(err));

      const characters = await apiAxios
        .get("/movie/" + movie_id + "/credits")
        .then((res) => res.data)
        .catch((err) => console.error(err));

      const reviews = await apiAxios
        .get(`/movie/${movie_id}/reviews?page=1`)
        .then((res) => res.data)
        .catch((err) => console.error(err));

      return {
        movie,
        characters,
        reviews,
      };
    };

    getDetailMovie(movie_id as string).then((res) => {
      const date = new Date(res.movie.release_date);
      const release_date = Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
      const budget = res.movie.budget.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
      const revenue = res.movie.revenue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });

      setMovie({
        id: res.movie.id,
        original_title: res.movie.original_title,
        backdrop_path: res.movie.backdrop_path,
        poster_path: res.movie.poster_path,
        overview: res.movie.overview,
        release_date,
        vote_average: res.movie.vote_average,
        spoken_language: res.movie.spoken_languages[0].name,
        genres: res.movie.genres.map((genre: { name: string }) => genre.name),
        runtime: res.movie.runtime,
        revenue,
        production_companies: res.movie.production_companies.map(
          (company: { name: string }) => company.name
        ),
        budget,
      });

      const characters = res.characters.cast.map(
        ({ id, name, character, profile_path }: Character) => ({
          id,
          name,
          character,
          profile_path,
        })
      );

      setCharacters(characters);

      const reviews = res.reviews.results.map((x: any) => ({
        id: x.id,
        author: x.author,
        username: x.author_details.username,
        avartar_path: x.author_details.avatar_path,
        rating: x.author_details.rating,
        content: x.content,
        date: x.updated_at,
        url: x.url,
      }));

      setReviews(reviews);
    });
  }, []);

  return (
    <Main>
      <main>
        <section
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${
              movie?.backdrop_path || ""
            }')`,
          }}
          className={`text-white h-[380px] overflow-auto w-full bg-[rgba(0,0,0,.6)] bg-blend-multiply bg-cover bg-center bg-fixed`}
        >
          <div className="container max-w-full lg:max-w-[885px] px-3">
            <div className="w-full max-w-[33rem] py-12">
              <h1 className="title font-black text-4xl">
                {movie.original_title}
              </h1>
              <div className="flex gap-[1.1rem] mb-4 items-center">
                <div className="rating flex justify-between gap-x-1">
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={whiteStar} className="w-6" alt="" />
                  </div>
                </div>
                <div className="reviews text-[#f4f4f4] text-lg font-medium">
                  {movie.vote_average} reviews
                </div>
              </div>
              <p className="leading-[1.4rem] text-lg mb-7 font-medium">
                {movie.overview}
              </p>
              <div className="flex gap-x-7 gap-y-3 flex-wrap">
                <button className="font-black text-2xl bg-two rounded-md px-7 py-3">
                  Watch Trailer
                </button>
                <button className="font-black text-2xl bg-transparent border-2 border-[#c4c4c4] rounded-md px-7 py-3">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-3 lg:max-w-[900px] mt-2.5">
            <ul className="flex gap-5 mb-10 w-full overflow-auto">
              <li>
                <Link
                  to={`/movie/${movie.id}`}
                  className={`${
                    location.pathname === `/${movie.id}`
                      ? "bg-one text-white font-black"
                      : ""
                  } text-lg px-5 py-0.5 rounded-full transition`}
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to={`/movie/${movie.id}/characters`}
                  className={`${
                    location.pathname === `/movie/${movie.id}/characters`
                      ? "bg-one text-white font-black"
                      : ""
                  } text-lg px-5 py-0.5 rounded-full transition`}
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  to={`/movie/${movie.id}/reviews`}
                  className={`${
                    location.pathname === `/${movie.id}/reviews`
                      ? "bg-one text-white font-black"
                      : ""
                  } text-lg px-5 py-0.5 rounded-full transition`}
                >
                  Review
                </Link>
              </li>
            </ul>
            <Outlet context={{ movie, characters, reviews }} />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Detail;
