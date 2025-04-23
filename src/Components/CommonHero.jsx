import React, { useLayoutEffect, useRef } from "react";
import heroabs from "../assets/heroabs.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CommonHero({ capsule, tittle, pera, contactInfo }) {
  const heroleftref = useRef(null);
  const herorightref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1440) {
        gsap.from(heroleftref.current, {
          x: -200,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
        });
        gsap.from(herorightref.current, {
          x: 200,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
        });
      } else {
        gsap.from(heroleftref.current, {
          y: 100,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
        });
        gsap.from(herorightref.current, {
          y: 100,
          opacity: 0,
          scale: 0.7,
          duration: 1.5,
          ease: "power4.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="px-4 mb-20 xll:px-20 xll:mb-36.5 3xl:mb-[200px] 3xl:px-12.5">
        <div className="hero__wrapper bg-white rounded-10 border-2 border-gray-15 shadow-black-big px-7.5 py-12.5 relative xll:px-20 xll:py-24.5 3xl:py-36.5 3xl:px-[120px] 3xl:rounded-xl font-outfit flex flex-wrap justify-between gap-5">
          <div
            ref={heroleftref}
            className="space-y-2.5 w-fit m-auto xll:max-w-[535px] 3xl:max-w-[765px]"
          >
            <div className="pera l-150 font-medium text-gray-20 py-1.5 px-3.5 border-2 border-gray-15 rounded-md w-fit m-auto ll:m-0 relative z-20 3xl:py-2 3xl:px-4.8 3xl:rounded-lg">
              <span>{capsule}</span>
            </div>
            <h1 className="text-28 font-bold l-130 font-raleway text-gray-10 text-center ll:mt-2.5 xll:text-38 xll:text-left 3xl:text-5xl 3xl:mt-3.5">
              {tittle}
            </h1>
          </div>
          <div ref={herorightref} className="flex flex-col justify-center">
            <p className="max-w-[535px] text-center text-base l-150 text-gray-20 font-medium m-auto xll:text-left 3xl:max-w-[765px] 3xl:text-xl">
              {pera}
            </p>
            {contactInfo && (
              <div className="grid grid-cols-1 gap-5 mt-7.5 ll:grid-cols-2 3xl:gap-6 3xl:mt-12.5">
                {contactInfo.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="p-3.5 bg-orange-99 rounded-10 border-2 border-gray-15 flex items-center gap-2 3xl:p-4.8 3xl:rounded-xl 3xl:gap-2.5"
                    >
                      <div className="p-1 rounded bg-orange-97 border-2 border-gray-15 3xl:p-1.5">
                        {data.icon}
                      </div>
                      <p className="text-base font-medium l-150 font-outfit text-gray-15 3xl:text-xl">
                        {data.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="absolute top-0 left-0 z-10">
            <img
              src={heroabs}
              alt="heroabs"
              className="h-24.5 w-24.5 xll:h-[137px] xll:w-[137px] 3xl:h-[200px] 3xl:w-[200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CommonHero;
