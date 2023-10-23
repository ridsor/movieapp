import { Link } from "react-router-dom";

export default function MovieCategory() {
  return (
    <ul className="category flex gap-2 text-[#cdcdcd] mb-3 overflow-x-auto h-fit text-lg">
      <li>
        <Link
          className="bg-one whitespace-nowrap rounded-full block font-black px-6 py-0.5 text-white transition"
          to="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=anime"
        >
          anime
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=action"
        >
          action
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=adventure"
        >
          adventure
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-black px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=science fiction"
        >
          science fiction
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one whitespace-nowrap rounded-full block font-bold px-3 py-0.5 hover:text-white transition hover:px-6"
          to="/?category=comedy"
        >
          comedy
        </Link>
      </li>
    </ul>
  );
}
