import prevous from "../../../assets/img/icons/Arrow 2.svg";
import next from "../../../assets/img/icons/Arrow 1.svg";

interface Props {
  page: number;
  category: string | number;
  search: string;
  handleClick: (
    destination: number,
    category: string | number,
    search: string
  ) => void;
}

const MoviePagination = (props: Props) => {
  return (
    <div className="pagination flex justify-center mb-7 items-center gap-x-[3.3rem] gap-6 flex-wrap">
      <button
        className="prevous"
        disabled={props.page <= 1}
        onClick={() =>
          props.handleClick(props.page - 1, props.category, props.search)
        }
      >
        <img src={prevous} alt="" className="w-10 " />
      </button>
      <button
        className={`${
          props.page === 1 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(1, props.category, props.search)}
      >
        1
      </button>
      <button
        className={`${
          props.page === 2 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(2, props.category, props.search)}
      >
        2
      </button>
      <button
        className={`${
          props.page === 3 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(3, props.category, props.search)}
      >
        3
      </button>
      <button
        className={`${
          props.page === 4 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(4, props.category, props.search)}
      >
        4
      </button>
      <button
        className={`${
          props.page === 5 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(5, props.category, props.search)}
      >
        5
      </button>
      <button
        className={`${
          props.page === 6 ? "bg-two text-white font-black" : ""
        } px-3.5 py-1.5 text-2xl`}
        onClick={() => props.handleClick(6, props.category, props.search)}
      >
        6
      </button>
      <button
        className="next"
        disabled={props.page >= 6}
        onClick={() =>
          props.handleClick(props.page + 1, props.category, props.search)
        }
      >
        <img src={next} alt="" className="w-10 " />
      </button>
    </div>
  );
};

export default MoviePagination;
