import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ExploreCird({ tittle, pera, path }) {
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const explorref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(explorref.current, {
        y: 200,
        opacity: 0,
        scale: 0.7,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: explorref.current,
          start: "top 95%",
          end: "bottom 95%",
          toggleActions: "play none none none",
          stagger: 0.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={explorref} className="p-10 rounded-10 bg-white border-2 border-gray-15 space-y-10 text-center shadow-black xll:p-14.5 xll:space-y-14.5 3xl:p-20 3xl:rounded-xl 3xl:space-y-20">
        <div className="space-y-7.5 xll:space-y-10 3xl:space-y-12.5">
          <div className="space-y-5 xll:space-y-6 3xl:space-y-7.5">
            <h3 className="text-28 font-bold l-130 font-raleway text-gray-10 xll:text-34 3xl:text-5xl">
              {tittle}
            </h3>
            <div className="flex gap-2.5 relative">
              <div className="absolute top-[-50%] left-0 w-5 h-5 bg-white border-2 border-gray-15 rounded-full translate-x-[-50%]"></div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="grow h-3 bg-orange-80 flex justify-center items-center">
                <span className="block h-0.5 w-[80%] bg-black"></span>
              </div>
              <div className="absolute top-[-50%] right-0 w-5 h-5 bg-white border-2 border-gray-15 rounded-full translate-x-[50%]"></div>
            </div>
          </div>
          <p className="text-base l-150 font-medium text-gray-30 font-outfit 3xl:text-xl">
            {pera}
          </p>
        </div>
        <Link
          to={path}
          onClick={gotop}
          className="flex items-center justify-center gap-2.5 text-base font-medium l-150 text-gray-20 font-outfit py-4 rounded-md bg-orange-90 border-2 border-gray-15 shadow-black-mini xll:text-lg xll:py-4.8 xll:rounded-lg 3xl:text-xl 3xl:shadow-black"
        >
          <span>Learn More </span>
          <svg
            className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z"
              fill="#262626"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default ExploreCird;
