import { useState } from "react";
import logo from "../../../assets/img/icons/logo.svg";
import { useAppDispatch } from "../../../config/redux/hooks";
import { getMovies } from "../../../pages/Home/movieSlice";

export default function Header() {
  const dispatch = useAppDispatch();

  const [delaySearch, setDelaySearch] = useState<number>(0);

  const onSearch = (keyword: string) => {
    clearTimeout(delaySearch);

    setDelaySearch(
      setTimeout(() => {
        dispatch(getMovies({ destination: 1, search: keyword }));
      }, 300)
    );
  };

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
            <div className="search w-full max-w-xs">
              <input
                type="text"
                placeholder="search movie"
                className="font-medium w-full h-full text-2xl px-2.5 py-0.5 border border-[#c4c4c4] rounded-5 placeholder:text-[#c4c4c4]"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
