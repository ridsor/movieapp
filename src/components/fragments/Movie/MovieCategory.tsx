import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function MovieCategory() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ul className="category flex gap-2 text-[#cdcdcd] mb-3 overflow-x-auto h-fit text-lg">
      <li>
        <Link
          className={`${
            searchParams.get("category") === null ||
            searchParams.get("category") === ""
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          className={`${
            searchParams.get("category") === "anime"
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/?category=anime"
        >
          anime
        </Link>
      </li>
      <li>
        <Link
          className={`${
            searchParams.get("category") === "action"
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/?category=action"
        >
          action
        </Link>
      </li>
      <li>
        <Link
          className={`${
            searchParams.get("category") === "adventure"
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/?category=adventure"
        >
          adventure
        </Link>
      </li>
      <li>
        <Link
          className={`${
            searchParams.get("category") === "science fiction"
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/?category=science fiction"
        >
          science fiction
        </Link>
      </li>
      <li>
        <Link
          className={`${
            searchParams.get("category") === "comedy"
              ? "bg-one text-white"
              : "hover:text-white hover:bg-one"
          } whitespace-nowrap rounded-full block font-black px-6 py-0.5 transition`}
          to="/?category=comedy"
        >
          comedy
        </Link>
      </li>
    </ul>
  );
}
