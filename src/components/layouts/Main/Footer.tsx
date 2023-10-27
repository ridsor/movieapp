import { Link } from "react-router-dom";
import logo from "../../../assets/img/icons/logo.svg";
import playstore from "../../../assets/img/icons/google play 1.png";
import appstore from "../../../assets/img/icons/apple store 1.png";
import face from "../../../assets/img/icons/face 1.png";
import pinterest from "../../../assets/img/icons/pinterest 1.png";
import instag from "../../../assets/img/icons/instagram 1.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container lg:max-w-[900px] px-3">
        <article className="flex pt-5 text-white font-light border-b border-[#d4d4d4] pb-3 flex-wrap ">
          <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
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
            <div className="flex flex-wrap justify-around lg:justify-normal pt-1 ">
              <ul className="text-lg flex flex-col gap-y-1 w-40 mb-5 lg:mb-0">
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
                <div className="download mb-1 flex-1">
                  <h3 className="font-medium text-lg leading-6">Download</h3>
                  <div className="flex items-center">
                    <Link to="/" className="block playstore w-[130px]">
                      <img
                        src={playstore}
                        alt=""
                        className="w-full h-full translate-x-[-8px]"
                      />
                    </Link>
                    <Link to="/" className="block appstore w-[130px]">
                      <img
                        src={appstore}
                        alt=""
                        className="w-full h-full translate-x-[-5px] translate-y-[3px]"
                      />
                    </Link>
                  </div>
                </div>
                <div className="social-media">
                  <h3 className="font-medium text-lg mb-1">Social media</h3>
                  <div className="flex items-center">
                    <Link to="/" className="block w-8 ml-1.5">
                      <img src={face} alt="" className="w-full h-full" />
                    </Link>
                    <Link to="/" className="block w-10 ml-3.5">
                      <img src={pinterest} alt="" className="w-full h-full" />
                    </Link>
                    <Link to="/" className="block w-[42px] ml-3.5">
                      <img src={instag} alt="" className="w-full h-full" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="copyright py-6 text-lg text-center text-white">
          Copyright &copy; . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
