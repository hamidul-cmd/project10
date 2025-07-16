import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import MIssionCird from "../Components/MIssionCird";
import AwardsCird from "../Components/AwardsCird";
import HistoryCird from "../Components/HistoryCird";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCird from "../Components/TeamCird";
import { missionData } from "../data/missionData";
import { awardsData } from "../data/awardsData";
import { HistoryData } from "../data/HistoryData";
import { TeamData } from "../data/TeamData";

gsap.registerPlugin(ScrollTrigger);

function About() {
  // Slider state variables
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(358); // Default card width in pixels
  const [gap, setGap] = useState(16); // Default gap between cards
  const [slidesPerView, setSlidesPerView] = useState(1); // Number of visible slides

  // Drag functionality states
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);
  const leftbuttonref = useRef(null);
  const rightbuttonref = useRef(null);

  // Calculate maxSlide based on awardsData length and slidesPerView
  const maxSlide = awardsData.length - slidesPerView;

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

  // Slider navigation functions
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
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftbuttonref.current, {
        x: -100,
        opacity: 0,
        scale: 0.7,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: leftbuttonref.current,
          start: "top 97%",
          end: "bottom 97%",
        },
      });
      gsap.from(rightbuttonref.current, {
        x: 100,
        opacity: 0,
        scale: 0.7,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: rightbuttonref.current,
          start: "top 97%",
          end: "bottom 97%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CommonHero
        capsule="Overview"
        tittle="Welcome to Little Learners Academy"
        pera="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      {/* mession section code start */}
      <section id="mission" className="section">
        <Commontittle
          capsule="Mission & Visions"
          tittle="Our Mission & Visions"
          pera="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
        <div className="grid grid-cols-1 gap-7.5 ll:grid-cols-2 xll:gap-10 pb-1 3xl:gap-14.5">
          {missionData.map((data, index) => {
            return (
              <MIssionCird
                key={index}
                tittle={data.tittle}
                pera={data.pera}
                img={data.img}
                imgLaptop={data.imgLaptop}
                imgPhone={data.imgPhone}
              />
            );
          })}
        </div>
      </section>
      {/* mession section code over */}
      {/* awards section code start */}
      <section id="awards" className="section">
        <Commontittle
          capsule="Our Achievements"
          tittle="Our Awards and Recognitions"
          pera="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
        <div className="relative">
          <div
            className="slider relative overflow-hidden mb-10 h-[375px] ll:h-[400px] 3xl:h-[360px] w-full max-w-[358px] ll:max-w-[660px] xll:max-w-[1110px] 3xl:max-w-[1242px] mx-auto cursor-grab xll:mb-0"
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
              {awardsData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="p-7.5 bg-white rounded-10 border-2 border-gray-15 shadow-black space-y-5 w-[358px] min-w-[358px] flex-shrink-0 ll:w-[320px] ll:min-w-[320px] xll:w-[358px] xll:min-w-[358px] 3xl:w-[400px] 3xl:min-w-[400px] h-full"
                  >
                    <AwardsCird
                      icon={data.icon}
                      tittle={data.tittle}
                      pera={data.pera}
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
              className="left p-3 rounded-lg bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer xll:absolute xll:top-[50%] xll:translate-y-[-50%] xll:left-0"
              aria-label="Previous award"
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
              className="right p-3 rounded-lg bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer xll:absolute xll:top-[50%] xll:translate-y-[-50%] xll:right-0"
              aria-label="Next award"
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
      {/* awards section code over */}
      {/* history section code start */}
      <section className="section">
        <Commontittle
          capsule="Our Progressive Journey"
          tittle="Our History"
          pera="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />
        <div className="grid grid-cols-1 gap-12.5 py-12.5 px-2.5 rounded-xl bg-white border-2 border-gray-15 shadow-black xll:py-24.5 xll:gap-20 3xl:gap-24.5">
          {HistoryData.map((data, index) => {
            return (
              <HistoryCird
                key={index}
                year={data.year}
                tittle={data.tittle}
                pera={data.pera}
              />
            );
          })}
        </div>
      </section>
      {/* history section code over */}
      {/* team section code start */}
      <section className="section">
        <Commontittle
          capsule="Our Teachers With Experties"
          tittle="Our Team Members"
          pera="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
        <div className="grid grid-cols-1 gap-10 ll:grid-cols-2 3xl:gap-12.5 pb-1">
          {TeamData.map((data, index) => {
            return (
              <TeamCird
                key={index}
                name={data.name}
                img={data.img}
                tittle={data.tittle}
                pera={data.pera}
              />
            );
          })}
        </div>
      </section>
      {/* team section code over */}
    </>
  );
}

export default About;
