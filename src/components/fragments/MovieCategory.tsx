import { Link } from "react-router-dom";

export default function MovieCategory() {
  return (
    <ul className="category flex gap-2 text-[#cdcdcd] mb-3 overflow-x-auto h-fit">
      <li>
        <Link
          className="bg-one whitespace-nowrap rounded-full block font-black px-6 py-0.5 text-white transition"
          to="/movie"
        >
          <span className="text-[16px]">All</span>
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=anime"
        >
          <span className="text-[16px]">anime</span>
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=action"
        >
          <span className="text-[16px]">action</span>
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=adventure"
        >
          <span className="text-[16px]">adventure</span>
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=science fiction"
        >
          <span className="text-[16px]">science fiction</span>
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-bold px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=comedy"
        >
          <span className="text-[16px]">comedy</span>
        </Link>
      </li>
    </ul>
  );
}
