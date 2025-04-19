import React, { useLayoutEffect, useRef } from "react";
import footerlogomini from "../assets/footerlogomini.png";
import footerlogolarge from "../assets/footerlogolarge.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const contactdata = [
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 7.22425V14.375C1.25 15.7557 2.36929 16.875 3.75 16.875H16.25C17.6307 16.875 18.75 15.7557 18.75 14.375V7.22425L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L1.25 7.22425Z"
            fill="#262626"
          />
          <path
            d="M18.75 5.75652V5.625C18.75 4.24429 17.6307 3.125 16.25 3.125H3.75C2.36929 3.125 1.25 4.24429 1.25 5.625V5.75652L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L18.75 5.75652Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "marufhamidulislam8@gmail.com",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "+880 1991302956",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "Somewhere in the World",
    },
  ];
  const leftfooterlinks = [
    {
      name: "Home",
      link: [
        {
          name: "Features",
          link: "#features",
        },
        {
          name: "Our Testimonials",
          link: "#testimonials",
        },
        {
          name: "FAQ",
          link: "#faq",
        },
      ],
    },
    {
      name: "About Us",
      link: [
        {
          name: "Our Mission",
          link: "#mission",
        },
        {
          name: "Our Vission",
          link: "#mission",
        },
        {
          name: "Awards and Recognitions",
          link: "#awards",
        },
        {
          name: "History",
          link: "#history",
        },
        {
          name: "Teachers",
          link: "#teachers",
        },
      ],
    },
  ];
  const rightfooterlinks = [
    {
      name: "Academics",
      link: [
        {
          name: "Special Features",
          link: "#social",
        },
        {
          name: "Gallery",
          link: "#gallery",
        },
      ],
    },
    {
      name: "Contact Us",
      link: [
        {
          name: "Information",
          link: "#information",
        },
        {
          name: "Map & Direction",
          link: "#map",
        },
      ],
    },
  ];
  const terms = [
    {
      name: "Terms of Service",
      link: "#",
    },
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Cookie Policy",
      link: "#",
    },
  ];
  const footersociallinks = [
    {
      icon: (
        <svg
          className="h5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_170_39259)">
            <path
              d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_170_39259">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.facebook.com/hamidulislam.maruf.5",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_170_39262)">
            <path
              d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_170_39262">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://x.com/mdmaruf17204871",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_170_39265)">
            <path
              d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_170_39265">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
  ];
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
            start: "top 95%",
            end: "bottom 97%",
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
            start: "top 95%",
            end: "bottom 97%",
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
            start: "top 95%",
            end: "bottom 97%",
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
            start: "top 97%",
            end: "bottom 95%",
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
                      srcSet={footerlogolarge}
                      media="(min-width: 1920px)"
                    />
                    <img src={footerlogomini} alt="logo" className="block" />
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
