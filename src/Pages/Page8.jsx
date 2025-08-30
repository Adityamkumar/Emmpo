import React from 'react'

const Page8 = () => {
  return (
    <div className='relative w-full  h-[180vh]'>
       <img className='w-46 absolute top-[12%] left-[44%]' src="/images/cross.png" alt="" /> 
       <div className='absolute top-[18%] px-54'><h1 className='text-center text-[4vw] font-["font1"] uppercase leading-13 tracking-tighter'>Your interests and values are your guiding stars <span className='text-[#7546ff]'>to happiness and success.</span></h1></div> 
        <div className='absolute top-[5%] right-24'><img className='w-54 rotate-24' src="/images/success-reel.png" alt="" /></div>
        <div className='absolute top-[46%] left-16'>
            <h3 className='text-[1.9vw] text-[#7546ff] font-["font1"]'>Our Quiz is designed to assist you</h3>
            <h3 className='mt-2 text-[2.4vw] font-["font2"] font-semibold leading-10  '>in exploring <span className='font-["font3"] font-bold'>new career paths</span> that you <br/> may not have previously known about or <br/>thought possible for you.</h3>
            <h2 className='mt-28 font-["font1"] uppercase text-[#7546ff] cursor-pointer text-[3.5vw]'>[take the quiz]</h2>
        </div>
   </div>
  )
}

export default Page8