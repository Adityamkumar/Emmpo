import React from 'react'

const Page4 = () => {
  return (
    <div className='relative w-full h-[280vh] bg-[url("/images/gen-z.png")] object-cover bg-center bg-cover'>
       <div className='absolute top-36 text-center'><h1 className='text-[11.4vw] select-none font-["font1"] text-center text-[#F8FE23] uppercase leading-36 tracking-tighter'>Discover your future!</h1></div>  
       <div className='absolute flex flex-col -translate-x-[50%] -translate-y-[50%] left-[50%] top-[55%] gap-14  text-white'>
           <div className='w-[50%] ml-48'><h4 className='leading-8 tracking-tight text-center text-[2.2vw] font-semibold font-["font1"]'>Find which careers match your personality.</h4></div>
           <div className=''><h3 className='leading-none tracking-tight text-center text-[4.4vw] font-["font2"] font-semibold'>Take the Quiz and receive <br/>recommendations  just <br/> for You!</h3></div>
           <div className=''><h3 className='leading-none text-center text-[6vw] font-["font1"] uppercase text-[#F8FE23] '>you will get:</h3></div>
       </div>
       <img className='w-54 absolute top-[69%] left-[49%]' src="/images/arrow.png" alt="" />

       <div className='w-full absolute  bottom-40  -tranalate-x-[50%] -translate-y-[50%] flex justify-center  gap-10'>
           <div className='w-80 h-84 -rotate-10 top-30 -left-2 bg-white relative'>
            <img className='object-cover p-4' src="/images/top15.png" alt="" />
            <h3 className='absolute text-center text-[1.4vw] font-semibold font-["font1"] leading-none select-none tracking-tight px-[9px]'><span className='text-[#7546FF]'>Top 15+</span> tech and sustainability careers for your personality.</h3>
           </div>
           <div className='w-80 h-84 bg-white top-62 -left-4 rotate-8 relative'>
            <img className='object-cover p-4' src="/images/relevant.png" alt="" />
            <h3 className='absolute text-center text-[1.4vw] font-semibold font-["font1"] leading-none select-none tracking-tight px-4'><span className='text-[#7546FF]'>Relevant degree</span> options for each recommended career!</h3>
            </div>
       </div>
    </div>
  )
}

export default Page4