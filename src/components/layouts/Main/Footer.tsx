import { Link } from "react-router-dom";
import logo from "../../../assets/img/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container lg:max-w-[900px] px-3">
        <article className="flex pt-5 text-white font-light">
          <div className="w-full lg:w-1/2">
            <div className="logo w-14 relative">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <p className="leading-5 text-[15px] px-1 mt-3 max-w-[20rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex pt-1">
              <ul className="text-lg flex flex-col gap-y-1 w-40">
                <li>
                  <Link to="/">Tentang kami</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Layanan</Link>
                </li>
                <li>
                  <Link to="/">Karir</Link>
                </li>
                <li>
                  <Link to="/">Pusat Media</Link>
                </li>
              </ul>
              <div>
                <h3 className="font-medium text-lg">Download</h3>
              </div>
            </div>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
