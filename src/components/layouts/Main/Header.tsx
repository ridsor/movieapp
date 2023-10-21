import logo from "../../../assets/img/icons/Rectangle 37.svg";
import subLogo from "../../../assets/img/icons/Movie brand.svg";

export default function Header() {
  return (
    <header>
      <div className="container max-w-full lg:max-w-[950px] px-2">
        <div className="flex items-center py-0.5">
          <div className="section-left">
            <div className="logo h-12 aspect-square relative">
              <img src={logo} alt="" className="w-full h-full" />
              <img
                src={subLogo}
                alt=""
                className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+3px)] -translate-x-1/2 w-[1.6rem] aspect-square"
              />
            </div>
          </div>
          <div className="section-right flex justify-center w-full">
            <div className="search w-full max-w-xs">
              <input
                type="text"
                placeholder="search movie"
                className="font-bold w-full h-full text-sm px-2 py-1.5 border border-[#c4c4c4] rounded-sm placeholder:text-[#c4c4c4]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
