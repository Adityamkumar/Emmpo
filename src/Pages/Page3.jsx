import { useEffect, useRef} from 'react'


const Page3 = () => {

const page3Ref = useRef(null)


useEffect(()=>{
    const elem=document.querySelectorAll('.elem')
 
    elem.forEach((elem)=>{
        elem.addEventListener("click",()=>{
          let img=elem.getAttribute("data-image")
               page3Ref.current.style.backgroundImage=`url(${img})`
        })
    })
})



  return (
    <div style={{backgroundImage:'url(/images/multi.png)'}}   ref={page3Ref} className=' mt-20 w-full h-[190vh] bg-center  bg-cover  object-contain'>
       <h1 className='text-[10vw] py-40 font-["font1"] text-center uppercase leading-30 tracking-tighter text-zinc-200 mix-blend-difference'>Explore exciting careers like:</h1> 
       <div className='w-full flex flex-col gap-10 -mt-10 items-center justify-center'>
       <div className='elem cursor-pointer flex justify-center items-center gap-10' data-image="/images/multi.png">
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>[Multimedia </h1>
                   <img className='w-64 h-100  border-8 object-cover border-[#F8FE23] hidden'  src="/images/multi2.png" alt="" />
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>artist]</h1>
             </div>

             <div className='elem cursor-pointer flex justify-center items-center gap-10' data-image="/images/sustain.png">
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>[Sustainable </h1>
                <img className='w-64 h-100  border-8 object-cover border-[#F8FE23] hidden  ' src="/images/sustain.png" alt="" />
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>fashion]</h1>
             </div>


             <div className='elem cursor-pointer flex justify-center items-center gap-10' data-image="/images/renew.png">
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>[Renewable </h1>
                <img className='w-64 h-100  border-8 object-cover border-[#F8FE23]  hidden ' src="/images/renew.png" alt="" />
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>energy]</h1>
             </div>


             <div className='elem cursor-pointer flex justify-center items-center gap-10' data-image="/images/environ.png">
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>[Environmental </h1>
                <img className='w-64 h-100  border-8 object-cover border-[#F8FE23]  hidden ' src="/images/environ.png" alt="" />
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>marketing]</h1>
             </div>


             <div className='elem cursor-pointer flex justify-center items-center gap-10' data-image="/images/green.png">
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>[Green </h1>
                <img className='w-64 h-100  border-8 object-cover border-[#F8FE23]  hidden ' src="/images/green.png" alt="" />
                <h1 className='text-[4.8vw] text-zinc-200 mix-blend-lighten font-["font1"]  leading-16'>entrepreneurship]</h1>
             </div>

        </div> 
        
    </div>
  )
}

export default Page3