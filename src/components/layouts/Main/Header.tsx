import { useCallback, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../../assets/img/icons/logo.svg";
import { useAppDispatch } from "../../../config/redux/hooks";
import { getMovies } from "../../../pages/Home/movieSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleOnSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getMovies({ search }));
      console.log(location.pathname !== "/results");
      if (location.pathname !== "/results") {
        navigate("/results?s=" + search);
      } else {
        searchParams.set("s", search);
        setSearchParams(searchParams);
      }
    },
    [search]
  );

  return (
    <header>
      <div className="container max-w-full lg:max-w-[900px] px-3">
        <div className="flex items-center py-2">
          <div className="section-left">
            <div className="logo w-14 relative mr-2">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="section-right flex justify-center w-full">
            <form onSubmit={handleOnSubmit}>
              <div className="search w-full max-w-md">
                <input
                  type="text"
                  placeholder="search movie"
                  className="font-medium w-full h-full text-2xl px-2.5 py-0.5 border border-[#c4c4c4] rounded-5 placeholder:text-[#c4c4c4]"
                  value={search}
                  onChange={handleOnChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
