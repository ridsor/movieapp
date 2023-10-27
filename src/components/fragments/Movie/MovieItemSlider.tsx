import { imageUrl } from "../../../lib/api";

type Props = {
  img: string;
};

const MovieItemSlider = (props: Props) => {
  return (
    <div>
      <div className="h-[400px] w-full">
        <img
          src={imageUrl + props.img}
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieItemSlider;
