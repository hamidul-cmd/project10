import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import ProcessCird from "../Components/ProcessCird";
import { ProcessCirdData } from "../data/ProcessCirdData";

function Admissions() {
  return (
    <>
      <CommonHero
        capsule="Admissions"
        tittle="Join Our Family of Young Learners"
        pera="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <section className="section">
        <Commontittle
          capsule="Process"
          tittle="Admission Process"
          pera="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        <div className="grid grid-cols-1 gap-12.5 ll:grid-cols-2 xll:grid-cols-3 xll:gap-x-10 xll:gap-y-20 3xl:gap-x-12.5 3xl:gap-y-24.5">
          {ProcessCirdData.map((data, index) => {
            return (
              <ProcessCird
                key={index}
                tittle={data.tittle}
                pera={data.pera}
                cirdnumber={index + 1}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Admissions;
