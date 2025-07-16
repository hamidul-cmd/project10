import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import CustomScrollTrigger from "../Components/CustomScrollTrigger";
import Commontittle from "../Components/Commontittle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BanefitsCird from "../Components/BanefitsCird";
import TestimonialsCird from "../Components/TestimonialsCird";
import Faqbox from "../Components/Faqbox";
import ExploreCird from "../Components/ExploreCird";
import { testimonialsCirsdData } from "../data/testimonialsCirsdData";
import { faqData } from "../data/faqData";
import { exploreData } from "../data/exploreData";
import { BanefitscirdData } from "../data/BanefitscirdData";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [counterstart, setcounterstart] = useState(false);
  const herotextref = useRef(null);
  const heroimgref = useRef(null);
  const leftbuttonref = useRef(null);
  const rightbuttonref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth < 1050) {
        gsap.from(herotextref.current, {
          y: 100,
          opacity: 0,
          delay: 0.5,
          duration: 1.5,
          ease: "power4.out",
        });
        gsap.from(heroimgref.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      } else {
        gsap.from(herotextref.current, {
          x: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
        gsap.from(heroimgref.current, {
          x: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
        gsap.from(leftbuttonref.current, {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: leftbuttonref.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(rightbuttonref.current, {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: rightbuttonref.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  const countbox = [
    {
      number: "7000",
      title: "Students Passed Out",
    },
    {
      number: "37",
      title: "Awards & Recognitions",
    },
    {
      number: "15",
      title: "Experience Educators",
    },
  ];

  const [current, setCurrent] = useState(0);
  // Track the card width for translations
  const [cardWidth, setCardWidth] = useState(358); // Default card width in pixels
  const [gap, setGap] = useState(16); // Default gap between cards (equivalent to gap-4 in Tailwind)
  const [slidesPerView, setSlidesPerView] = useState(1); // Keep this for calculating visible slides

  // Drag functionality states
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  // Update currentTranslate when current slide changes
  useEffect(() => {
    setCurrentTranslate(-current * (cardWidth + gap));
    setPrevTranslate(-current * (cardWidth + gap));
  }, [current, cardWidth, gap]);

  // Update card width based on window width
  useLayoutEffect(() => {
    const updateCardDimensions = () => {
      if (window.innerWidth >= 1920) {
        // 3xl breakpoint
        setCardWidth(400);
        setSlidesPerView(3);
      } else if (window.innerWidth >= 1440) {
        // xll breakpoint
        setCardWidth(358);
        setSlidesPerView(3);
      } else if (window.innerWidth >= 800) {
        // ll breakpoint
        setCardWidth(320);
        setSlidesPerView(2);
      } else {
        setCardWidth(358);
        setSlidesPerView(1);
      }
    };

    // Initial call
    updateCardDimensions();

    // Add resize listener
    window.addEventListener("resize", updateCardDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardDimensions);
  }, []);

  const maxSlide = testimonialsCirsdData.length - slidesPerView;

  const previse = () => {
    if (current === 0) setCurrent(maxSlide);
    else setCurrent(current - 1);
  };

  const next = () => {
    if (current === maxSlide) setCurrent(0);
    else setCurrent(current + 1);
  };

  // Drag functionality
  const dragStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
    setPrevTranslate(currentTranslate);
  };

  const drag = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      const currentDragOffset = currentPosition - startPos;
      setDragOffset(currentDragOffset);
      setCurrentTranslate(prevTranslate + currentDragOffset);
    }
  };

  const dragEnd = () => {
    setIsDragging(false);
    const threshold = cardWidth / 3; // Threshold to determine if we should move to next/prev slide

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        previse(); // Dragged right, go to previous slide
      } else {
        next(); // Dragged left, go to next slide
      }
    }

    setDragOffset(0);
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  // Calculate the transform value based on current slide and drag offset
  const getSliderTransform = () => {
    const baseTransform = -current * (cardWidth + gap);
    return isDragging
      ? `translateX(${baseTransform + dragOffset}px)`
      : `translateX(${baseTransform}px)`;
  };

  // State to track which FAQ is currently open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <>
      {/* hero section code start */}
      <section className="px-4 mb-20 flex justify-center flex-wrap gap-10 ll:items-center xll:gap-12.5 3xl:gap-14.5 xll:mb-36.5 3xl:mb-[200px]">
        <div ref={heroimgref}>
          <picture>
            <source
              srcSet="https://i.imgur.com/PikjpIN.png"
              media="(min-width: 1920px)"
            />
            <source
              srcSet="https://i.imgur.com/zkkL1HJ.png"
              media="(min-width: 1200px)"
            />
            <img
              src="https://i.imgur.com/kvkjjSW.png"
              alt="logo"
              className="w-[358px] h-[410px] xll:w-[615px] xll:h-[663px] 3xl:w-[765px] 3xl:h-[785px] block"
            />
          </picture>
        </div>
        <div
          ref={herotextref}
          className="max-w-[615px] text-center xll:text-left 3xl:max-w-[782px]"
        >
          <div className="mb-10 xll:mb-12.5 3xl:mb-14.5">
            <h5 className="pb-1 l-150 text-base font-medium text-gray-15 font-outfit border-b-2 border-gray-15 w-fit m-auto mb-2.5 xll:text-lg xll:pb-1.5 xll:m-0 3xl:text-22">
              Welcome to Little Learners Academy
            </h5>
            <h1 className="l-130 text-3xl font-extrabold text-gray-10 mb-4.8 xll:text-40 xll:mb-5 3xl:text-54 3xl:mb-7.5">
              Where Young Minds Blossom and{" "}
              <span className="text-orange-65">Dreams Take Flight.</span>
            </h1>
            <p className="l-150 text-base text-gray-20 font-medium font-outfit 3xl:text-xl">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
          </div>
          <CustomScrollTrigger
            onEnter={() => setcounterstart(true)}
            onExit={() => setcounterstart(false)}
          >
            <div className="p-10 rounded-10 bg-orange-95 border-2 border-gray-15 flex flex-col gap-10 font-outfit shadow-orange ll:flex-row ll:gap-2.5 ll:py-5 ll:justify-between 3xl:px-12.5 3xl:py-6 3xl:rounded-xl">
              {countbox.map((item, index) => (
                <div key={index}>
                  <div className="ll:text-left">
                    {counterstart && (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={3}
                        delay={0}
                        className="text-34 font-extrabold text-gray-15 l-150 3xl:text-44"
                      />
                    )}
                    <span className="text-34 font-extrabold text-gray-15 l-150">
                      +
                    </span>
                  </div>
                  <p className="text-base font-medium l-150 text-gray-15 ll:text-left 3xl:text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </CustomScrollTrigger>
        </div>
      </section>
      {/* hero section code over */}

      {/* benefites section code start */}
      <section className="section h-fit">
        <Commontittle
          capsule="Children Deserve Bright Future"
          tittle="Our Benefits"
          pera="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-[68px] xll:gap-x-10 xll:gap-y-[68px] 3xl:gap-y-[85px] pb-1">
          {BanefitscirdData.map((data, index) => {
            return (
              <BanefitsCird
                key={index}
                tittle={data.title}
                pera={data.pera}
                icon={data.icon}
              />
            );
          })}
        </div>
      </section>
      {/* benefites section code over */}

      {/* testimonials section code start */}
      <section id="testimonials" className="section">
        <Commontittle
          capsule="Their Happy Words 🤗"
          tittle="Our Testimonials"
          pera="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        />
        <div className="relative">
          <div
            className="slider relative overflow-hidden mb-10 h-[325px] ll:h-[350px] 3xl:h-[360px] w-full max-w-[358px] ll:max-w-[660px] xll:max-w-[1110px] 3xl:max-w-[1242px] mx-auto cursor-grab xll:mb-0"
            ref={sliderRef}
          >
            <div
              className={`slide flex transition-transform duration-500 ease-in-out z-10 ${
                isDragging ? "cursor-grabbing" : ""
              }`}
              style={{
                transform: getSliderTransform(),
                width: "auto",
                display: "flex",
                gap: `${gap}px`,
                touchAction: "none", // Prevent browser handling of touch events
              }}
              onMouseDown={dragStart}
              onMouseMove={drag}
              onMouseUp={dragEnd}
              onMouseLeave={dragEnd}
              onTouchStart={dragStart}
              onTouchMove={drag}
              onTouchEnd={dragEnd}
            >
              {testimonialsCirsdData.map((data, index) => {
                return (
                  <div key={index}>
                    <TestimonialsCird
                      img={data.img}
                      name={data.name}
                      comment={data.comment}
                    />
                  </div>
                );
              })}
            </div>
            <div
              onMouseDown={dragStart}
              onMouseMove={drag}
              onMouseUp={dragEnd}
              onMouseLeave={dragEnd}
              onTouchStart={dragStart}
              onTouchMove={drag}
              onTouchEnd={dragEnd}
              className="absolute top-0 left-0 w-full h-full bg-transparent z-20"
            ></div>
          </div>
          <div className="flex justify-center gap-5 mt-8 xll:mt-0">
            <button
              ref={leftbuttonref}
              onClick={previse}
              className="left p-3 rounded-lg bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer xll:absolute xll:top-[50%] translate-y-[-50%] xll:left-0"
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 12C18 12.4971 17.5971 12.9 17.1 12.9H9.1345L11.7238 15.2512C12.0821 15.5958 12.0933 16.1655 11.7487 16.5238C11.4042 16.8821 10.8345 16.8933 10.4762 16.5487L6.2762 12.6487C6.09973 12.4791 6 12.2448 6 12C6 11.7552 6.09973 11.5209 6.2762 11.3512L10.4762 7.45125C10.8345 7.10673 11.4042 7.11791 11.7487 7.4762C12.0933 7.83449 12.0821 8.40423 11.7238 8.74875L9.1345 11.1L17.1 11.1C17.5971 11.1 18 11.5029 18 12Z"
                  fill="#333333"
                />
              </svg>
            </button>
            <button
              ref={rightbuttonref}
              onClick={next}
              className="right p-3 rounded-lg bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer xll:absolute xll:top-[50%] translate-y-[-50%] xll:right-0"
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 12C6 11.5029 6.40294 11.1 6.9 11.1H14.8655L12.2762 8.74875C11.9179 8.40423 11.9067 7.83449 12.2513 7.4762C12.5958 7.11791 13.1655 7.10673 13.5238 7.45125L17.7238 11.3512C17.9003 11.5209 18 11.7552 18 12C18 12.2448 17.9003 12.4791 17.7238 12.6487L13.5238 16.5487C13.1655 16.8933 12.5958 16.8821 12.2513 16.5238C11.9067 16.1655 11.9179 15.5958 12.2762 15.2512L14.8655 12.9H6.9C6.40294 12.9 6 12.4971 6 12Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* testimonials section code over */}
      {/* faq section code start  */}
      <section id="faq" className="section">
        <Commontittle
          capsule="Solutions For The Doubts"
          tittle="Frequently Asked Questions"
          pera="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        {/* Create two columns of FAQs */}
        <div className="flex flex-col ll:flex-row gap-5 xll:gap-10 3xl:gap-12.5">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-5 xll:gap-6 3xl:gap-7.5">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((data, index) => {
                const actualIndex = index;
                return (
                  <Faqbox
                    key={actualIndex}
                    faq={data.faq}
                    ans={data.ans}
                    isOpen={openFaqIndex === actualIndex}
                    toggleFaq={() => {
                      if (openFaqIndex === actualIndex) {
                        // If clicking on the currently open FAQ, close it
                        setOpenFaqIndex(null);
                      } else {
                        // Otherwise, open the clicked FAQ and close any other
                        setOpenFaqIndex(actualIndex);
                      }
                    }}
                  />
                );
              })}
          </div>
          {/* Right column */}
          <div className="flex-1 flex flex-col gap-5 xll:gap-6 3xl:gap-7.5">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((data, index) => {
              const actualIndex = index + Math.ceil(faqData.length / 2);
              return (
                <Faqbox
                  key={actualIndex}
                  faq={data.faq}
                  ans={data.ans}
                  isOpen={openFaqIndex === actualIndex}
                  toggleFaq={() => {
                    if (openFaqIndex === actualIndex) {
                      // If clicking on the currently open FAQ, close it
                      setOpenFaqIndex(null);
                    } else {
                      // Otherwise, open the clicked FAQ and close any other
                      setOpenFaqIndex(actualIndex);
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* faq section code over  */}
      {/* explor section code start */}
      <section className="section">
        <Commontittle
          capsule="Explore More"
          tittle="Navigate through our Pages"
          pera="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <div className="grid grid-cols-1 gap-10 ll:grid-cols-2 3xl:gap-12.5 pb-1">
          {exploreData.map((data, index) => {
            return (
              <ExploreCird
                key={index}
                tittle={data.tittle}
                pera={data.pera}
                path={data.path}
              />
            );
          })}
        </div>
      </section>
      {/* explor section code over */}
    </>
  );
}

export default Home;
