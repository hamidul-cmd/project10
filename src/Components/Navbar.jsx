import React from "react";
import logo from "../assets/logo.png";
import logophone from "../assets/logophone.png";
import logotab from "../assets/logotab.png";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Products",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
  ];
  return (
    <>
      <nav>
        <a href="#">
          <img src={logo} alt="" className=" hidden 3xl:block" />
          <img src={logophone} alt="" className="block xll:hidden" />
          <img src={logotab} alt="" className="hidden xll:block 3xl:hidden" />
        </a>
        <ul>
          {navlinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
