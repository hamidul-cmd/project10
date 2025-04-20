import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import BanefitsCird from "../Components/BanefitsCird";
import learn1 from "../assets/learn1.png";
import learn2 from "../assets/learn2.png";
import learn3 from "../assets/learn3.png";
import learn4 from "../assets/learn4.png";
import learn5 from "../assets/learn5.png";
import learn6 from "../assets/learn6.png";
import LearnCird from "../Components/LearnCird";

function Academics() {
  const FeaturesCirdData = [
    {
      icon: (
        <svg
          className="h-6 w-6 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9375 6.42156C13.7906 5.04729 11.2377 4.25 8.5 4.25C6.88752 4.25 5.33738 4.52675 3.89593 5.03623C3.47136 5.18629 3.1875 5.58769 3.1875 6.038V26.2255C3.1875 26.5704 3.35492 26.8939 3.63653 27.093C3.91813 27.2921 4.27888 27.3422 4.60407 27.2273C5.82125 26.7971 7.13208 26.5625 8.5 26.5625C11.3263 26.5625 13.9163 27.5644 15.9375 29.2339V6.42156Z"
            fill="#262626"
          />
          <path
            d="M18.0625 29.2339C20.0837 27.5644 22.6737 26.5625 25.5 26.5625C26.8679 26.5625 28.1788 26.7971 29.3959 27.2273C29.7211 27.3422 30.0819 27.2921 30.3635 27.093C30.6451 26.8939 30.8125 26.5704 30.8125 26.2255V6.038C30.8125 5.58769 30.5286 5.18629 30.1041 5.03623C28.6626 4.52675 27.1125 4.25 25.5 4.25C22.7623 4.25 20.2094 5.04729 18.0625 6.42156V29.2339Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Thematic Learning",
      pera: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
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
            d="M26.0312 3.1875C24.5642 3.1875 23.375 4.37674 23.375 5.84375V28.1562C23.375 29.6233 24.5642 30.8125 26.0312 30.8125H27.0938C28.5608 30.8125 29.75 29.6233 29.75 28.1562V5.84375C29.75 4.37674 28.5608 3.1875 27.0938 3.1875H26.0312Z"
            fill="#262626"
          />
          <path
            d="M13.8125 12.2188C13.8125 10.7517 15.0017 9.5625 16.4688 9.5625H17.5312C18.9983 9.5625 20.1875 10.7517 20.1875 12.2188V28.1562C20.1875 29.6233 18.9983 30.8125 17.5312 30.8125H16.4688C15.0017 30.8125 13.8125 29.6233 13.8125 28.1562V12.2188Z"
            fill="#262626"
          />
          <path
            d="M4.25 18.5938C4.25 17.1267 5.43924 15.9375 6.90625 15.9375H7.96875C9.43576 15.9375 10.625 17.1267 10.625 18.5938V28.1562C10.625 29.6233 9.43576 30.8125 7.96875 30.8125H6.90625C5.43924 30.8125 4.25 29.6233 4.25 28.1562V18.5938Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "STEAM Education",
      pera: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
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
      tittle: "Language Immersion",
      pera: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
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
            d="M29.1822 2.125C28.6504 2.125 28.1305 2.28241 27.688 2.57739L20.4928 7.37422C18.5584 8.66379 16.8087 10.197 15.2838 11.9303C18.2801 13.303 20.6978 15.7207 22.0705 18.717C23.8038 17.1921 25.337 15.4424 26.6266 13.508L31.4234 6.31279C31.7184 5.87032 31.8758 5.35042 31.8758 4.81863C31.8758 3.33098 30.6698 2.125 29.1822 2.125ZM17.4251 21.9936C18.4825 21.4062 19.4954 20.7489 20.4577 20.0276C19.2654 17.0851 16.9157 14.7353 13.9732 13.5431C13.2519 14.5054 12.5946 15.5183 12.0072 16.5757L11.6126 17.2859C14.0726 17.9895 16.0113 19.9282 16.7149 22.3882L17.4251 21.9936ZM9.56329 19.125C6.62925 19.125 4.25079 21.5035 4.25079 24.4375C4.25079 25.6111 3.2994 26.5625 2.12579 26.5625C2.07767 26.5625 2.02978 26.5609 1.9822 26.5577C1.59099 26.5319 1.21732 26.7236 1.01011 27.0564C0.802907 27.3893 0.79584 27.8092 0.991729 28.1488C2.27494 30.3736 4.68063 31.875 7.43829 31.875C11.5459 31.875 14.8758 28.5451 14.8758 24.4375C14.8758 21.5035 12.4973 19.125 9.56329 19.125Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Art and Creativity",
      pera: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
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
            d="M17 3.1875C17.5868 3.1875 18.0625 3.6632 18.0625 4.25V7.4375C18.0625 8.0243 17.5868 8.5 17 8.5C16.4132 8.5 15.9375 8.0243 15.9375 7.4375V4.25C15.9375 3.6632 16.4132 3.1875 17 3.1875Z"
            fill="#262626"
          />
          <path
            d="M10.625 17C10.625 13.4792 13.4792 10.625 17 10.625C20.5208 10.625 23.375 13.4792 23.375 17C23.375 20.5208 20.5208 23.375 17 23.375C13.4792 23.375 10.625 20.5208 10.625 17Z"
            fill="#262626"
          />
          <path
            d="M26.767 8.73565C27.1819 8.32071 27.1819 7.64798 26.767 7.23304C26.3521 6.81811 25.6793 6.81811 25.2644 7.23304L23.0105 9.48695C22.5955 9.90188 22.5955 10.5746 23.0105 10.9895C23.4254 11.4045 24.0982 11.4045 24.5131 10.9895L26.767 8.73565Z"
            fill="#262626"
          />
          <path
            d="M30.8125 17C30.8125 17.5868 30.3368 18.0625 29.75 18.0625H26.5625C25.9757 18.0625 25.5 17.5868 25.5 17C25.5 16.4132 25.9757 15.9375 26.5625 15.9375H29.75C30.3368 15.9375 30.8125 16.4132 30.8125 17Z"
            fill="#262626"
          />
          <path
            d="M25.2642 26.7669C25.6792 27.1818 26.3519 27.1818 26.7668 26.7669C27.1818 26.3519 27.1818 25.6792 26.7668 25.2643L24.5129 23.0104C24.098 22.5954 23.4253 22.5954 23.0103 23.0104C22.5954 23.4253 22.5954 24.098 23.0103 24.513L25.2642 26.7669Z"
            fill="#262626"
          />
          <path
            d="M17 25.5C17.5868 25.5 18.0625 25.9757 18.0625 26.5625V29.75C18.0625 30.3368 17.5868 30.8125 17 30.8125C16.4132 30.8125 15.9375 30.3368 15.9375 29.75V26.5625C15.9375 25.9757 16.4132 25.5 17 25.5Z"
            fill="#262626"
          />
          <path
            d="M10.9898 24.513C11.4047 24.098 11.4047 23.4253 10.9898 23.0104C10.5749 22.5954 9.90213 22.5954 9.48719 23.0104L7.23329 25.2643C6.81836 25.6792 6.81836 26.3519 7.23329 26.7669C7.64822 27.1818 8.32096 27.1818 8.73589 26.7669L10.9898 24.513Z"
            fill="#262626"
          />
          <path
            d="M8.5 17C8.5 17.5868 8.0243 18.0625 7.4375 18.0625H4.25C3.6632 18.0625 3.1875 17.5868 3.1875 17C3.1875 16.4132 3.6632 15.9375 4.25 15.9375H7.4375C8.0243 15.9375 8.5 16.4132 8.5 17Z"
            fill="#262626"
          />
          <path
            d="M9.48703 10.9895C9.90197 11.4045 10.5747 11.4045 10.9896 10.9895C11.4046 10.5746 11.4046 9.90187 10.9896 9.48693L8.73573 7.23303C8.3208 6.8181 7.64806 6.8181 7.23313 7.23303C6.8182 7.64796 6.8182 8.3207 7.23313 8.73563L9.48703 10.9895Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Outdoor Education",
      pera: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
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
            d="M15.2835 4.54846C15.9187 3.02136 18.082 3.02136 18.7171 4.54846L21.6666 11.6399L29.3224 12.2536C30.971 12.3858 31.6395 14.4432 30.3835 15.5192L24.5506 20.5157L26.3326 27.9864C26.7164 29.5952 24.9662 30.8668 23.5548 30.0047L17.0003 26.0012L10.4459 30.0047C9.03447 30.8668 7.28433 29.5952 7.66808 27.9864L9.45013 20.5157L3.61722 15.5192C2.36115 14.4432 3.02963 12.3858 4.67826 12.2536L12.3341 11.6399L15.2835 4.54846Z"
            fill="#262626"
          />
        </svg>
      ),
      tittle: "Play-Based Learning",
      pera: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    },
  ];
  const LearncirdData = [
    {
      img: learn1,
      tittle: "Language Arts",
      pera: "Reading, writing, storytelling, and communication skills.",
    },
    {
      img: learn2,
      tittle: "Mathematics",
      pera: "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      img: learn3,
      tittle: "Science",
      pera: "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      img: learn4,
      tittle: "Social Studies",
      pera: "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      img: learn5,
      tittle: "Arts and Crafts",
      pera: "Encouraging creativity through various art forms and crafts.",
    },
    {
      img: learn6,
      tittle: "Physical Education",
      pera: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];
  return (
    <>
      <CommonHero
        capsule="Academics"
        tittle="Nurturing Young Minds for Success"
        pera="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      {/* features section code start */}
      <section className="section">
        <Commontittle
          capsule="Our Features"
          tittle="Our Special Features"
          pera="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-[68px] xll:gap-x-10 xll:gap-y-[68px] 3xl:gap-y-[85px] pb-1">
          {FeaturesCirdData.map((data, index) => {
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
      {/* features section code over */}
      {/* learn section code start */}
      <section className="section">
        <Commontittle
          capsule="Our Features"
          tittle="What Students Learn"
          pera="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-10 3xl:gap-12.5">
          {LearncirdData.map((data, index) => {
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
      {/* learn section code over */}
    </>
  );
}

export default Academics;
