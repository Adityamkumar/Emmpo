import React from 'react'

const Page7 = () => {
  return (
    <div className='relative w-full h-[290vh]'>
        <div className='absolute top-40 left-40 right-40'><h1 className='text-[7.2vw] select-none uppercase leading-22 tracking-tighter text-center font-["font1"]'>It's great to see you on <span className='text-[#7546ff]'>your journey</span>  to discovering your</h1></div>
        <div className='absolute top-[23%] left-[16%]'><img className='w-[1040px]' src="/images/murcuryTxt.png" alt="" /></div>
        <div className='absolute left-46 top-[55%]'><img className='w-56 -rotate-30' src="/images/reelImg.png" alt="" /></div>
        <div className='absolute top-[52%] left-[26%]'>
            <p className='text-[1.8vw] text-[#7546ff] font-["font1"]'>I kicked off my journey</p>
            <h3 className= 'mt-2 text-[2.3vw] font-["font2"] font-semibold tracking-wide leading-10'>studying Politics and Law, worked as <br/> human rights advocacy - only to realize<br/><span className='font-["font3"] tracking-tight font-bold'>my true passion lies in Creativity.</span></h3>
        </div>
       <div className='absolute top-[45%]  right-34'>
          <div className='relative mt-100'>
            <img className='mr-60 -rotate-15' src="/images/jrimg2.png" alt="" />
            <img className='absolute top-48 left-34 w-60' src="/images/succed.png" alt="" />
              <div className='absolute -top-62 left-58'>
                   <img  className='rotate-18' src="/images/jrImg1.png" alt="" />
                   <h3 className='  relative -top-18 right-20 ml-6 w-full rotate-20 py-2 leading-none text-[1.2vw] font-["font1"] text-center px-4'>Now, I'm all about helping you thrive! </h3>
              </div>
          </div>
       </div>
       <div className='absolute bottom-20 right-50'>
            <h3 className='text-[1.9vw] font-["font1"] text-[#7546ff] tracking-tight'>With years of experience</h3>
            <h3 className='mt-2 text-[2.3vw] font-["font2"] font-semibold leading-10'>providing online education, I've learned <br/> that the key to supporting you is <span className='font-["font3"] font-bold'>helping <br/> you uncover</span> your strengths and passions. </h3>
       </div>
    </div>
  )
}

export default Page7