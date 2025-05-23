import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import BanefitsCird from "../Components/BanefitsCird";
import LearnCird from "../Components/LearnCird";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";

function Studentlife() {
  const ActivitiesCirdData = [
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.7049 2.25951C21.1317 2.49743 21.3411 2.99572 21.2126 3.4671L18.3911 13.8125H28.6875C29.1106 13.8125 29.4934 14.0635 29.662 14.4516C29.8306 14.8396 29.7529 15.2907 29.4643 15.6L14.5893 31.5375C14.2559 31.8947 13.7219 31.9785 13.2951 31.7406C12.8684 31.5026 12.6589 31.0044 12.7875 30.533L15.6089 20.1875H5.31252C4.88944 20.1875 4.50667 19.9365 4.33805 19.5485C4.16943 19.1605 4.2471 18.7094 4.53578 18.4001L19.4108 2.46257C19.7442 2.10538 20.2782 2.0216 20.7049 2.25951Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Sports and Athletics",
      pera: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.1802 2.125C28.6484 2.125 28.1285 2.28241 27.6861 2.57739L20.4908 7.37422C18.5565 8.66379 16.8068 10.197 15.2819 11.9303C18.2782 13.303 20.6959 15.7207 22.0685 18.717C23.8018 17.1921 25.3351 15.4424 26.6246 13.508L31.4214 6.31279C31.7164 5.87032 31.8738 5.35042 31.8738 4.81863C31.8738 3.33098 30.6679 2.125 29.1802 2.125ZM17.4232 21.9936C18.4806 21.4062 19.4935 20.7489 20.4557 20.0276C19.2635 17.0851 16.9137 14.7353 13.9713 13.5431C13.2499 14.5054 12.5927 15.5183 12.0052 16.5757L11.6107 17.2859C14.0707 17.9895 16.0093 19.9282 16.7129 22.3882L17.4232 21.9936ZM9.56134 19.125C6.62729 19.125 4.24884 21.5035 4.24884 24.4375C4.24884 25.6111 3.29745 26.5625 2.12384 26.5625C2.07572 26.5625 2.02783 26.5609 1.98025 26.5577C1.58903 26.5319 1.21537 26.7236 1.00816 27.0564C0.800953 27.3893 0.793886 27.8092 0.989775 28.1488C2.27299 30.3736 4.67867 31.875 7.43634 31.875C11.544 31.875 14.8738 28.5451 14.8738 24.4375C14.8738 21.5035 12.4954 19.125 9.56134 19.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Art and Creativity",
      pera: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.2648 2.33926C28.531 2.54004 28.6875 2.85411 28.6875 3.18751V8.47654C28.6879 8.49258 28.6879 8.50858 28.6875 8.52454V23.0957C28.6875 24.9932 27.4296 26.6609 25.6051 27.1821L23.7351 27.7164C21.4248 28.3765 19.125 26.6418 19.125 24.239C19.125 22.6243 20.1954 21.2052 21.748 20.7616L25.0213 19.8264C25.9335 19.5658 26.5625 18.7319 26.5625 17.7832V9.9086L13.8125 13.5515V27.3457C13.8125 29.2432 12.5546 30.9109 10.7301 31.4321L8.86009 31.9664C6.54978 32.6265 4.25 30.8918 4.25 28.489C4.25 26.8743 5.32042 25.4552 6.87301 25.0116L10.1463 24.0764C11.0585 23.8158 11.6875 22.9819 11.6875 22.0332V12.7735C11.6871 12.7574 11.6871 12.7414 11.6875 12.7255V7.43751C11.6875 6.96312 12.002 6.54621 12.4581 6.41589L27.3331 2.16589C27.6537 2.0743 27.9987 2.13849 28.2648 2.33926Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Music and Performing Arts",
      pera: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9375 7.56066C15.9375 7.05752 15.6739 6.60275 15.3691 6.20245C15.0562 5.79148 14.875 5.304 14.875 4.78125C14.875 3.31424 16.3021 2.125 18.0625 2.125C19.8229 2.125 21.25 3.31424 21.25 4.78125C21.25 5.304 21.0688 5.79148 20.7559 6.20245C20.4511 6.60275 20.1875 7.05753 20.1875 7.56066C20.1875 8.03149 20.5809 8.40735 21.0509 8.3793C23.7576 8.21779 26.4206 7.89548 29.0306 7.42189C29.3178 7.36977 29.6138 7.43813 29.8491 7.61091C30.0844 7.78369 30.2383 8.04568 30.2745 8.33534C30.5919 10.8704 30.7718 13.4479 30.8067 16.06C30.8136 16.579 30.3922 16.9999 29.8732 17C29.37 17 28.9152 16.7364 28.5149 16.4316C28.104 16.1187 27.6165 15.9375 27.0937 15.9375C25.6267 15.9375 24.4375 17.3646 24.4375 19.125C24.4375 20.8854 25.6267 22.3125 27.0937 22.3125C27.6165 22.3125 28.104 22.1313 28.5149 21.8184C28.9152 21.5136 29.37 21.25 29.8732 21.25C30.3129 21.25 30.6621 21.6207 30.6304 22.0593C30.4622 24.3806 30.1794 26.6703 29.7873 28.9228C29.7104 29.3646 29.3645 29.7105 28.9227 29.7874C26.3456 30.2359 23.7198 30.5415 21.0538 30.6958C20.582 30.7231 20.1875 30.3457 20.1875 29.8732C20.1875 29.37 20.4511 28.9152 20.7559 28.5149C21.0688 28.104 21.25 27.6165 21.25 27.0938C21.25 25.6267 19.8229 24.4375 18.0625 24.4375C16.3021 24.4375 14.875 25.6267 14.875 27.0938C14.875 27.6165 15.0562 28.104 15.3691 28.5149C15.6739 28.9152 15.9375 29.37 15.9375 29.8732C15.9375 30.3854 15.5181 30.7991 15.0061 30.7846C12.7543 30.7207 10.5292 30.549 8.33585 30.2744C8.04619 30.2381 7.7842 30.0843 7.61143 29.849C7.43864 29.6137 7.37029 29.3176 7.42241 29.0304C7.83732 26.7439 8.13613 24.4168 8.31243 22.0552C8.34499 21.6191 7.99797 21.25 7.56066 21.25C7.05752 21.25 6.60275 21.5136 6.20245 21.8184C5.79148 22.1313 5.304 22.3125 4.78125 22.3125C3.31424 22.3125 2.125 20.8854 2.125 19.125C2.125 17.3646 3.31424 15.9375 4.78125 15.9375C5.304 15.9375 5.79148 16.1187 6.20245 16.4316C6.60275 16.7364 7.05753 17 7.56066 17C8.07968 17 8.5011 16.5792 8.49396 16.0603C8.46223 13.7536 8.31388 11.4754 8.05458 9.2314C8.01735 8.90914 8.12937 8.58753 8.35876 8.35814C8.58815 8.12875 8.90976 8.01673 9.23202 8.05396C11.1336 8.27369 13.0597 8.41376 15.0068 8.4707C15.5184 8.48565 15.9375 8.07241 15.9375 7.56066Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Language Clubs",
      pera: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.8767 5.37991V12.4922C14.8767 13.6194 14.4289 14.7004 13.6319 15.4974L10.2644 18.8649C12.7398 18.6887 15.2419 19.1822 17.4769 20.2997C19.975 21.5487 22.866 21.8762 25.5697 21.2003L25.9735 21.0994L20.3715 15.4974C19.5745 14.7004 19.1267 13.6194 19.1267 12.4922V5.37991C18.4242 5.3352 17.7157 5.3125 17.0017 5.3125C16.2877 5.3125 15.5791 5.3352 14.8767 5.37991ZM21.2517 5.57566C21.7804 5.57632 22.2389 5.18263 22.306 4.64452C22.3786 4.06223 21.9655 3.53132 21.3832 3.45871C21.0196 3.41338 20.6544 3.37362 20.2876 3.33951C19.2055 3.2389 18.1095 3.1875 17.0017 3.1875C15.8939 3.1875 14.7979 3.2389 13.7158 3.33951C13.349 3.37362 12.9837 3.41338 12.6202 3.45871C12.0379 3.53132 11.6247 4.06223 11.6974 4.64452C11.7645 5.18263 12.223 5.57632 12.7517 5.57566V12.4922C12.7517 13.0558 12.5278 13.5963 12.1293 13.9948L3.21394 22.9102C0.917322 25.2068 1.93469 29.2505 5.29772 29.8247C9.10265 30.4743 13.0131 30.8125 17.0017 30.8125C20.9903 30.8125 24.9007 30.4743 28.7057 29.8247C32.0687 29.2505 33.0861 25.2068 30.7895 22.9102L21.8741 13.9948C21.4756 13.5963 21.2517 13.0558 21.2517 12.4922V5.57566Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Science Club",
      pera: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 6.375C13.2244 6.375 13.6413 6.68948 13.7716 7.14561L14.9236 11.1777C15.4279 12.9426 16.8074 14.3221 18.5723 14.8264L22.6044 15.9784C23.0605 16.1087 23.375 16.5256 23.375 17C23.375 17.4744 23.0605 17.8913 22.6044 18.0216L18.5723 19.1736C16.8074 19.6779 15.4279 21.0574 14.9236 22.8223L13.7716 26.8544C13.6413 27.3105 13.2244 27.625 12.75 27.625C12.2756 27.625 11.8587 27.3105 11.7284 26.8544L10.5764 22.8223C10.0721 21.0574 8.69256 19.6779 6.92771 19.1736L2.89561 18.0216C2.43948 17.8913 2.125 17.4744 2.125 17C2.125 16.5256 2.43948 16.1087 2.89561 15.9784L6.92771 14.8264C8.69257 14.3221 10.0721 12.9426 10.5764 11.1777L11.7284 7.14561C11.8587 6.68948 12.2756 6.375 12.75 6.375Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5 2.125C25.9875 2.125 26.4125 2.45682 26.5308 2.92981L26.8975 4.39671C27.2306 5.72908 28.2709 6.7694 29.6033 7.1025L31.0702 7.46922C31.5432 7.58747 31.875 8.01245 31.875 8.5C31.875 8.98755 31.5432 9.41253 31.0702 9.53078L29.6033 9.8975C28.2709 10.2306 27.2306 11.2709 26.8975 12.6033L26.5308 14.0702C26.4125 14.5432 25.9875 14.875 25.5 14.875C25.0125 14.875 24.5875 14.5432 24.4692 14.0702L24.1025 12.6033C23.7694 11.2709 22.7291 10.2306 21.3967 9.8975L19.9298 9.53078C19.4568 9.41253 19.125 8.98755 19.125 8.5C19.125 8.01245 19.4568 7.58747 19.9298 7.46922L21.3967 7.1025C22.7291 6.7694 23.7694 5.72908 24.1025 4.39671L24.4692 2.92981C24.5875 2.45682 25.0125 2.125 25.5 2.125Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.375 21.25C23.8323 21.25 24.2384 21.5426 24.383 21.9765L24.9415 23.652C25.153 24.2866 25.6509 24.7845 26.2855 24.996L27.961 25.5545C28.3949 25.6991 28.6875 26.1052 28.6875 26.5625C28.6875 27.0198 28.3949 27.4259 27.961 27.5705L26.2855 28.129C25.6509 28.3405 25.153 28.8384 24.9415 29.473L24.383 31.1485C24.2384 31.5824 23.8323 31.875 23.375 31.875C22.9177 31.875 22.5116 31.5824 22.367 31.1485L21.8085 29.473C21.597 28.8384 21.0991 28.3405 20.4645 28.129L18.789 27.5705C18.3551 27.4259 18.0625 27.0198 18.0625 26.5625C18.0625 26.1052 18.3551 25.6991 18.789 25.5545L20.4645 24.996C21.0991 24.7845 21.597 24.2866 21.8085 23.652L22.367 21.9765C22.5116 21.5426 22.9177 21.25 23.375 21.25Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Cooking and Culinary Arts",
      pera: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    },
  ];
  const EventCirdData = [
    {
      img: event1,
      tittle: "Annual Sports Day",
      pera: "A day filled with friendly competition, team spirit, and sportsmanship.",
    },
    {
      img: event2,
      tittle: "Cultural Festivals",
      pera: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
    },
    {
      img: event3,
      tittle: "Art Exhibitions",
      pera: "Showcasing our students' artistic talents through exhibitions and displays.",
    },
    {
      img: event4,
      tittle: "Science Fair",
      pera: "A platform for budding scientists to present their innovative projects and experiments.",
    },
    {
      img: event5,
      tittle: "International Day",
      pera: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
    },
    {
      img: event6,
      tittle: "Graduation Ceremony",
      pera: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
    },
  ];
  const SupportData = [
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1.0625C10.5452 1.0625 5.3125 6.29517 5.3125 12.75C5.3125 17.0719 7.65894 20.8446 11.1423 22.8656C12.1134 23.4291 12.7215 24.2936 12.749 25.1636C12.7642 25.6435 13.0993 26.0536 13.5666 26.164C14.0644 26.2817 14.5716 26.3743 15.0869 26.4405C15.5454 26.4994 15.9378 26.1322 15.9378 25.67V19.0668C15.4854 19.0168 15.0422 18.9352 14.6104 18.824C14.0421 18.6778 13.7 18.0985 13.8463 17.5302C13.9926 16.9619 14.5718 16.6198 15.1401 16.7661C15.7334 16.9188 16.3565 17.0003 17.0003 17.0003C17.644 17.0003 18.2671 16.9188 18.8604 16.7661C19.4287 16.6198 20.008 16.9619 20.1542 17.5302C20.3005 18.0985 19.9584 18.6778 19.3901 18.824C18.9583 18.9352 18.5151 19.0168 18.0628 19.0668V25.6699C18.0628 26.1321 18.4552 26.4994 18.9136 26.4404C19.4287 26.3742 19.9358 26.2817 20.4334 26.164C20.9007 26.0536 21.2358 25.6435 21.251 25.1636C21.2785 24.2936 21.8866 23.4291 22.8577 22.8656C26.3411 20.8446 28.6875 17.0719 28.6875 12.75C28.6875 6.29517 23.4548 1.0625 17 1.0625Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7686 28.1912C12.878 27.6147 13.434 27.2359 14.0105 27.3453C14.9781 27.5288 15.9773 27.625 17 27.625C18.0227 27.625 19.0219 27.5288 19.9895 27.3453C20.566 27.2359 21.122 27.6147 21.2314 28.1912C21.3407 28.7677 20.962 29.3237 20.3855 29.4331C19.2881 29.6413 18.1563 29.75 17 29.75C15.8438 29.75 14.7119 29.6413 13.6145 29.4331C13.038 29.3237 12.6593 28.7677 12.7686 28.1912Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8183 31.654C13.8793 31.0703 14.4019 30.6467 14.9855 30.7078C15.6472 30.777 16.3193 30.8125 17 30.8125C17.6807 30.8125 18.3528 30.777 19.0145 30.7078C19.5981 30.6467 20.1207 31.0703 20.1817 31.654C20.2428 32.2376 19.8192 32.7602 19.2355 32.8212C18.5005 32.8981 17.7547 32.9375 17 32.9375C16.2453 32.9375 15.4995 32.8981 14.7645 32.8212C14.1808 32.7602 13.7572 32.2376 13.8183 31.654Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Counseling",
      pera: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2695 6.42156C14.1226 5.04729 11.5697 4.25 8.83203 4.25C7.21955 4.25 5.66941 4.52675 4.22796 5.03623C3.80339 5.18629 3.51953 5.58769 3.51953 6.038V26.2255C3.51953 26.5704 3.68695 26.8939 3.96856 27.093C4.25016 27.2921 4.61091 27.3422 4.93611 27.2273C6.15328 26.7971 7.46411 26.5625 8.83203 26.5625C11.6583 26.5625 14.2483 27.5644 16.2695 29.2339V6.42156Z"
            fill="#262626"
          />
          <path
            d="M18.3945 29.2339C20.4158 27.5644 23.0058 26.5625 25.832 26.5625C27.1999 26.5625 28.5108 26.7971 29.728 27.2273C30.0531 27.3422 30.4139 27.2921 30.6955 27.093C30.9771 26.8939 31.1445 26.5704 31.1445 26.2255V6.038C31.1445 5.58769 30.8607 5.18629 30.4361 5.03623C28.9947 4.52675 27.4445 4.25 25.832 4.25C23.0944 4.25 20.5414 5.04729 18.3945 6.42156V29.2339Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: " Learning Support",
      pera: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3555 9.5625C12.3555 6.62849 14.734 4.25 17.668 4.25C20.602 4.25 22.9805 6.62849 22.9805 9.5625C22.9805 12.4965 20.602 14.875 17.668 14.875C14.734 14.875 12.3555 12.4965 12.3555 9.5625Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.9805 13.8125C22.9805 11.4653 24.8833 9.5625 27.2305 9.5625C29.5777 9.5625 31.4805 11.4653 31.4805 13.8125C31.4805 16.1597 29.5777 18.0625 27.2305 18.0625C24.8833 18.0625 22.9805 16.1597 22.9805 13.8125Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.85547 13.8125C3.85547 11.4653 5.75826 9.5625 8.10547 9.5625C10.4527 9.5625 12.3555 11.4653 12.3555 13.8125C12.3555 16.1597 10.4527 18.0625 8.10547 18.0625C5.75826 18.0625 3.85547 16.1597 3.85547 13.8125Z"
            fill="#262626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.60694 21.4165C11.3041 18.7629 14.2798 17 17.668 17C21.0566 17 24.0326 18.7633 25.7296 21.4175C26.9029 23.2524 27.4104 25.4649 27.1723 27.6221C27.1351 27.9592 26.9392 28.2583 26.645 28.4271C23.9996 29.945 20.9335 30.8125 17.668 30.8125C14.4024 30.8125 11.3363 29.945 8.6909 28.4271C8.39672 28.2583 8.20081 27.9592 8.1636 27.6221C7.92546 25.4645 8.4333 23.2516 9.60694 21.4165Z"
            fill="#262626"
          />
          <path
            d="M7.86787 20.1927C7.85081 20.2189 7.83385 20.2452 7.817 20.2716C6.44926 22.4101 5.82333 24.957 6.01548 27.4678C5.15408 27.3369 4.31829 27.1265 3.51608 26.8439L3.35322 26.7866C3.05613 26.682 2.84854 26.4122 2.82356 26.0982L2.80986 25.9261C2.79866 25.7853 2.79297 25.6432 2.79297 25.5C2.79297 22.6456 5.04412 20.317 7.86787 20.1927Z"
            fill="#262626"
          />
          <path
            d="M29.321 27.4677C29.513 24.9574 28.8874 22.4111 27.5202 20.2728C27.5031 20.246 27.4859 20.2193 27.4686 20.1927C30.2921 20.3173 32.543 22.6458 32.543 25.5C32.543 25.6432 32.5373 25.7853 32.5261 25.9261L32.5124 26.0982C32.4874 26.4122 32.2798 26.682 31.9827 26.7866L31.8199 26.8439C31.0178 27.1264 30.1822 27.3368 29.321 27.4677Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Parent-Teacher Collaboration",
      pera: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    },
  ];
  return (
    <>
      <CommonHero
        capsule="Enriching Student Life"
        tittle="Embracing Learning with Discovery and Joy"
        pera="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <section className="section">
        <Commontittle
          capsule="Our Features"
          tittle="Extracurricular Activities"
          pera="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-[68px] xll:gap-x-10 xll:gap-y-[68px] 3xl:gap-y-[85px] pb-1">
          {ActivitiesCirdData.map((data, index) => {
            return (
              <BanefitsCird
                key={index}
                tittle={data.tittle}
                pera={data.pera}
                icon={data.icon}
              />
            );
          })}
        </div>
      </section>
      <section className="section">
        <Commontittle
          capsule="Our Features"
          tittle="Events & Celebrations"
          pera="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-10 3xl:gap-12.5">
          {EventCirdData.map((data, index) => {
            return (
              <LearnCird
                key={index}
                img={data.img}
                tittle={data.tittle}
                pera={data.pera}
              />
            );
          })}
        </div>
      </section>
      <section className="section">
        <Commontittle
          capsule="Our Achievements"
          tittle="Student Support"
          pera="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-[68px] xll:gap-x-10 xll:gap-y-[68px] 3xl:gap-y-[85px] pb-1">
          {SupportData.map((data, index) => {
            return (
              <BanefitsCird
                key={index}
                tittle={data.tittle}
                pera={data.pera}
                icon={data.icon}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Studentlife;
