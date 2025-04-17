import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BanefitsCird({ tittle, pera, icon }) {
  const banefitscirdref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(banefitscirdref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.7,
        ease: "power4.out",
        scrollTrigger: {
          trigger: banefitscirdref.current,
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
        ref={banefitscirdref}
        className="pl-7.5 pr-[35px] pt-12.5 pb-7.5 rounded-10 bg-white border-2 border-gray-15 shadow-black relative xll:p-10 xll:pt-14.5 3xl:px-12.5 3xl:pt-20 3xl:rounded-xl"
      >
        <div className="absolute top-0 left-6 translate-y-[-50%] p-4 rounded-lg bg-orange-90 border-2 border-gray-15">
          {icon}
        </div>
        <div className="space-y-4 3xl:space-y-5">
          <h3 className="text-22 font-bold l-130 text-gray-10 font-raleway xll:text-2xl 3xl:text-28">
            {tittle}
          </h3>
          <p className="text-base font-medium l-150 text-gray-30 font-outfit 3xl:text-xl">
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default BanefitsCird;
