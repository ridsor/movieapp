import { useMemo } from "react";

const MovieLoading = () => {
  const items = useMemo(
    () => Array.from({ length: 20 }, (_, index) => index + 1),
    []
  );

  const Item = () => (
    <div className="movie-item flex flex-col animate-pulse">
      <div className="movie-img w-full h-[250px] bg-gray-200 rounded-md mb-1 overflow-hidden"></div>
      <div className="font-bold text-lg text-ellipsis leading-5 mt-2 mb-0.5 h-[calc(2.5rem-0.5rem)] bg-gray-200 rounded-md w-full overflow-hidden"></div>
      <span className="category text-[13px] leading-4 h-[calc(2rem-0.25rem)] mt-1 bg-gray-200 w-full rounded-md"></span>
    </div>
  );

  return (
    <div className="movie-list grid [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-10 justify-center mt-8 mb-10">
      {items.map((x) => (
        <Item key={x} />
      ))}
    </div>
  );
};

export default MovieLoading;
