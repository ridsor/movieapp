import logo from "../../../assets/img/icons/Rectangle 37.svg";
import subLogo from "../../../assets/img/icons/Movie brand.svg";

export default function Header() {
  return (
    <header>
      <div className="container max-w-full lg:max-w-[950px] px-3">
        <div className="flex items-center py-2">
          <div className="section-left">
            <div className="logo h-14 aspect-square relative mr-2">
              <img src={logo} alt="" className="w-full h-full" />
              <img
                src={subLogo}
                alt=""
                className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+3px)] -translate-x-1/2 w-7 aspect-square"
              />
            </div>
          </div>
          <div className="section-right flex justify-center w-full">
            <div className="search w-full max-w-xs">
              <input
                type="text"
                placeholder="search movie"
                className="font-medium w-full h-full text-2xl px-2.5 py-0.5 border border-[#c4c4c4] rounded-sm placeholder:text-[#c4c4c4]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
