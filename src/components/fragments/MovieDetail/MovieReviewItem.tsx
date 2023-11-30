import { Link } from "react-router-dom";
import star from "../../../assets/img/icons/Star 4.svg";

type Props = {
  review: Review;
  dateConvert: (e: string) => string;
};

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

const MovieReviewItem = (props: Props) => {
  return (
    <div className="review-card flex flex-col md:flex-row gap-4">
      <img
        src={`https://image.tmdb.org/t/p/original${props.review.avartar_path}`}
        alt=""
        className="w-20 h-20 rounded-full object-cover object-center"
      />
      <div className="content">
        <Link to={props.review.url} target="_blank">
          <div className="author font-black text-2xl">
            {props.review.author}
          </div>
        </Link>
        <div className="username text-base mb-2">{props.review.username}</div>
        <div className="flex gap-2 items-center mb-2">
          <div className="rating flex items-center gap-1">
            <img src={star} alt="" className="w-6 h-6" />{" "}
            <span className="font-bold text-xl translate-y-[1px]">
              {props.review.rating}
            </span>
          </div>
          <div className="date text-base translate-y-[.5px]">
            {props.dateConvert(props.review.date)}
          </div>
        </div>
        <p className="text-xl">{props.review.content}</p>
      </div>
    </div>
  );
};

export default MovieReviewItem;
