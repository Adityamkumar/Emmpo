import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useRef } from 'react'

const Navbar = () => {

const navRef = useRef(null)

useGSAP(()=>{
    gsap.from(navRef.current,{
        y:-200,
        duration:1.2,
        delay:0.3,
        opacity:0,
        ease:"power2.inOut"
    })
})

  return (
    <nav ref={navRef} className='fixed top-0 left-0 flex items-center justify-between px-14 w-full h-16 font-["font1"] z-[99]'>
       <div><h3 className='font-semibold text-2xl text-[#416473]'>EMMPO</h3></div>
        <div>
          {
            ["Why?","How?","What?","About us","Say Hello!"].map((item,index)=>(
              <a href="#" className="text-[#416473] text-[13px] px-6 font-medium" key={index}>{item}</a>  
            ))
          }
        </div>

        <div><h3 className='font-semibold text-[19px] text-[#3a4b53]'>Our Courses</h3></div>
    </nav>
  )
}

export default Navbar