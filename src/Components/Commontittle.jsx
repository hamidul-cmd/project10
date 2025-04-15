import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

function Commontittle({ capsule, tittle, pera }) {
  // Create refs for the elements we want to animate
  const containerRef = useRef(null);
  const capsuleRef = useRef(null);
  const titleRef = useRef(null);
  const peraRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "bottom 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from([capsuleRef.current, titleRef.current, peraRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
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
        ref={containerRef}
        className="space-y-2.5 max-w-[880px] m-auto xll:space-y-3.5 3xl:space-y-5 3xl:max-w-[992px] mb-12.5 xll:mb-20 3xl:mb-24.5"
      >
        <div
          ref={capsuleRef}
          className="py-2 px-3.5 rounded-md bg-white border-2 border-gray-15 w-fit m-auto mb-2.5 xll:mb-3.5 3xl:py-2.5 3xl:px-5 3xl:rounded-lg 3xl:mb-5"
        >
          <span className="pera text-gray-20 font-outfit">{capsule}</span>
        </div>
        <h2
          ref={titleRef}
          className="text-center text-38 l-130 font-raleway text-gray-10 font-bold xll:text-5xl 3xl:text-58"
        >
          {tittle}
        </h2>
        <p
          ref={peraRef}
          className="text-center text-base l-150 text-gray-20 font-outfit 3xl:text-xl font-medium"
        >
          {pera}
        </p>
      </div>
    </>
  );
}

export default Commontittle;
