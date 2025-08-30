import React from "react";

const Page5 = () => {
  return (
    <div className="relative w-full h-[235vh] bg-[#F9F5EC]">
      <div className="absolute top-50">
        <h1 className='text-center text-[10vw] leading-30 tracking-tight uppercase font-["font1"]'>
          The <span className="text-[#7546FF]">science</span> behind the quiz
        </h1>
      </div>
      <div className="absolute top-130 left-1/2 right-30">
        <div className="">
          <h3 className='text-[1.8vw] text-[#7546FF] font-["font1"]'>
            We leverage a model that is based on
          </h3>
        </div>
        <div className="mt-2">
          <h4 className='text-[2.3vw] font-["font4"]  leading-none tracking-tight'>
            vocational psychology research that has been validated in studies
            repeatedly during the last 50 years, making it a{" "}
            <span className='italic font-["font3"] font-bold '>
              scientifically grounded tool for career
            </span>{" "}
            assessment and guidance.{" "}
          </h4>
        </div>
      </div>

      <div className="absolute top-[54%]">
        <div className="relative">
          <img src="/images/bluetxt.png" alt="" />
          <div className="absolute top-0 left-[10%] flex gap-30 px-6">
            <div className="relative -mt-30">
              <img
                className="w-86  -rotate-15"
                src="/images/sc-img1.png"
                alt=""
              />
              <img
                className="absolute w-40 top-[63%] left-20"
                src="/images/sc-dare.png"
                alt=""
              />
            </div>
            <div className="relative mt-20">
              <img
                className="w-90  rotate-12"
                src="/images/sc-img2.png"
                alt=""
              />
              <img
                className="absolute top-[72%] w-26 right-[80%]"
                src="/images/sc-cross.png"
                alt=""
              />
              <img
                className="absolute top-[83%] w-58 left-20 "
                src="/images/sc-trust.png"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="w-76 ml-10 -rotate-10"
                src="/images/sc-img3.png"
                alt=""
              />
              <img
                className="absolute top-[47%] left-48 w-36"
                src="/images/sc-design.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
