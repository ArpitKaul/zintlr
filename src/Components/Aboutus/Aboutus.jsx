import React, { useEffect, useRef } from 'react'
import './Aboutus.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Aboutus = () => {

    const marqueesRef = useRef([]);
    useEffect(()=>{
        const handleScroll = (dets)=>{
            if(dets.deltaY>0){
            marqueesRef.current.forEach((marquee)=>{
                gsap.to(marquee,{
                    x: '-200%',
                    duration:4,
                    repeat:-1,
                    ease:'none'
                });
            }); 
                gsap.to('.marque img',{
                    rotate: 180,
                });
           }else{
            marqueesRef.current.forEach((marquee)=>{
                gsap.to(marquee,{
                    x: '0%',
                    duration: 4,
                    repeat: -1,
                    ease: 'none',
                  });
                });
                gsap.to('.marque img',{
                    rotate:0,
                })
            }
        };
        window.addEventListener('wheel' , handleScroll);

        return()=>{
            window.removeEventListener('wheel', handleScroll);
        };
    },[]);
  return (
   <div>
    <div className='main'>
     <div className='header flex'>
      <div className='Header'>
        <div className="about">
            <h1>Hello</h1>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStyOJduLfHENoGTOAb8dkW2yZlJUgSsuvmjJ3U3QqjnX3KiA_-" alt="" />
        </div>
        <div className='about-us'>
        <h1>We are Team</h1>
        <p>Zintlr</p>
        </div>
        <div className='button'>
            <button>Join us</button>
        </div>
      </div>
      <div className='image'>
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75" alt="" />
      </div>
    </div>
   </div>
   <div id='move' >
    <div className="marque"  ref={(el) => marqueesRef.current[0] = el}>
        <h1>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque" ref={(el) => marqueesRef.current[1] = el}>
        <h1>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[2] = el}>
        <h1>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[3] = el}>
        <h1>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[4] = el}>
        <h1>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
   </div>
   <div className='zintlr'>
    <div className='image1'>
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fabout%2Fabout-zintlr-105%3Ftr%3Doptimized&w=640&q=75" alt="" />
    </div>
    <div className='about1'>
        <h1>About Zintlr</h1>
        <p></p>
    </div>
   </div>
   </div>
  )
}
export default Aboutus
