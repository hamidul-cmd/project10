import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MIssionCird({ tittle, pera, img, imgLaptop, imgPhone }) {
  const missionboxref = useRef(null);
  const missiontextref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        if(window.innerWidth >= 800){
          gsap.from(missionboxref.current, {
            y: 200,
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: missionboxref.current,
              start: "top 95%",
              end: "bottom 95%",
            },
          });
        }else{
          gsap.from(missionboxref.current, {
            y: 100,
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: missionboxref.current,
              start: "top 95%",
              end: "bottom 95%",
            },
          });
        }
        gsap.from(missiontextref.current, {
            y: 50,
            opacity: 0,
            duration: 1.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: missiontextref.current,
              start: "top 97%",
              end: "bottom 97%",
            },
          });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={missionboxref} className="p-10 rounded-10 bg-white border-2 border-gray-15 shadow-black space-y-10 xll:p-12.5 xll:space-y-12.5 3xl:p-14.5 3xl:rounded-xl 3xl:space-y-14.5">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl l-130 font-bold text-gray-10 font-raleway xll:text-38 3xl:text-5xl">{tittle}</h3>
          <picture>
            <source srcSet={img} media="(min-width: 1920px)" />
            <source srcSet={imgLaptop} media="(min-width: 1440px)" />
            <img
              src={imgPhone}
              alt="cird logo"
              className="block"
            />
          </picture>
        </div>
        <p ref={missiontextref} className="text-base l-150 font-medium text-gray-20 font-outfit 3xl:text-xl">{pera}</p>
      </div>
    </>
  );
}

export default MIssionCird;
