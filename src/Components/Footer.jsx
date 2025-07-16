import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { contactdata } from "../data/contactdata";
import { leftfooterlinks } from "../data/leftfooterlinks";
import { rightfooterlinks } from "../data/rightfooterlinks";
import { terms } from "../data/terms";
import { footersociallinks } from "../data/footersociallinks";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const footerwrapper = useRef(null);
  const logobox = useRef(null);
  const logoimg = useRef(null);
  const logotext = useRef(null);
  const sociallinks = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        footerwrapper.current,
        {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerwrapper.current,
            start: "top 95%",
            end: "bottom 95%",
            stagger: 0.2,
          },
        },
        "same"
      );
      gsap.from(
        logobox.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
          scrollTrigger: {
            trigger: logobox.current,
            start: "top 110%",
            end: "bottom 100%",
            toggleActions: "play none none none",
            stagger: 0.2,
          },
        },
        "same"
      );
      gsap.from(
        logoimg.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: logoimg.current,
            start: "top 110%",
            end: "bottom 100%",
            stagger: 0.2,
          },
        },
        "same"
      );
      gsap.from(
        logotext.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: logotext.current,
            start: "top 110%",
            end: "bottom 100%",
            stagger: 0.2,
          },
        },
        "same"
      );
      gsap.from(
        sociallinks.current,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sociallinks.current,
            start: "top 110%",
            end: "bottom 100%",
            stagger: 0.2,
          },
        },
        "same"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <footer className="px-4 pb-5 ll:px-10 ll:pb-7.5 xll:px-12.5 xll:pb-10 3xl:pb-12.5 overflow-hidden max-w-wrapper m-auto">
        <div
          ref={footerwrapper}
          className="p-7.5 pt-14.5 rounded-xl bg-white border-2 border-gray-15 shadow-black-big space-y-7.5 xll:p-20 xll:pb-10 3xl:px-[113px] 3xl:pt-24.5"
        >
          <div className="space-y-10 xll:flex xll:justify-between xll:space-y-0">
            <div className="space-y-10 3xl:space-y-12.5">
              <div
                ref={logobox}
                className="flex flex-col items-center gap-4 text-center max-w-[393px] xll:items-start 3xl:gap-5"
              >
                <Link onClick={gotop} to="/">
                  <picture ref={logoimg}>
                    <source
                      srcSet="https://i.imgur.com/s2VQ4nQ.png"
                      media="(min-width: 1920px)"
                    />
                    <img
                      src="https://i.imgur.com/IYCLkmT.png"
                      alt="logo"
                      className="block"
                    />
                  </picture>
                </Link>
                <p
                  ref={logotext}
                  className="text-base font-medium l-150 text-gray-30 font-outfit xll:text-left 3xl:text-xl"
                >
                  We believe in the power of play to foster creativity,
                  problem-solving skills, and imagination.
                </p>
              </div>
              <div className="space-y-5 3xl:space-y-6">
                {contactdata.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 3xl:gap-2.5"
                    >
                      <div className="p-1.5 bg-orange-97 rounded border-2 border-gray-15 3xl:p-2 3xl:rounded-md">
                        {data.icon}
                      </div>
                      <p className="text-base font-medium l-150 text-gray-15 font-outfit 3xl:text-xl">
                        {data.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              ref={sociallinks}
              className="flex justify-between xll:gap-5 3xl:gap-7.5"
            >
              <div className="flex flex-wrap gap-12.5 items-start xll:gap-5 xll:h-fit 3xl:gap-7.5">
                {leftfooterlinks.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-5 font-outfit h-fit xll:w-[161px] xll:h-fit 3xl:w-[226px]"
                    >
                      <h3 className="text-base font-semibold l-150 text-gray-15 3xl:text-xl">
                        {data.name}
                      </h3>
                      <ul className="space-y-3.5">
                        {data.link.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="text-base font-medium l-150 text-gray-20 3xl:text-xl"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-12.5 items-start xll:gap-5 xll:h-fit 3xl:gap-7.5">
                {rightfooterlinks.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-5 font-outfit h-fit xll:w-[161px] xll:h-fit 3xl:w-[226px]"
                    >
                      <h3 className="text-base font-semibold l-150 text-gray-15 3xl:text-xl">
                        {data.name}
                      </h3>
                      <ul className="space-y-3.5">
                        {data.link.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="text-base font-medium l-150 text-gray-20 3xl:text-xl"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-7.5 mb-4 py-4 border-y border-gray-15 space-y-5 ll:flex justify-between items-center ll:space-y-0 xll:py-5 xll:mt-10 xll:mb-5 3xl:py-7.5 3xl:mt-12.5 3xl:mb-7.5">
            <div className="flex items-center gap-3 xll:gap-5 3xl:gap-8">
              {terms.map((data, index) => {
                // Only add the before pseudo-element if it's not the last item
                const isLastItem = index === terms.length - 1;
                return (
                  <a
                    key={index}
                    href={data.link}
                    className={`pera text-gray-20 font-medium l-150 font-outfit whitespace-nowrap relative ${
                      !isLastItem
                        ? "before:content-[''] before:absolute before:top-0 before:right-[-6px] before:h-full before:w-[1px] before:bg-gray-15 xll:before:right-[-10px] 3xl:before:right-[-16px] xll:before:w-0.5"
                        : ""
                    }`}
                  >
                    {data.name}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-2.5 justify-center xll:gap-3.5">
              {footersociallinks.map((data, index) => {
                return (
                  <a
                    target="_blank"
                    key={index}
                    href={data.link}
                    className="p-3 rounded-md bg-orange-90 border-2 border-gray-15 xll:p-3.5 3xl:p-4 3xl:rounded-lg hover:bg-white transition-all duration-200 ease-in"
                  >
                    {data.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <p className="text-center pera font-medium l-150 text-gray-40">
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
