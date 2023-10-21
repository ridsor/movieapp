import { Link } from "react-router-dom";

export default function MovieCategory() {
  return (
    <ul className="category flex gap-2 text-[#c4c4c4]">
      <li>
        <Link
          className="bg-one rounded-full font-bold px-6 py-1 text-white transition"
          to="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one rounded-full font-bold px-3 py-1 hover:text-white transition hover:px-6"
          to="/?category=anime"
        >
          anime
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one rounded-full font-bold px-3 py-1 hover:text-white transition hover:px-6"
          to="/?category=action"
        >
          action
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one rounded-full font-bold px-3 py-1 hover:text-white transition hover:px-6"
          to="/?category=adventure"
        >
          adventure
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one rounded-full font-bold px-3 py-1 hover:text-white transition hover:px-6"
          to="/?category=science fiction"
        >
          science fiction
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-one rounded-full font-bold px-3 py-1 hover:text-white transition hover:px-6"
          to="/?category=comedy"
        >
          comedy
        </Link>
      </li>
    </ul>
  );
}
