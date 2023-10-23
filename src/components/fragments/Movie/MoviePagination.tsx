import prevous from "../../../assets/img/icons/Arrow 2.svg";
import next from "../../../assets/img/icons/Arrow 1.svg";

type Props = {};

const MoviePagination = (props: Props) => {
  return (
    <div className="pagination flex justify-center mb-7 items-center gap-[3.3rem]">
      <button className="prevous">
        <img src={prevous} alt="" className="w-10 " />
      </button>
      <button className="px-3.5 py-1.5 bg-two text-white text-2xl font-black">
        1
      </button>
      <button className="px-3.5 py-1.5 text-2xl font-light hover:bg-two hover:text-white">
        2
      </button>
      <button className="px-3.5 py-1.5 text-2xl font-light hover:bg-two hover:text-white">
        3
      </button>
      <button className="px-3.5 py-1.5 text-2xl font-light hover:bg-two hover:text-white">
        4
      </button>
      <button className="px-3.5 py-1.5 text-2xl font-light hover:bg-two hover:text-white">
        5
      </button>
      <button className="px-3.5 py-1.5 text-2xl font-light hover:bg-two hover:text-white">
        6
      </button>
      <button className="next">
        <img src={next} alt="" className="w-10 " />
      </button>
    </div>
  );
};

export default MoviePagination;
