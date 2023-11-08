import { useOutletContext } from "react-router-dom";
import MovieNotFound from "../Movie/MovieNotFound";
import MovieReviewItem from "./MovieReviewItem";

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

const MovieReviews = () => {
  const { reviews } = useOutletContext<{ reviews: Review[] }>();

  return (
    <div className="px-2 mb-8">
      <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-8 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
        <span className="bg-white pr-3.5">Reviews</span>
      </h2>
      <div className="reviews flex gap-x-5 gap-y-8 flex-col">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <MovieReviewItem review={review} key={review.id} />
          ))
        ) : (
          <MovieNotFound />
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
