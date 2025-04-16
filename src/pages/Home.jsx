import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import childimgphone from "../assets/childimgphone.png";
import childimgdesktop from "../assets/childimgdesktop.png";
import childimglaptop from "../assets/childimglaptop.png";
import CountUp from "react-countup";
import CustomScrollTrigger from "../Components/CustomScrollTrigger";
import Commontittle from "../Components/Commontittle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BanefitsCird from "../Components/BanefitsCird";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import TestimonialsCird from "../Components/TestimonialsCird";
import Faqbox from "../Components/Faqbox";
import ExploreCird from "../Components/ExploreCird";

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
  const BanefitscirdData = [
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6998 2.80529C11.8912 2.72164 12.1089 2.72164 12.3003 2.80529C16.0192 4.43011 19.5437 6.41637 22.8295 8.71956C23.0673 8.88623 23.1875 9.1752 23.1381 9.46135C23.0887 9.7475 22.8785 9.97941 22.5986 10.0567C21.9137 10.2457 21.2347 10.4494 20.5618 10.6663C17.8307 11.5471 15.2018 12.6554 12.6972 13.9688L12.6939 13.9705C12.5803 14.0301 12.467 14.09 12.354 14.1504C12.1331 14.2684 11.8679 14.2684 11.6471 14.1504C11.533 14.0895 11.4186 14.0289 11.3039 13.9688C10.0655 13.3193 8.79658 12.7201 7.5 12.1736V11.95C7.5 11.8186 7.56742 11.702 7.67173 11.6389C9.17685 10.727 10.7294 9.88565 12.3247 9.11936C12.6981 8.94002 12.8554 8.49195 12.6761 8.11858C12.4967 7.7452 12.0486 7.58791 11.6753 7.76725C10.036 8.55463 8.44086 9.41909 6.89449 10.3559C6.44111 10.6306 6.13632 11.0801 6.03607 11.5838C5.18115 11.2549 4.31499 10.9486 3.43829 10.6659C2.76546 10.4489 2.08644 10.2457 1.40154 10.0567C1.12162 9.9794 0.911461 9.74749 0.86204 9.46134C0.812619 9.17519 0.932824 8.88622 1.17061 8.71955C4.45645 6.41636 7.98097 4.43011 11.6998 2.80529Z"
            fill="#262626"
          />
          <path
            d="M13.0609 15.4734C15.4997 14.1703 18.0621 13.0687 20.7258 12.1906C20.8601 13.6054 20.9458 15.0343 20.9813 16.4755C20.9889 16.7847 20.8059 17.0669 20.5205 17.1861C17.6693 18.3764 14.9574 19.834 12.4159 21.5277C12.1641 21.6955 11.836 21.6955 11.5841 21.5277C9.04267 19.834 6.33073 18.3764 3.4796 17.1861C3.19416 17.0669 3.01116 16.7847 3.01878 16.4755C3.05429 15.0342 3.14001 13.6052 3.27427 12.1903C4.19527 12.4938 5.10415 12.8242 6 13.1803V14.4507C5.55165 14.71 5.25 15.1948 5.25 15.75C5.25 16.2453 5.49008 16.6846 5.86022 16.9577C5.7707 17.3383 5.63822 17.7108 5.46277 18.0675C5.91546 18.2811 6.36428 18.5017 6.8091 18.7289C7.06243 18.2137 7.24612 17.6729 7.36014 17.1207C7.88449 16.887 8.25 16.3612 8.25 15.75C8.25 15.1948 7.94835 14.71 7.5 14.4507V13.8059C8.6714 14.3177 9.81885 14.8743 10.9402 15.4734C11.6028 15.8274 12.3983 15.8274 13.0609 15.4734Z"
            fill="#262626"
          />
          <path
            d="M4.46222 19.4623C4.88136 19.0432 5.21502 18.5711 5.46277 18.0675C5.91546 18.2811 6.36428 18.5017 6.8091 18.7289C6.49055 19.3768 6.06164 19.9842 5.52288 20.523C5.22999 20.8158 4.75512 20.8158 4.46222 20.523C4.16933 20.2301 4.16933 19.7552 4.46222 19.4623Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Holistic Learning Approach",
      pera: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
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
            d="M4.57556 16.5964L4.83622 17.5839C5.16637 18.8678 5.88751 19.5262 7.32109 19.5262H16.6785C18.1208 19.5262 18.8332 18.8843 19.172 17.5839L19.4327 16.5964H4.57556ZM4.28885 15.4689H19.7281L21.3615 9.13189L20.6491 8.74509L16.6438 11.5103C16.3483 11.7079 16.1485 11.6338 15.9834 11.4116L12.2126 6.01277L11.7956 5.99631L7.9901 11.4362C7.8424 11.6502 7.66863 11.7161 7.37322 11.5185L3.44607 8.80269L2.61199 9.00844L4.28885 15.4689ZM2.93346 10.7778C4.08033 10.7778 5.00129 9.89727 5.00129 8.80269C5.00129 7.73282 4.08033 6.84399 2.93346 6.84399C1.78659 6.84399 0.856934 7.72458 0.856934 8.80269C0.856934 9.89727 1.79528 10.7778 2.93346 10.7778ZM12.0042 7.35424C13.1423 7.35424 14.072 6.47364 14.072 5.3873C14.072 4.31741 13.1423 3.42859 12.0042 3.42859C10.8486 3.42859 9.92763 4.30919 9.92763 5.3873C9.92763 6.47364 10.8573 7.35424 12.0042 7.35424ZM21.0661 10.7778C22.2043 10.7778 23.1426 9.89727 23.1426 8.80269C23.1426 7.72458 22.213 6.84399 21.0661 6.84399C19.928 6.84399 18.9983 7.73282 18.9983 8.80269C18.9983 9.89727 19.928 10.7778 21.0661 10.7778Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Experienced Educators",
      pera: "Our passionate and qualified teachers create a supportive and stimulating learning environment",
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
            d="M12.004 17.9766C16.6595 17.9766 19.9725 16.1731 19.9725 13.5264V9.62265C19.9725 7.28042 17.1541 6 12.004 6C6.84596 6 4.02748 7.28042 4.02748 9.62265V13.5264C4.02748 16.1731 7.34051 17.9766 12.004 17.9766ZM7.74877 10.3097C7.74877 9.95837 8.03926 9.66168 8.40042 9.66168H15.6075C15.9765 9.66168 16.2669 9.95837 16.2669 10.3097C16.2669 10.6688 15.9765 10.9655 15.6075 10.9655H8.40042C8.03926 10.9655 7.74877 10.6688 7.74877 10.3097ZM7.74877 13.3234C7.74877 12.9642 8.03926 12.6675 8.40042 12.6675H15.6075C15.9765 12.6675 16.2669 12.9642 16.2669 13.3234C16.2669 13.6825 15.9765 13.9714 15.6075 13.9714H8.40042C8.03926 13.9714 7.74877 13.6825 7.74877 13.3234ZM0 11.1295C0 13.6435 1.8371 15.4002 4.59274 15.4002H5.10305V14.1432H4.46713C2.55937 14.1432 1.26399 12.8783 1.26399 11.1295C1.26399 10.2629 1.72718 9.73195 2.56722 9.73195H4.78116V8.47495H2.56722C0.942101 8.47495 0 9.4743 0 11.1295ZM24 11.1295C24 9.4743 23.0658 8.47495 21.4328 8.47495H19.2189V9.73195H21.4328C22.2728 9.73195 22.736 10.2629 22.736 11.1295C22.736 12.8783 21.4406 14.1432 19.5329 14.1432H18.8969V15.4002H19.4151C22.1629 15.4002 24 13.6435 24 11.1295Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Nurturing Environment",
      pera: "We prioritize safety and provide a warm and caring atmosphere for every child.",
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
            d="M3 2.25C3.41421 2.25 3.75 2.58579 3.75 3V3.53942L5.58819 3.07987C7.84613 2.51539 10.2315 2.77724 12.3132 3.8181L12.421 3.87196C14.1472 4.73507 16.1214 4.96567 18 4.52363L21.1096 3.79196C21.3465 3.73622 21.5958 3.79888 21.7781 3.96005C21.9605 4.12121 22.0533 4.36083 22.0271 4.60278C21.844 6.29313 21.75 8.01046 21.75 9.75C21.75 11.504 21.8455 13.2355 22.0317 14.9395C22.0728 15.3161 21.8266 15.6642 21.4579 15.751L18.3436 16.4837C16.1234 17.0062 13.7902 16.7336 11.7501 15.7136L11.6424 15.6597C9.88097 14.779 7.86256 14.5574 5.95199 15.0351L3.75 15.5856V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Play-Based Learning",
      pera: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
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
            d="M19.449 8.44818L16.3878 10.9992C16.5374 11.6574 16.5374 12.3426 16.3878 13.0008L19.449 15.5518C20.517 13.3118 20.517 10.6882 19.449 8.44818ZM15.5518 19.449L13.0008 16.3878C12.3426 16.5374 11.6574 16.5374 10.9992 16.3878L8.44818 19.449C10.6882 20.517 13.3118 20.517 15.5518 19.449ZM4.55102 15.5518L7.6122 13.0008C7.4626 12.3426 7.4626 11.6574 7.6122 10.9992L4.55102 8.44818C3.48299 10.6882 3.48299 13.3118 4.55102 15.5518ZM8.44818 4.55102L10.9992 7.6122C11.6574 7.4626 12.3426 7.4626 13.0008 7.6122L15.5518 4.55102C13.3118 3.48299 10.6882 3.48299 8.44818 4.55102ZM17.1055 3.6912C17.7424 4.08325 18.3435 4.55493 18.8943 5.10571C19.4451 5.65649 19.9167 6.25755 20.3088 6.89448C22.2304 10.0163 22.2304 13.9837 20.3088 17.1055C19.9167 17.7424 19.4451 18.3435 18.8943 18.8943C18.3435 19.4451 17.7424 19.9167 17.1055 20.3088C13.9837 22.2304 10.0163 22.2304 6.89448 20.3088C6.25755 19.9167 5.65649 19.4451 5.10571 18.8943C4.55493 18.3435 4.08325 17.7424 3.6912 17.1055C1.7696 13.9837 1.7696 10.0163 3.6912 6.89448C4.08325 6.25755 4.55493 5.65649 5.10571 5.10571C5.65649 4.55493 6.25755 4.08325 6.89448 3.6912C10.0163 1.7696 13.9837 1.7696 17.1055 3.6912ZM14.1213 9.87868C13.7958 9.55313 13.4158 9.31907 13.0115 9.17471C12.359 8.94176 11.641 8.94176 10.9886 9.17471C10.5842 9.31907 10.2042 9.55313 9.87868 9.87868C9.55313 10.2042 9.31907 10.5842 9.17471 10.9885C8.94176 11.641 8.94176 12.359 9.17471 13.0114C9.31907 13.4158 9.55313 13.7958 9.87868 14.1213C10.2042 14.4469 10.5842 14.6809 10.9886 14.8253C11.641 15.0582 12.359 15.0582 13.0115 14.8253C13.4158 14.6809 13.7958 14.4469 14.1213 14.1213C14.4469 13.7958 14.6809 13.4158 14.8253 13.0115C15.0582 12.359 15.0582 11.641 14.8253 10.9885C14.6809 10.5842 14.4469 10.2042 14.1213 9.87868Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Individualized Attention",
      pera: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
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
            d="M4.5 6.375C4.5 4.09683 6.34683 2.25 8.625 2.25C10.9032 2.25 12.75 4.09683 12.75 6.375C12.75 8.65317 10.9032 10.5 8.625 10.5C6.34683 10.5 4.5 8.65317 4.5 6.375Z"
            fill="#262626"
          />
          <path
            d="M14.25 8.625C14.25 6.76104 15.761 5.25 17.625 5.25C19.489 5.25 21 6.76104 21 8.625C21 10.489 19.489 12 17.625 12C15.761 12 14.25 10.489 14.25 8.625Z"
            fill="#262626"
          />
          <path
            d="M1.5 19.125C1.5 15.19 4.68997 12 8.625 12C12.56 12 15.75 15.19 15.75 19.125V19.1276C15.75 19.1674 15.7496 19.2074 15.749 19.2469C15.7446 19.5054 15.6074 19.7435 15.3859 19.8768C13.4107 21.0661 11.0966 21.75 8.625 21.75C6.15343 21.75 3.8393 21.0661 1.86406 19.8768C1.64256 19.7435 1.50537 19.5054 1.50103 19.2469C1.50034 19.2064 1.5 19.1657 1.5 19.125Z"
            fill="#262626"
          />
          <path
            d="M17.2498 19.1281C17.2498 19.1762 17.2494 19.2244 17.2486 19.2722C17.2429 19.6108 17.1612 19.9378 17.0157 20.232C17.2172 20.2439 17.4203 20.25 17.6248 20.25C19.2206 20.25 20.732 19.8803 22.0764 19.2213C22.3234 19.1002 22.4843 18.8536 22.4957 18.5787C22.4984 18.5111 22.4998 18.4432 22.4998 18.375C22.4998 15.6826 20.3172 13.5 17.6248 13.5C16.8784 13.5 16.1711 13.6678 15.5387 13.9676C16.6135 15.4061 17.2498 17.1912 17.2498 19.125V19.1281Z"
            fill="#262626"
          />
        </svg>
      ),
      title: "Parent Involvement",
      pera: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];
  const testimonialsCirsdData = [
    {
      img: test1,
      name: "Jennifer B",
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      img: test2,
      name: "David K",
      comment:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      img: test3,
      name: "Emily L",
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      img: test1,
      name: "Jennifer B",
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      img: test2,
      name: "David K",
      comment:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      img: test3,
      name: "Emily L",
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      img: test1,
      name: "Jennifer B",
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      img: test2,
      name: "David K",
      comment:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      img: test3,
      name: "Emily L",
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      img: test1,
      name: "Jennifer B",
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      img: test2,
      name: "David K",
      comment:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      img: test3,
      name: "Emily L",
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      img: test1,
      name: "Jennifer B",
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      img: test2,
      name: "David K",
      comment:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      img: test3,
      name: "Emily L",
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
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

  const faqData = [
    {
      faq: "What are the school hours at Little Learners Academy?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "Is there a uniform policy for students?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "What extracurricular activities are available for students?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "What extracurricular activities are available for students?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "How do you handle food allergies and dietary restrictions?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "What is the teacher-to-student ratio at Little Learners Academy?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "How do you handle discipline and behavior management?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      faq: "How do I apply for admission to Little Learners Academy?",
      ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];
  const exploreData = [
    {
      tittle: "About Us",
      pera: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      path: "/about",
    },
    {
      tittle: "Academics",
      pera: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      path: "/academics",
    },
    {
      tittle: "Student Life",
      pera: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      path: "/studentlife",
    },
    {
      tittle: "Admissions",
      pera: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      path: "/admissions",
    },
  ];

  return (
    <>
      {/* hero section code start */}
      <section className="px-4 mb-20 flex justify-center flex-wrap gap-10 ll:items-center xll:gap-12.5 3xl:gap-14.5 xll:mb-36.5 3xl:mb-[200px]">
        <div ref={heroimgref}>
          <picture>
            <source srcSet={childimgdesktop} media="(min-width: 1920px)" />
            <source srcSet={childimglaptop} media="(min-width: 1200px)" />
            <img
              src={childimgphone}
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
      <section className="section">
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
      <section className="section">
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
      <section className="section">
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
                        animationClass={()=>{
                          if(index===0){
                            "box1"
                          }else if(index===1){
                            "box2"
                          } else if(index===2) {
                            "box3"
                          } else{
                            "box4"
                          }
                        }}
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
