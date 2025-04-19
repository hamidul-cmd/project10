import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TeamCird({ name, img, tittle, pera }) {
  const cirdref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cirdref.current, {
        y: 150,
        opacity: 0,
        scale: 0.7,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cirdref.current,
          start: "top 97%",
          end: "bottom 97%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={cirdref}
        className="p-7.5 bg-white rounded-10 border-2 border-gray-15 shadow-black space-y-6 xll:p-10 3xl:p-12.5 3xl:space-y-7.5 3xl:rounded-xl"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5 xll:gap-3 3xl:gap-4">
            <img
              src={img}
              alt="member img"
              className="block h-14.5 w-14.5 xll:h-20 xll:w-20 3xl:h-24.5 3xl:w-24.5"
            />
            <h2 className="text-xl font-extrabold l-150 font-raleway text-gray-20 xll:text-2xl 3xl:text-3xl">
              {name}
            </h2>
          </div>
          <div className="p-3 rounded-md bg-orange-90 border-2 border-gray-15">
            <svg
              className="h-5 w-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2011 3.4939H2.79891C1.25288 3.4939 0 4.74677 0 6.29238V17.7077C0 19.2534 1.25288 20.5062 2.79891 20.5062H21.2011C22.7467 20.5062 24 19.2534 24 17.7077V6.29238C24 4.74677 22.7467 3.4939 21.2011 3.4939ZM22.6636 18.4617L22.1308 19.0927L14.6699 13.0035L13.5144 14.1029C12.6581 14.8893 11.342 14.8893 10.4856 14.1029L9.33014 13.0035L1.86919 19.0927L1.33641 18.4617L8.34141 12.0625L1.29052 5.43607L1.70738 4.88374L12 12.6826L22.2926 4.88374L22.7091 5.43607L15.6586 12.0625L22.6636 18.4617Z"
                fill="#262626"
              />
            </svg>
          </div>
        </div>
        <div className="p-4.8 bg-orange-97 rounded-10 border-2 border-gray-15 space-y-3 xll:p-[22px] xll:space-y-4 3xl:p-6.7 3xl:rounded-xl 3xl:space-y-5">
          <h3 className="text-xl font-semibold l-150 text-gray-20 font-outfit 3xl:text-2xl">
            {tittle}
          </h3>
          <p className="text-base font-medium l-150 text-gray-20 font-outfit 3xl:text-xl">
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default TeamCird;
