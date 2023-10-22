import { useParams } from "react-router-dom";
import { useGetMovies } from "../../hooks/useMovies";

const MovieDetail = () => {
  const data = useGetMovies();
  console.log(data);
  const { id } = useParams();
  return <div>{id}</div>;
};

export default MovieDetail;
