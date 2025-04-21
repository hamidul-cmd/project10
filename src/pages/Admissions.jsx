import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import ProcessCird from "../Components/ProcessCird";

function Admissions() {
  const ProcessCirdData = [
    {
      tittle: "Inquiry",
      pera: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    },
    {
      tittle: "School Tour",
      pera: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    },
    {
      tittle: "Application Form",
      pera: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    },
    {
      tittle: "Parent Interview",
      pera: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
    },
    {
      tittle: "Student Assessment",
      pera: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    },
    {
      tittle: "Acceptance",
      pera: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
    },
  ];
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
