import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import BanefitsCird from "../Components/BanefitsCird";
import LearnCird from "../Components/LearnCird";
import { ActivitiesCirdData } from "../data/ActivitiesCirdData";
import { EventCirdData } from "../data/EventCirdData";
import { SupportData } from "../data/SupportData";

function Studentlife() {
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
