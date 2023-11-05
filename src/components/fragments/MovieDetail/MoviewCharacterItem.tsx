type Props = {
  character: Character;
};

interface Character {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const MoviewCharacterItem = (props: Props) => {
  return (
    <div className="character-card hover:scale-95 transition">
      <div className="w-full h-fit">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.character.profile_path}`}
          alt=""
          className="w-full h-full object-cover object-center rounded-xl"
        />
        <div className="name font-medium text-xl text-center">
          {props.character.name}
        </div>
        <div className="character-name text-center text-base">
          {props.character.character}
        </div>
      </div>
    </div>
  );
};

export default MoviewCharacterItem;
