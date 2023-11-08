import { useOutletContext } from "react-router-dom";
import MovieNotFound from "../Movie/MovieNotFound";
import MoviewCharacterItem from "./MoviewCharacterItem";

interface Character {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const MovieCharacters = () => {
  const { characters } = useOutletContext<{ characters: Character[] }>();

  return (
    <div className="px-2">
      <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-2 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
        <span className="bg-white pr-3.5">Characters</span>
      </h2>
      {characters.length > 0 ? (
        <div className="characters grid [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-10 justify-center mt-8 mb-10">
          {characters.map((character: Character) => (
            <MoviewCharacterItem character={character} key={character.id} />
          ))}
        </div>
      ) : (
        <MovieNotFound />
      )}
    </div>
  );
};

export default MovieCharacters;
