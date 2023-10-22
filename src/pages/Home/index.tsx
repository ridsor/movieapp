import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/MovieCategory";
import MovieList from "../../components/fragments/MovieList";
import { useGetMovies } from "../../hooks/useMovies";

const Home = () => {
  const data = useGetMovies();
  console.log(data.results);
  return (
    <Main>
      <main>
        <section>
          <div className="container px-2 lg:max-w-[910px]">
            <h2 className="text-2xl font-black text-[#8C8989] my-5">
              Browse by category
            </h2>
            <MovieCategory />
            <MovieList movies={data.results} />
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Home;
