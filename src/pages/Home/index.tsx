import Main from "../../components/layouts/Main";
import MovieCategory from "../../components/fragments/MovieCategory";

function Home() {
  return (
    <Main>
      <main>
        <section>
          <div className="container px-2 lg:max-w-[910px]">
            <h2 className="text-lg font-black text-[#8C8989] mt-3 mb-3">
              Browse by category
            </h2>
            <MovieCategory />
          </div>
        </section>
      </main>
    </Main>
  );
}

export default Home;
