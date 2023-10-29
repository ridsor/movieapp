import Main from "../../components/layouts/Main";
import { useParams } from "react-router-dom";
import yellowStar from "../../assets/img/icons/Star 4.svg";
import whiteStar from "../../assets/img/icons/Star 4.svg";

const Detail = () => {
  const { movie } = useParams();

  return (
    <Main>
      <main>
        <section className="text-white min-h-[380px] w-full bg-[rgba(0,0,0,.6)] bg-blend-multiply bg-[url('https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg')] bg-cover bg-center bg-fixed">
          <div className="container max-w-full lg:max-w-[885px] px-3">
            <div className="w-full max-w-[33rem] py-12">
              <h1 className="title font-black text-4xl">SAINT SEIYA</h1>
              <div className="flex gap-[1.1rem] mb-4 items-center">
                <div className="rating flex justify-between gap-x-1">
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                  <div className="star">
                    <img src={yellowStar} className="w-6" alt="" />
                  </div>
                </div>
                <div className="reviews text-[#f4f4f4] text-lg font-medium">
                  2200 reviews
                </div>
              </div>
              <p className="leading-[1.4rem] text-lg mb-7 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu
              </p>
              <div className="flex gap-x-7 gap-y-3 flex-wrap">
                <button className="font-black text-2xl bg-two rounded-md px-7 py-3">
                  Watch Trailer
                </button>
                <button className="font-black text-2xl bg-transparent border-2 border-[#c4c4c4] rounded-md px-7 py-3">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-3 lg:max-w-[900px] mt-2.5">
            <div className="flex gap-5 mb-10">
              <button className="bg-one text-lg font-black text-white px-5 py-0.5 rounded-full transition">
                Overview
              </button>
              <button className="text-lg px-5 py-0.5 rounded-full hover:bg-one hover:text-white transition">
                Characters
              </button>
              <button className="text-lg px-5 py-0.5 rounded-full hover:bg-one hover:text-white transition">
                Review
              </button>
            </div>
            <div className="px-2">
              <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-2 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
                <span className="bg-white pr-3.5">Synopsis</span>
              </h2>
              <div className="text-2xl flex flex-col gap-y-6 leading-7 mb-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </p>
              </div>
              <h2 className="text-3xl font-bold relative after:content-[''] after:block after:w-full after:absolute after:border-b-2 after:top-1/2 after:-translate-y-1/2 after:border-[#cdcdcd] after:right-0 mb-10 [text-shadow:0px_2px_2px_rgba(0,0,0,0.25)] after:-z-10">
                <span className="bg-white pr-2">Movie Info</span>
              </h2>
              <ul className="text-2xl leading-7 mb-20">
                <li>
                  <span className="font-medium mr-5">Release date</span>:
                  January 5, 1998
                </li>
                <li>
                  <span className="font-medium mr-5">Director</span>: Jhon Doe
                </li>
                <li>
                  <span className="font-medium mr-5">Featured song</span>:
                  Pegasus fantasi
                </li>
                <li>
                  <span className="font-medium mr-5">Budget</span>: 200 million
                  USD
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Detail;
