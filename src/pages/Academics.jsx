import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import BanefitsCird from "../Components/BanefitsCird";
import LearnCird from "../Components/LearnCird";
import { FeaturesCirdData } from "../data/FeaturesCirdData";
import { LearncirdData } from "../data/LearncirdData";

function Academics() {
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
