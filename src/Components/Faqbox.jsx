import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Faqbox({ faq, ans, isOpen, toggleFaq }) {
  const faqref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(faqref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: faqref.current,
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
      <div
        ref={faqref}
        className={`px-6 xll:px-7.5 3xl:px-10 3xl:rounded-xl bg-orange-95 rounded-10 border-2 border-gray-15 transition-all duration-150 ease-linear font-outfit h-fit ${
          isOpen
            ? "bg-white py-7.5 xll:py-[34px] 3xl:py-10"
            : "bg-orange-95 py-5 xll:py-6 3xl:py-[34px]"
        }`}
      >
        <div
          onClick={toggleFaq}
          className={`flex justify-between items-center border-gray-15 transition-all duration-150 ease-in cursor-pointer ${
            isOpen ? "pb-6 border-b-2" : "pb-0 border-0"
          }`}
        >
          <h3 className="text-lg l-150 font-semibold text-gray-15 3xl:text-22">
            {faq}
          </h3>
          <div className="bg-orange-97 border-2 border-gray-15 rounded p-1.5 h-8 flex justify-center items-center relative">
            <span className="block w-3.5 h-0.5 bg-gray-15"></span>
            <span
              className={`block w-3.5 h-0.5 bg-gray-15 absolute transition-all duration-150 ease-in ${
                isOpen ? "rotate-180" : "rotate-90 "
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`overflow-hidden ${isOpen ? "h-fit pt-6" : "h-0 pt-0"}`}
        >
          <p className="text-base l-150 text-gray-20 font-medium 3xl:text-xl">
            {ans}
          </p>
        </div>
      </div>
    </>
  );
}

export default Faqbox;
