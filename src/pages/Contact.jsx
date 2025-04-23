import React from "react";
import CommonHero from "../Components/CommonHero";
import Commontittle from "../Components/Commontittle";

function Contact() {
  const ContactinfoData = [
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z"
            fill="#262626"
          />
          <path
            d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "hello@littlelearners.com",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 4.5C2 2.84315 3.34315 1.5 5 1.5H6.37163C7.232 1.5 7.98197 2.08556 8.19064 2.92025L9.29644 7.34343C9.47941 8.0753 9.20594 8.84555 8.60242 9.29818L7.3088 10.2684C7.17447 10.3691 7.14527 10.5167 7.183 10.6197C8.31851 13.7195 10.7805 16.1815 13.8803 17.317C13.9833 17.3547 14.1309 17.3255 14.2316 17.1912L15.2018 15.8976C15.6545 15.2941 16.4247 15.0206 17.1566 15.2036L21.5798 16.3094C22.4144 16.518 23 17.268 23 18.1284V19.5C23 21.1569 21.6569 22.5 20 22.5H17.75C9.05151 22.5 2 15.4485 2 6.75V4.5Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "+91 91813 23 2309",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5397 22.351C11.57 22.3685 11.5937 22.3821 11.6105 22.3915L11.6384 22.4071C11.8613 22.5294 12.1378 22.5285 12.3608 22.4075L12.3895 22.3915C12.4063 22.3821 12.43 22.3685 12.4603 22.351C12.5207 22.316 12.607 22.265 12.7155 22.1982C12.9325 22.0646 13.2388 21.8676 13.6046 21.6091C14.3351 21.0931 15.3097 20.3274 16.2865 19.3273C18.2307 17.3368 20.25 14.3462 20.25 10.5C20.25 5.94365 16.5563 2.25 12 2.25C7.44365 2.25 3.75 5.94365 3.75 10.5C3.75 14.3462 5.76932 17.3368 7.71346 19.3273C8.69025 20.3274 9.66491 21.0931 10.3954 21.6091C10.7612 21.8676 11.0675 22.0646 11.2845 22.1982C11.393 22.265 11.4793 22.316 11.5397 22.351ZM12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "Somewhere in the World",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 3xl:h-6 3xl:w-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 2.25C7.11522 2.25 2.75 6.61522 2.75 12C2.75 17.3848 7.11522 21.75 12.5 21.75C17.8848 21.75 22.25 17.3848 22.25 12C22.25 6.61522 17.8848 2.25 12.5 2.25ZM13.25 6C13.25 5.58579 12.9142 5.25 12.5 5.25C12.0858 5.25 11.75 5.58579 11.75 6V12C11.75 12.4142 12.0858 12.75 12.5 12.75H17C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25H13.25V6Z"
            fill="#262626"
          />
        </svg>
      ),
      text: "Office Hours - 9am - 6 pm",
    },
  ];
  const socialmedialinks = [
    {
      icon: (
        <svg
          className="h-[26px] w-[26px] 3xl:h-6 3xl:w-6"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_104_874)">
            <path
              d="M34 17C34 7.61115 26.3888 0 17 0C7.61115 0 0 7.61115 0 17C0 25.4851 6.21662 32.5181 14.3438 33.7935V21.9141H10.0273V17H14.3438V13.2547C14.3438 8.99406 16.8818 6.64062 20.7649 6.64062C22.6243 6.64062 24.5703 6.97266 24.5703 6.97266V11.1562H22.4267C20.315 11.1562 19.6562 12.4668 19.6562 13.8125V17H24.3711L23.6174 21.9141H19.6562V33.7935C27.7834 32.5181 34 25.4851 34 17Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_104_874">
              <rect width="34" height="34" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      path: "https://www.facebook.com/hamidulislam.maruf.5",
    },
    {
      icon: (
        <svg
          className="h-[26px] w-[26px] 3xl:h-6 3xl:w-6"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_104_877)">
            <path
              d="M10.6961 30.8125C23.5231 30.8125 30.5409 20.1829 30.5409 10.9677C30.5409 10.6689 30.5343 10.3634 30.521 10.0646C31.8862 9.0773 33.0643 7.85442 34 6.4534C32.7286 7.01908 31.3787 7.38852 29.9964 7.5491C31.4518 6.67668 32.5416 5.30615 33.0637 3.69156C31.6944 4.50302 30.1971 5.07543 28.6357 5.38426C27.5837 4.26644 26.1927 3.52631 24.6779 3.2783C23.163 3.03029 21.6087 3.28822 20.2551 4.0122C18.9016 4.73618 17.8242 5.88589 17.1896 7.28359C16.555 8.68128 16.3985 10.2491 16.7443 11.7446C13.9719 11.6055 11.2596 10.8853 8.78331 9.6307C6.30704 8.37609 4.12207 6.6151 2.37004 4.46188C1.47957 5.99716 1.20708 7.81389 1.60796 9.54286C2.00884 11.2718 3.05301 12.7833 4.52824 13.77C3.42072 13.7349 2.33747 13.4367 1.36797 12.9001V12.9864C1.36698 14.5976 1.92397 16.1594 2.94427 17.4063C3.96457 18.6532 5.38521 19.5084 6.96469 19.8263C5.93874 20.107 4.86197 20.1479 3.8177 19.9458C4.26339 21.3314 5.13056 22.5433 6.29817 23.4124C7.46579 24.2814 8.87559 24.7642 10.3308 24.7935C7.86027 26.7341 4.80841 27.7867 1.6668 27.7818C1.10966 27.7809 0.553065 27.7468 0 27.6795C3.19155 29.727 6.90417 30.8145 10.6961 30.8125Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_104_877">
              <rect width="34" height="34" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      path: "https://x.com/mdmaruf17204871",
    },
    {
      icon: (
        <svg
          className="h-[26px] w-[26px] 3xl:h-6 3xl:w-6"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_104_880)">
            <path
              d="M31.4832 0H2.51016C1.12227 0 0 1.0957 0 2.45039V31.543C0 32.8977 1.12227 34 2.51016 34H31.4832C32.8711 34 34 32.8977 34 31.5496V2.45039C34 1.0957 32.8711 0 31.4832 0ZM10.0871 28.973H5.04023V12.7434H10.0871V28.973ZM7.56367 10.532C5.94336 10.532 4.63516 9.22383 4.63516 7.61016C4.63516 5.99648 5.94336 4.68828 7.56367 4.68828C9.17734 4.68828 10.4855 5.99648 10.4855 7.61016C10.4855 9.21719 9.17734 10.532 7.56367 10.532ZM28.973 28.973H23.9328V21.084C23.9328 19.2047 23.8996 16.7809 21.3098 16.7809C18.6867 16.7809 18.2883 18.8328 18.2883 20.9512V28.973H13.2547V12.7434H18.0891V14.9613H18.1555C18.8262 13.6863 20.473 12.3383 22.9234 12.3383C28.0301 12.3383 28.973 15.6984 28.973 20.068V28.973Z"
              fill="#262626"
            />
          </g>
          <defs>
            <clipPath id="clip0_104_880">
              <rect width="34" height="34" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      path: "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
  ];
  const fromINputData = [
    {
      tittle: "Parent Name",
      type: "text",
      placeholder: "Enter Parent Name",
      id: "perentName",
    },
    {
      tittle: "Email Address",
      type: "email",
      placeholder: "Enter Email Address",
      id: "email",
    },
    {
      tittle: "Phone Number",
      type: "number",
      placeholder: "Enter Phone Number",
      id: "phone",
    },
    {
      tittle: "Student Name",
      type: "text",
      placeholder: "Enter Student Name",
      id: "studentName",
    },
    {
      tittle: "Student Age",
      type: "text",
      placeholder: "Enter Student Age",
      id: "studentAge",
    },
    {
      tittle: "Program of Intrest",
      type: "text",
      placeholder: "interested Program",
      id: "program",
    },
  ];
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
