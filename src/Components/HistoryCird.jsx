import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HistoryCird({ year, tittle, pera }) {
  const yearboxref = useRef(null);
  const historytextboxref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1300) {
        gsap.from(yearboxref.current, {
          x: -150,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: yearboxref.current,
            start: "top 97%",
            end: "bottom 97%",
          },
        });
        gsap.from(historytextboxref.current, {
          x: 150,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: historytextboxref.current,
            start: "top 97%",
            end: "bottom 97%",
          },
        });
      } else {
        gsap.from(yearboxref.current, {
          y: 100,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: yearboxref.current,
            start: "top 97%",
            end: "bottom 97%",
          },
        });
        gsap.from(historytextboxref.current, {
          y: 100,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: historytextboxref.current,
            start: "top 97%",
            end: "bottom 97%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-7.5 justify-center items-center ll:gap-10 3xl:gap-12.5">
        <div
          ref={yearboxref}
          className="px-6 py-5 flex gap-5 items-center bg-white rounded-10 border-2 border-gray-15 shadow-black w-fit xll:px-[34px] xll:py-6 3xl:px-12.5 3xl:py-7.5 3xl:rounded-xl 3xl:shadow-black-big 3xl:shadow-none"
        >
          <img
            src="https://i.imgur.com/d740r1W.png"
            alt="icon"
            className="h-12.5 w-12.5 xll:h-14.5 xll:w-14.5 3xl:h-[87px] 3xl:w-[87px]"
          />
          <h2 className="text-38 l-130 text-gray-10 font-bold font-raleway xll:text-5xl 3xl:text-[68px]">
            {year}
          </h2>
        </div>
        <div
          ref={historytextboxref}
          className="text-center space-y-3 max-w-[550px] ll:max-w-[650px] ll:text-left xll:space-y-4 xll:max-w-[711px] 3xl:space-y-5 3xl:max-w-[800px]"
        >
          <h3 className="text-22 font-bold font-raleway l-130 text-gray-10 xll:text-2xl 3xl:text-28">
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

export default HistoryCird;
