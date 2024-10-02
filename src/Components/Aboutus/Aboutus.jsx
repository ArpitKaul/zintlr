import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Aboutus.css'

const Aboutus = () => {
  const marqueesRef = useRef([]);

  useEffect(() => {
    const handleScroll = (dets) => {
      if (dets.deltaY > 0) {
        marqueesRef.current.forEach((marquee) => {
          gsap.to(marquee, {
            x: '-200%',
            duration: 4,
            repeat: -1,
            ease: 'none',
          });
        });
        gsap.to('.marque img', {
          rotate: 180,
        });
      } else {
        marqueesRef.current.forEach((marquee) => {
          gsap.to(marquee, {
            x: '0%',
            duration: 4,
            repeat: -1,
            ease: 'none',
          });
        });
        gsap.to('.marque img', {
          rotate: 0,
        });
      }
    };
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#0d1d29] md:w-full w-[60rem] md:h-[35rem] h-2/3 ">
        <div className="md:flex">
          <div className="flex flex-col ml-[15rem]">
            <div className="flex space-x-4 md:mt-40 ml-20 mt-72 ">
              <h1 className="text-white md:text-5xl font-thin font-serif text-8xl">Hello</h1>
              <img className=" h-24 mt-1 md:h-10" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStyOJduLfHENoGTOAb8dkW2yZlJUgSsuvmjJ3U3QqjnX3KiA_-"alt=""   
              />
            </div>
            <div>
              <h1 className="text-white md:text-5xl md:ml-20 font-serif pb-4 mt-6 text-8xl">We are Team</h1>
              <p className="text-yellow md:text-5xl ml-20 font-serif text-8xl">Zintlr</p>
            </div>
            <div className="ml-20">
              <button className="md:w-20 bg-yellow rounded-lg md:h-8 mt-6 h-24 w-56 text-6xl md:text-2xl ">Join us</button>
            </div>
          </div>
          <div className="md:ml-9 md:mt-20 mt-56">
            <img
              src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75"
              alt=""
              className="md:h-80 ml-[12rem] h-96 "
            />
          </div>
        </div>
      </div>
      <div id='move' >
    <div className="marque"  ref={(el) => marqueesRef.current[0] = el}>
        <h1 className='font-serif'>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque" ref={(el) => marqueesRef.current[1] = el}>
        <h1 className='font-serif' >We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[2] = el}>
        <h1 className='font-serif'>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[3] = el}>
        <h1 className='font-serif'>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
    <div className="marque"  ref={(el) => marqueesRef.current[4] = el}>
        <h1 className='font-serif'>We are Team Zintlr</h1>
        <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
    </div>
   </div>
      <div className="md:flex bg-[#f0f7ff] md:h-[35rem] h-[100rem]  mt-8 w-[60rem] md:w-[96rem]">
        <div className="ml-16 mt-8">
          <img className='md:h-96 pt-32 ml-[5rem]'
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fabout%2Fabout-zintlr-105%3Ftr%3Doptimized&w=640&q=75"
            alt=""
          />
        </div>
        <div className="md:ml-56 ml-16 md:mt-8 mt-[5rem]">
          <h1 className="md:text-2xl font-serif text-7xl font-semibold">About Zintlr</h1>
          <p className="text-gray-500 mt-10 md:text-lg font-serif text-3xl">
          Zintlr is a B2B SaaS for Sales Intelligence & Prospecting. It is a leading AI <br /> Powered Buyer Intelligence platform, combined with curated contact <br /> database, revenue intelligence, and other powerful Insights and prospects <br /> for niche markets and geo-locations.<br/><br />

          Zintlr also boasts the strongest B2B intel for targeting specific markets like <br />India among other geographies. Zintlr provides in-depth personality <br /> insights on your prospects to anticipate objections, tailor your pitch, <br />negotiate better and build stronger relationships with them. <br /><br />

          Zintlr currently provides world's strongest database of India and  <br /> makers, extremely useful for Corporates in sales & marketing in various <br /> Industry verticals like Banking, Manufacturing, Fintechs, Distributors,<br /> and other domains.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#f0f7ff] md:h-40 mt-[10rem] md:mt-[5rem] w-[60rem] md:w-[96rem] h-56 ">
        <h1 className="text-5xl font-bold font-serif ">The minds behind Zintlr</h1>
      </div>
      <div className="md:flex md:items-center ">
        <div className="md:ml-5 mt-12 ml-72">
          <img
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fzintlr_team_s4h1QaOHK.jpg%3Ftr%3Doptimized&w=640&q=75"
            alt=""
            className="rounded-lg md:h-96  ml-48    "
          />
        </div>
        <div className="md:ml-16 ml-56">
          <h1 className="text-4xl font-bold font-serif">The Team</h1>
          <p className="text-gray-500 mt-3 md:text-2xl text-6xl ">
          Zintlr was founded with the mission of transforming <br />the way businesses connect with their customers. <br />Our team is a diverse group of passionate <br />individuals united by a common goal: to create the <br /> most powerful sales intelligence tool on the market. <br /> By providing our users with the best data and <br /> insights, we empower them to build stronger <br /> relationships, close more deals, and achieve their <br />business objectives
          </p>
        </div>
      </div>
      <div className='flex mt-16 ml-16'>
    <div className="box1 h-[250px] w-[40%] border-2 border-black rounded-[50px] shadow-[0_15px_0_black] p-[30px] ml-[3vw]">
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fspaceship-095_tbKYdcOrOv.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
        <h1>Zintlr For Startups</h1>
        <p>We believe in empowering growing business and consistently support them in their growth journey. Being a startup, we understand the importance of community. Connect with us to claim benefits and join our business community.[Contact us]</p>
    </div>
    <div className=" h-[250px] w-[40%] border-2 border-black rounded-[50px] shadow-[0_15px_0_black] p-[30px] ml-[3vw]">
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fgrouppayment-097_NTktF2FkI.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
        <h1>Navigate to your next customer</h1>
        <p>Our vision is to make the entire customer identification to customer acquisition seamless and efficient for you. As part of our mission to empower the entire sales community, we strive to build engineering solutions to make sales, talent acquisition, marketing and bring next generation of evolution.</p>
    </div>
   </div>   
   <div className="flex mt-10 ml-16">
    <div className="h-[250px] w-[40%] border-2 border-black rounded-[50px] shadow-[0_15px_0_black] p-[30px] ml-[3vw]">
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fsupport-099_432SZ-khLu.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
        <h1>Bringing the best Data for you</h1>
        <p>Our team consistently works on billions of data points from thousands of sources to bring out the best quality intel info, constantly updated, tailored as per your needs.</p>
    </div>
    <div className="boxx2 h-[250px] w-[40%] border-2 border-black rounded-[50px] shadow-[0_15px_0_black] p-[30px] ml-[3vw]">
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fapp-098_vQAzFH3ypL.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
        <h1>We respect privacy & follow compliances</h1>
        <p>We respect any requests regarding the data we obtain and the data available for our users. Adhering to compliance and requests is our top priority and we are serious about creating business opportunities keeping the laws and respect of any privacy requests in mind through the privacy center.</p>
    </div>
   </div>
    </div>
  );
};

export default Aboutus;
