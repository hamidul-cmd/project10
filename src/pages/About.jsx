import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import mission from "../assets/mission.png";
import missionlaptop from "../assets/missionlaptop.png";
import missionphone from "../assets/missionphone.png";
import vision from "../assets/vision.png";
import visionlaptop from "../assets/visionlaptop.png";
import visionphone from "../assets/visionphone.png";
import MIssionCird from "../Components/MIssionCird";
import AwardsCird from "../Components/AwardsCird";

function About() {
  // Define all data first before any logic
  const missionData = [
    {
      tittle: "Mission",
      pera: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
      img: mission,
      imgLaptop: missionlaptop,
      imgPhone: missionphone,
    },
    {
      tittle: "Vision",
      pera: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
      img: vision,
      imgLaptop: visionlaptop,
      imgPhone: visionphone,
    },
  ];

  const awardsData = [
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Outstanding Early Childhood Education Award",
      pera: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.042 2.25C18.0065 2.25 17.167 3.08947 17.167 4.125V19.875C17.167 20.9105 18.0065 21.75 19.042 21.75H19.792C20.8275 21.75 21.667 20.9105 21.667 19.875V4.125C21.667 3.08947 20.8275 2.25 19.792 2.25H19.042Z"
            fill="#262626"
          />
          <path
            d="M10.417 8.625C10.417 7.58947 11.2565 6.75 12.292 6.75H13.042C14.0775 6.75 14.917 7.58947 14.917 8.625V19.875C14.917 20.9105 14.0775 21.75 13.042 21.75H12.292C11.2565 21.75 10.417 20.9105 10.417 19.875V8.625Z"
            fill="#262626"
          />
          <path
            d="M3.66699 13.125C3.66699 12.0895 4.50646 11.25 5.54199 11.25H6.29199C7.32753 11.25 8.16699 12.0895 8.16699 13.125V19.875C8.16699 20.9105 7.32753 21.75 6.29199 21.75H5.54199C4.50646 21.75 3.66699 20.9105 3.66699 19.875V13.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Innovative STEAM Education Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9482 1.59495C15.2495 1.76289 15.3973 2.11463 15.3066 2.44736L13.315 9.75003H20.583C20.8817 9.75003 21.1519 9.92721 21.2709 10.2011C21.3899 10.475 21.3351 10.7934 21.1313 11.0118L10.6313 22.2618C10.396 22.5139 10.0191 22.573 9.71781 22.4051C9.41658 22.2372 9.2687 21.8854 9.35945 21.5527L11.3511 14.25H4.08302C3.78438 14.25 3.51419 14.0728 3.39516 13.7989C3.27614 13.525 3.33096 13.2066 3.53473 12.9883L14.0347 1.73829C14.2701 1.48615 14.647 1.42701 14.9482 1.59495Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Environmental Stewardship Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Outstanding Early Childhood Education Award",
      pera: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.042 2.25C18.0065 2.25 17.167 3.08947 17.167 4.125V19.875C17.167 20.9105 18.0065 21.75 19.042 21.75H19.792C20.8275 21.75 21.667 20.9105 21.667 19.875V4.125C21.667 3.08947 20.8275 2.25 19.792 2.25H19.042Z"
            fill="#262626"
          />
          <path
            d="M10.417 8.625C10.417 7.58947 11.2565 6.75 12.292 6.75H13.042C14.0775 6.75 14.917 7.58947 14.917 8.625V19.875C14.917 20.9105 14.0775 21.75 13.042 21.75H12.292C11.2565 21.75 10.417 20.9105 10.417 19.875V8.625Z"
            fill="#262626"
          />
          <path
            d="M3.66699 13.125C3.66699 12.0895 4.50646 11.25 5.54199 11.25H6.29199C7.32753 11.25 8.16699 12.0895 8.16699 13.125V19.875C8.16699 20.9105 7.32753 21.75 6.29199 21.75H5.54199C4.50646 21.75 3.66699 20.9105 3.66699 19.875V13.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Innovative STEAM Education Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9482 1.59495C15.2495 1.76289 15.3973 2.11463 15.3066 2.44736L13.315 9.75003H20.583C20.8817 9.75003 21.1519 9.92721 21.2709 10.2011C21.3899 10.475 21.3351 10.7934 21.1313 11.0118L10.6313 22.2618C10.396 22.5139 10.0191 22.573 9.71781 22.4051C9.41658 22.2372 9.2687 21.8854 9.35945 21.5527L11.3511 14.25H4.08302C3.78438 14.25 3.51419 14.0728 3.39516 13.7989C3.27614 13.525 3.33096 13.2066 3.53473 12.9883L14.0347 1.73829C14.2701 1.48615 14.647 1.42701 14.9482 1.59495Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Environmental Stewardship Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Outstanding Early Childhood Education Award",
      pera: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.042 2.25C18.0065 2.25 17.167 3.08947 17.167 4.125V19.875C17.167 20.9105 18.0065 21.75 19.042 21.75H19.792C20.8275 21.75 21.667 20.9105 21.667 19.875V4.125C21.667 3.08947 20.8275 2.25 19.792 2.25H19.042Z"
            fill="#262626"
          />
          <path
            d="M10.417 8.625C10.417 7.58947 11.2565 6.75 12.292 6.75H13.042C14.0775 6.75 14.917 7.58947 14.917 8.625V19.875C14.917 20.9105 14.0775 21.75 13.042 21.75H12.292C11.2565 21.75 10.417 20.9105 10.417 19.875V8.625Z"
            fill="#262626"
          />
          <path
            d="M3.66699 13.125C3.66699 12.0895 4.50646 11.25 5.54199 11.25H6.29199C7.32753 11.25 8.16699 12.0895 8.16699 13.125V19.875C8.16699 20.9105 7.32753 21.75 6.29199 21.75H5.54199C4.50646 21.75 3.66699 20.9105 3.66699 19.875V13.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Innovative STEAM Education Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9482 1.59495C15.2495 1.76289 15.3973 2.11463 15.3066 2.44736L13.315 9.75003H20.583C20.8817 9.75003 21.1519 9.92721 21.2709 10.2011C21.3899 10.475 21.3351 10.7934 21.1313 11.0118L10.6313 22.2618C10.396 22.5139 10.0191 22.573 9.71781 22.4051C9.41658 22.2372 9.2687 21.8854 9.35945 21.5527L11.3511 14.25H4.08302C3.78438 14.25 3.51419 14.0728 3.39516 13.7989C3.27614 13.525 3.33096 13.2066 3.53473 12.9883L14.0347 1.73829C14.2701 1.48615 14.647 1.42701 14.9482 1.59495Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Environmental Stewardship Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Outstanding Early Childhood Education Award",
      pera: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.042 2.25C18.0065 2.25 17.167 3.08947 17.167 4.125V19.875C17.167 20.9105 18.0065 21.75 19.042 21.75H19.792C20.8275 21.75 21.667 20.9105 21.667 19.875V4.125C21.667 3.08947 20.8275 2.25 19.792 2.25H19.042Z"
            fill="#262626"
          />
          <path
            d="M10.417 8.625C10.417 7.58947 11.2565 6.75 12.292 6.75H13.042C14.0775 6.75 14.917 7.58947 14.917 8.625V19.875C14.917 20.9105 14.0775 21.75 13.042 21.75H12.292C11.2565 21.75 10.417 20.9105 10.417 19.875V8.625Z"
            fill="#262626"
          />
          <path
            d="M3.66699 13.125C3.66699 12.0895 4.50646 11.25 5.54199 11.25H6.29199C7.32753 11.25 8.16699 12.0895 8.16699 13.125V19.875C8.16699 20.9105 7.32753 21.75 6.29199 21.75H5.54199C4.50646 21.75 3.66699 20.9105 3.66699 19.875V13.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Innovative STEAM Education Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9482 1.59495C15.2495 1.76289 15.3973 2.11463 15.3066 2.44736L13.315 9.75003H20.583C20.8817 9.75003 21.1519 9.92721 21.2709 10.2011C21.3899 10.475 21.3351 10.7934 21.1313 11.0118L10.6313 22.2618C10.396 22.5139 10.0191 22.573 9.71781 22.4051C9.41658 22.2372 9.2687 21.8854 9.35945 21.5527L11.3511 14.25H4.08302C3.78438 14.25 3.51419 14.0728 3.39516 13.7989C3.27614 13.525 3.33096 13.2066 3.53473 12.9883L14.0347 1.73829C14.2701 1.48615 14.647 1.42701 14.9482 1.59495Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Environmental Stewardship Award",
      pera: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
  ];

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

  return (
    <>
      <CommonHero
        capsule="Overview"
        tittle="Welcome to Little Learners Academy"
        pera="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      {/* mession section code start */}
      <section className="section">
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
      </section>
      {/* history section code over */}
    </>
  );
}

export default About;
