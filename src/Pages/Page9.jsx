import React from 'react'

const Page9 = () => {
  return (
    <div className='relative w-full h-[210vh]'>
         <h3 className='text-center text-[3vw] font-["font4"] font-bold'>Join our community of 30,000+ students!</h3>
         <div className='absolute top-[7%] px-20 text-center'><h1 className='text-[6vw] leading-19 tracking-tight font-["font1"] uppercase'>More than 30,000 girls from <span className='text-[#7546ff]'> 193 countries </span> have already taken our Quiz.</h1></div>
         <h4 className='text-center text-[2.2vw] font-["font2"] font-semibold mt-80 '>Here’s what they are saying:</h4>
         <div data-scroll data-scroll-speed="0.1" data-scroll-direction="horizontal" className='absolute top-[37%] -left-6 -rotate-6 z-[1]'>
            <img src="/images/comment1.png" alt="" />
         </div>
         <div className='absolute top-[60%] -left-16 rotate-6'><img src="/images/graph.png" alt="" /></div>
         <h3 className='absolute left-[35%] text-[#7546ff] bottom-20 text-[3.4vw] uppercase font-["font1"] text-center'>[take the quiz]</h3>
    </div>
  )
}

export default Page9