import logo from "../../../assets/img/icons/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container max-w-full lg:max-w-[900px] px-3">
        <div className="flex items-center py-2.5">
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
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
