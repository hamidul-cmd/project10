import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import shadow from "../assets/shadow.png";
import shadow2 from "../assets/shadow2.png";
import boll from "../assets/boll.png";
import logomobile from "../assets/logomobile.png";
import logolaptop from "../assets/logoleptop.png";
import logodesktop from "../assets/logodesktop.png";

function Header() {
  const [showmanu, setshowmanu] = useState(false);
  const navelinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Academics",
      link: "/academics",
    },
    {
      name: "Admissions",
      link: "/admissions",
    },
    {
      name: "Student Life",
      link: "/studentlife",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <header className="px-4 pt-10 space-y-3.5 xll:pt-4 xll:px-12.5 3xl:pt-4.8 mb-12.5 xll:mb-14.5 3xl:mb-20 z-[500]">
        <Link
          to="/admissions"
          className="bg-orange-90 border-2 border-gray-15 rounded-md flex items-center justify-center gap-2.5 py-3 xll:gap-3.5 3xl:py-3.5 3xl:rounded-lg relative overflow-hidden"
        >
          <p className="pera text-gray-15 relative z-20">
            Admission is Open, Grab your seat now
          </p>
          <div className="relative z-20">
            <svg
              className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 10.5C3.5 10.0858 3.83579 9.75 4.25 9.75L14.8879 9.75L10.7302 5.79062C10.4316 5.50353 10.4223 5.02875 10.7094 4.73017C10.9965 4.43159 11.4713 4.42228 11.7698 4.70937L17.2698 9.95937C17.4169 10.1008 17.5 10.296 17.5 10.5C17.5 10.704 17.4169 10.8992 17.2698 11.0406L11.7698 16.2906C11.4713 16.5777 10.9965 16.5684 10.7094 16.2698C10.4223 15.9713 10.4316 15.4965 10.7302 15.2094L14.8879 11.25L4.25 11.25C3.83579 11.25 3.5 10.9142 3.5 10.5Z"
                fill="#262626"
              />
            </svg>
          </div>
          <div className="h-fit w-fit absolute top-[-2px] left-[-9px] bottom-[-3px] z-10  xll:left-[-9px] xll:top-[-87px] xll:bottom-[-45px] 3xl:top-[-131px] 3xl:bottom-[-35px]">
            <img
              src={shadow}
              alt="shadow"
              className="block h-12.5 w-12.5 xll:h-[180px] xll:w-[180px] 3xl:h-[224px] 3xl:w-[224px]"
            />
          </div>
          <div className="h-fit w-fit absolute top-[-2px] right-0 bottom-[-3px] z-10 xll:right-0 xll:top-[-87px] xll:bottom-[-45px] 3xl:top-[-131px] 3xl:bottom-[-35px]">
            <img
              src={shadow2}
              alt="shadow"
              className="block h-12.5 w-12.5 xll:h-[180px] xll:w-[180px] 3xl:h-[224px] 3xl:w-[224px]"
            />
          </div>
          <div className="absolute left-1 top-[-11px] z-20 xll:top-[-25px] xll:left-[25%]">
            <img
              src={boll}
              alt="boll"
              className="block h-7.5 w-7.5 xll:h-12.5 xll:w-12.5 3xl:h-[72px] 3xl:w-[72px]"
            />
          </div>
          <div className="absolute right-[-18px] bottom-[-26px] z-20 xll:bottom-[-18px] xll:right-[25%]">
            <img
              src={boll}
              alt="boll"
              className="block h-12.5 w-12.5 xll:h-8 xll:w-8 3xl:h-10 3xl:w-10"
            />
          </div>
        </Link>
        <nav className="bg-white relative flex justify-between border-2 border-gray-15 rounded-lg ll:overflow-hidden z-[500]">
          <Link to="/" className="px-5 py-4 bg-orange-65 border-r-2 border-gray-15 rounded-l-[6.5px]">
            <picture>
              <source srcset={logodesktop} media="(min-width: 1920px)" />
              <source srcset={logolaptop} media="(min-width: 1440px)" />
              <img src={logomobile} alt="hero background" />
            </picture>
          </Link>
          <ul className={`absolute top-full left-0 w-full flex flex-col items-center mt-5 gap-2 bg-white py-2 rounded-lg border-2 border-gray-15 transition-all duration-300 ease-initial ${showmanu ? "translate-x-0" : "translate-x-[-110%]"} ll:relative ll:translate-x-0 ll:flex-row ll:w-fit ll:border-none ll:mt-0 ll:p-0 ll:gap-0 z-[500]`}>
            {navelinks.map((item, index) => (
              <li key={index} className="ll:h-full">
                <NavLink onClick={() => setshowmanu(!showmanu)} to={item.link} className="py-3 block px-5 pera rounded-md ll:h-full ll:flex ll:items-center ll:rounded-none ll:border-l-2 border-gray-15 ll:px-7.5 text-gray-15 3xl:px-8.5">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={() => setshowmanu(!showmanu)} className="flex justify-center items-center px-7.5 bg-orange-95 border-l-2 border-gray-15  rounded-r-[6.5px] ll:hidden">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
                fill="#262626"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
