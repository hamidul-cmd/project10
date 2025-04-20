import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LearnCird({ img, tittle, pera }) {
  const learnCirdref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(learnCirdref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.7,
        ease: "power4.out",
        scrollTrigger: {
          trigger: learnCirdref.current,
          start: "top 95%",
          end: "bottom 95%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={learnCirdref}
        className="space-y-7.5 p-7.5 bg-white rounded-10 border-2 border-gray-15 xll:p-10 3xl:p-12.5 3xl:rounded-xl shadow-black relative xll:space-y-10 3xl:space-y-12.5"
      >
        <img
          src={img}
          alt="cird img"
          className="h-[191px] ll:h-[220px] 3xl:h-[304px] w-full block relative z-20"
        />
        <div className="space-y-2.5 text-center relative z-20 xll:space-y-3.5 3xl:space-y-5 mb-0">
          <h3 className="text-22 font-bold l-130 text-gray-10 font-raleway xll:text-2xl 3xl:text-28">
            {tittle}
          </h3>
          <p className="text-base l-150 font-medium text-gray-30 font-outfit 3xl:text-xl">
            {pera}
          </p>
        </div>
        <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[93px] h-[60%] bg-orange-95 rounded-b-10 border-2 border-t-0 border-gray-15 xll:h-[65%] 3xl:h-[68%] 3xl:w-[125px]"></div>
      </div>
    </>
  );
}

export default LearnCird;
