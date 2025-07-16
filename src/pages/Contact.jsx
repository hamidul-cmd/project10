import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";
import { ContactinfoData } from "../data/ContactinfoData";
import { socialmedialinks } from "../data/socialmedialinks";
import { fromINputData } from "../data/fromINputData";

function Contact() {
  return (
    <>
      <CommonHero
        capsule="Contact Us"
        tittle="Feel Free To Connect With Us"
        pera="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        contactInfo={ContactinfoData}
      />
      <section className="section">
        <Commontittle
          capsule="Contact Form"
          tittle="Student Information"
          pera="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
        />
        <div className="p-7.5 pt-20 bg-white border-2 border-gray-15 rounded-10 shadow-black xll:p-20 xll:pt-24.5 3xl:p-24.5 3xl:pt-24.7 3xl:rounded-xl relative">
          <div className="flex absolute top-0 left-0 w-full justify-center gap-5 translate-y-[-40%]">
            {socialmedialinks.map((data, index) => {
              return (
                <a
                  key={index}
                  target="_blank"
                  href={data.path}
                  className="px-6 py-4 bg-orange-90 border-2 border-gray-15 rounded-md hover:bg-white transition-all duration-300 ease-in xll:px-12.5 3xl:py-5 3xl:px-14.5 3xl:rounded-lg"
                >
                  {data.icon}
                </a>
              );
            })}
          </div>
          <form
            action="post"
            className="grid grid-cols-1 gap-7.5 ll:grid-cols-2"
          >
            {fromINputData.map((data, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={data.id}
                    className="text-base font-medium l-150 text-gray-15 font-outfit 3xl:text-xl mb-2.5 block xll:mb-3.5 3xl:mb-5"
                  >
                    {data.tittle}
                  </label>
                  <input
                    type={data.type}
                    id={data.id}
                    placeholder={data.placeholder}
                    className="w-full py-3.5 px-4.5 rounded-md border-2 border-gray-15 text-base font-medium l-150 text-gray-20 font-outfit 3xl:py-4.8 3xl:px-5.5 3xl:text-xl bg-orange-99 placeholder:text-gray-35"
                  />
                </div>
              );
            })}
            <div className="ll:col-span-2">
              <h4 className="text-base font-medium l-150 text-gray-15 font-outfit 3xl:text-xl mb-2.5 block xll:mb-3.5 3xl:mb-5">
                Message
              </h4>
              <textarea
                name="massage"
                id="massager"
                placeholder=" Enter Your Message"
                className="w-full py-3.5 px-4.5 rounded-md border-2 border-gray-15 text-base font-medium l-150 text-gray-20 font-outfit 3xl:py-4.8 3xl:px-5.5 3xl:text-xl h-[161px] bg-orange-99 3xl:h-[218px] 3xl:rounded-lg placeholder:text-gray-35"
              ></textarea>
            </div>
            <button
              type="submit"
              className="ll:col-span-2 w-full py-4 bg-orange-75 border-2 border-gray-15 rounded-lg text-center text-lg font-medium text-gray-15 font-outfit l-150 xll:py-6 xll:text-xl xll:rounded-10 3xl:py-7.5 3xl:text-2xl 3xl:rou1nded-xl cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
