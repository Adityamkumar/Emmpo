import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page2 = () => {

    const h1Ref1 = useRef(null)
    const h1Ref2 = useRef(null)
    const h1Ref3 = useRef(null)
    const h1Ref4 = useRef(null)
    const page2Ref = useRef(null) 
    const imglRef = useRef(null)
    const imgrRef = useRef(null)
    const img1Ref = useRef(null)
    const img2Ref = useRef(null)
    const img3Ref = useRef(null)
    const img4Ref = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
     gsap.from([h1Ref1.current,h1Ref2.current,h1Ref3.current,h1Ref4.current],{
        y:250,
        opacity:0,
        duration:1.3,
        delay:0.2,
        stagger:0.2,
        transform:'scaleX(1.2) scaleY(-1.2)',
        scrollTrigger:{
           trigger:page2Ref.current,
           start:"top 25%",
           end:"bottom 50%",
        }
     })

     gsap.from([imglRef.current,imgrRef.current],{
         y:-250,
         opacity:0,
         duration:0.8,
         delay:0.3,
         scrollTrigger:{
            trigger:page2Ref.current,
            start:'top 0',
            end:'bottom 50%',
         }
     })

     gsap.from([img1Ref.current,img2Ref.current,img3Ref.current,img4Ref.current],{
         y:-400,
         duration:1.4,
         delay:0.5,
         stagger:0.3,
         opacity:0,
         ease:'power4.out',
         scrollTrigger:{
            trigger:page2Ref.current,
            start:'top 10%',
            end:'bottom 50%',
         }
     })
  })  



  return (
    <div ref={page2Ref} className='w-full h-full bg-[#F9F5EC] overflow-hidden'>
        <img className='py-40 w-40 m-auto ' src="../public/images/cross.png" alt="" />
        <div className='relative w-full text-center -mt-36 font-["font1"] z-[2]'>
            <h1 ref={h1Ref1} className='text-[10vw] uppercase leading-32 tracking-tighter'>Explore</h1>
            <h1 ref={h1Ref2} className='text-[10vw] uppercase leading-32 tracking-tighter'><span className='text-[#7546FF]'>careers</span> where</h1>
            <h1 ref={h1Ref3} className='text-[10vw] uppercase leading-32 tracking-tighter'>you can make</h1>
            <h1 ref={h1Ref4} className='text-[10vw] uppercase leading-32 tracking-tighter'>a difference!</h1>
            <div className='absolute top-[53%] right-22 z-[-1]'>
            <div ref={img4Ref}>
               <img src="../public/images/caImg1.png" alt="" />
               <img className='absolute top-52 left-30' src="../public/images/caDare.png" alt="" />
            </div>
        </div>
        </div>
        <div className='w-full flex  justify-around'>
            <div ref={img1Ref} className='relative ml-20'>
                <img className='w-68 -rotate-20' src="../public/images/caImg4.png" alt="" />
                <img className='w-44 absolute top-78 left-36' src="../public/images/ca-dream.png" alt="" />
            </div>
            <div ref={img2Ref} className='relative w-[430px] h-[440px] bg-[#F8FE23] p-4 mt-26 ml-20 font-["font1"]'>
                <img src="../public/images/caImg3.png" alt="" />
                 <h1 className='text-center absolute top-6 leading-none text-white text-[2.6vw]'>Through our Career Guidance Quiz</h1>
                <h1 className='text-center m-auto text-[1.4vw] leading-none mt-4 mb-10 w-[88%]'>You find the careers that you would most likely Enjoy and are good at.</h1>
                <img className='absolute w-14  top-105 left-8' src="../public/images/ca-butter.png" alt="" />
            </div>
            <div ref={img3Ref} className='relative'>
               <img className='w-60 mr-30 mt-8 rotate-20' src="../public/images/caImg2.png" alt="" /> 
               <img className='w-70 absolute top-46 left-7' src="../public/images/ca-pass.png" alt="" />
            </div>
        </div>

        <div className='relative -mt-50 w-full flex justify-between items-center'>
            <div>
                <img ref={imglRef} className='w-54 -rotate-25 ml-2' src="../public/images/caImg5.png" alt="" />
            </div>
            <div className='font-["font4"] mt-20'>
                <p className='text-[2.4vw] text-center'>All related to</p>
                <div className='text-center mt-10'>
                    <h3 className='text-[5vw] font-medium leading-20 tracking-tight'>Creativity,</h3>
                    <h3 className='text-[5vw] font-medium leading-20 tracking-tight'>Sustainability,</h3>
                    <h3 className='text-[5vw] font-medium leading-20 tracking-tight'>and Tech.</h3>
                </div>
                <div className='absolute bottom-20'><h3 className='uppercase font-["font1"] text-[#7546FF] text-[3.4vw] text-center'>[Take the Quiz]</h3></div>
             </div>
            <div>
                <img ref={imgrRef} className='w-54 rotate-23' src="../public/images/caImg6.png" alt="" />
            </div>
        </div>

        
    </div>
  )
}

export default Page2