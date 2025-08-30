import React from "react";

const Page6 = () => {
  return (
    <div className="relative w-full h-[290vh]  bg-[url(/images/mc-girl.png)] bg-cover object-cover">
      <div className="absolute top-30 px-10">
        <h1 className='text-[10vw] select-none font-["font1"] uppercase leading-32 tracking-tight text-center text-white mix-blend-difference'>
          The person behind the quiz
        </h1>
      </div>
      <div className="absolute top-[42%] px-14">
        <div>
          <img className="w-86" src="/images/qimg1.png" alt="" />
        </div>
        <div className="relative">
          <div>
            <img
              className="w-64 absolute -top-4 left-20"
              src="/images/qimg2.png"
              alt=""
            />
          </div>
          <img
            className="w-26 absolute -top-13 left-14"
            src="/images/star.png"
            alt=""
          />
          <img
            className="w-44 absolute left-10 top-68"
            src="/images/enough.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[580px] absolute right-0 top-[36%] bg-white">
        <video
          className="w-full object-cover p-6"
          autoPlay
          loop
          muted
          video
          src="/images/reel.mp4"
        ></video>
        <h3 className='text-center text-[2.2vw] font-["font1"] pb-4 text-[#7546ff] cursor-pointer'>
          Follow my Instagram
        </h3>
      </div>
      <div className="absolute bottom-6 left-16">
        <h1 className='text-center select-none text-[16vw] uppercase font-["font1"] text-white mix-blend-difference'>
          hey there!
        </h1>
      </div>
    </div>
  );
};

export default Page6;
