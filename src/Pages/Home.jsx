import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import LocomotiveScroll from 'locomotive-scroll'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
const Home = () => {

  const h1Ref=useRef(null)
  const jrRef=useRef(null)
  const stRef = useRef(null)
  const btTxtRef=useRef(null)
  const btH3Ref=useRef(null)
  const quizRef=useRef(null)

useEffect(()=>{
        const locomotive=new LocomotiveScroll()
      })
      useGSAP(()=>{
        let tl=gsap.timeline()
        tl.from([h1Ref.current,jrRef.current,stRef.current],{
            y:200,
            opacity:0,
            duration:1.3,
            delay:0.6,
            ease:'power3.out',
            scaleY:-0.5,
        })  
        
        tl.from(btTxtRef.current,{
           y:150,
           opacity:0,
           duration:1,
           delay:0.2,
           ease:"power3.out",
           scaleY:-0.4
        })

        tl.from([btH3Ref.current,quizRef.current],{
            y:150,
            opacity:0,
            duration:1.2,
            delay:0.3,
            ease:"power3.out",
        })
     })  

    


  return (
    <div className="w-full h-screen">
      <div className="back relative w-full h-full pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src="./public/images/homeImg.png"
          alt=""
        />
      </div>
      <div className="top absolute top-0 left-0 w-full h-full">
        <Navbar />
        <div className="w-full mt-[4%]">
          <h1 ref={h1Ref} className='text-[14.3vw] text-[#F8FE23] text-center uppercase font-["font1"] tracking-tighter leading-none'>
            your career
          </h1>
        </div>
        <div className='flex items-center justify-between px-[3.9vw] font-["font1"]'>
          <h1 ref={jrRef} className="text-[5vw] text-[#F8FE23] tracking-tighter uppercase leading-none -mt-8">
            journy
          </h1>
          <h1 ref={stRef} className="text-[5vw] text-[#F8FE23] tracking-tighter uppercase leading-none -mt-8">
            start here
          </h1>
        </div>

        <div className="absolute bottom-2 w-[28%] left-[36%] font-['font1'] z-[1]">
          <h3 ref={btTxtRef} className="text-[1.9vw] text-[#F8FE23] text-center leading-none">
            Guiding You through Career choices and Relevant degrees
          </h3>
        </div>
        <div className="fixed bottom-2 px-16 w-full z-[4]">
            <div className="flex items-center justify-between font-['font2']">
              <h3 ref={btH3Ref} className="text-[2.3vw] text-[#374850] font-semibold">Start here</h3>
              <h3 ref={quizRef} className="text-[2.3vw] text-[#374850] font-semibold">Take the Quiz</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
