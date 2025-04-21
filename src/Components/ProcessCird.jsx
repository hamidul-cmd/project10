import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProcessCird({ tittle, pera, cirdnumber }) {
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
      <div ref={cirdref} className="flex flex-col items-center 3xl:items-start">
        <div className="flex flex-col items-center">
          <div className="py-2.5 px-6 bg-white rounded-10 border-2 border-gray-15 shadow-black font-raleway font-extrabold text-40 l-130 relative z-20 3xl:px-7.5 3xl:py-3.5 3xl:rounded-xl xll:text-60">
            <span>0</span>
            <span>{cirdnumber}</span>
          </div>
          <div className="w-3 h-[43px] bg-orange-80 flex justify-center relative z-10 3xl:h-[69px]">
            <span className="block h-full w-0.5 bg-gray-10"></span>
          </div>
        </div>
        <div className="p-6.7 space-y-3.5 bg-white rounded-10 border-2 border-gray-15 shadow-black xll:p-10 xll:space-y-4 h-full 3xl:p-12.5 3xl:space-y-5 3xl:rounded-xl">
          <h3 className="text-26 font-bold font-raleway text-gray-10 l-130 xll:text-3xl 3xl:text-40">
            {tittle}
          </h3>
          <p className="text-base font-medium text-gray-30 l-150 font-outfit 3xl:text-xl">
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProcessCird;
