import { useMemo } from "react";

const MovieCharactersLoading = () => {
  const items = useMemo(
    () => Array.from({ length: 20 }, (_, index) => index + 1),
    []
  );

  const Item = () => (
    <div className="character-card animate-pulse">
      <div className="w-full">
        <div className="w-full object-cover object-center rounded-xl  h-[253.6px] bg-gray-300" />
        <div className="name h-6 bg-gray-300 rounded-md mt-2"></div>
        <div className="character-name bg-gray-300 h-4 rounded-md mt-2.5"></div>
      </div>
    </div>
  );

  return (
    <div className="characters grid [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-10 justify-center mt-8 mb-10">
      {items.map((x) => (
        <Item key={x} />
      ))}
    </div>
  );
};

export default MovieCharactersLoading;
