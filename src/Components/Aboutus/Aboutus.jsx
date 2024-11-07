import React, { useEffect, useRef } from 'react';
import './Aboutus.css'
const Aboutus = () => {

 // Scroll to the top when the component is rendered
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
      
      <div className="bg-[#0d1d29] md:w-[96rem] md:h-[35rem] h-[55rem] w-[27rem] md:pt-16 ">
        <div className="md:flex">
          <div className="flex flex-col ml-10">
            <div className="flex space-x-4 md:mt-40 ml-20 mt-48 ">
              <h1 className="text-white md:text-5xl font-thin font-serif text-4xl">Hello</h1>
              <img className=" h-10  md:h-10" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStyOJduLfHENoGTOAb8dkW2yZlJUgSsuvmjJ3U3QqjnX3KiA_-"alt=""   
              />
            </div>
            <div>
              <h1 className="text-white md:text-5xl md:ml-20 font-serif pb-4 mt-2 text-4xl ml-20">We are Team</h1>
              <p className="text-yellow md:text-5xl ml-[5.5rem] font-serif text-4xl ">Zintlr</p>
            </div>
            <div className="ml-20 mt-5 text">
           <button class="button font-serif ">join us</button>

            </div>
          </div>
          <div className="md:ml-9 md:mt-20 mt-10">
            <img
              src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75"
              alt=""
              className="md:h-80 ml-10 h-56 md:ml-72 "
            />
          </div>
        </div>
      </div>
      
      <div className="md:flex  md:h-[35rem] h-[50rem]   w-[27rem] md:w-[96rem]">
       
        <div className="md:ml-56  md:mt-8 mt-[5rem] w-[27rem] md:w-[35rem]">
          <h1 className="md:text-2xl font-serif text-4xl font-semibold ml-32 pt-10 " >About Zintlr</h1>
          <p className="text-gray-500 mt-10 md:text-lg font-serif text-xl ml-12">
          Zintlr is a B2B SaaS for Sales Intelligence & Prospecting. It is a leading AI  Powered Buyer Intelligence platform, combined with curated contact  database, revenue intelligence, and other powerful Insights and prospects  for niche markets and geo-locations

          Zintlr also boasts the strongest B2B intel for targeting specific markets like India among other geographies. Zintlr provides in-depth personality <br /> insights on your prospects to anticipate objections, tailor your pitch, negotiate better and build stronger relationships with them. 

          Zintlr currently provides world's strongest database of India and   makers, extremely useful for Corporates in sales & marketing in various  Industry verticals like Banking, Manufacturing, Fintechs, Distributors, and other domains.
          </p>
        </div>
        <div className="ml-16 mt-8">
          <img className='md:h-96  h-56'
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fabout%2Fabout-zintlr-105%3Ftr%3Doptimized&w=640&q=75"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#f0f7ff] md:h-40 mt-72 md:mt-[5rem] w-[27rem] md:w-[96rem] h-48  " >
        <h1 className="text-2xl font-bold font-serif "  >The minds behind Zintlr</h1>
      </div>
      <div className="md:flex md:items-center ">
        <div className="md:ml-5 mt-12 ml-16" >
          <img
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fzintlr_team_s4h1QaOHK.jpg%3Ftr%3Doptimized&w=640&q=75"
            alt=""
            className=" md:h-96 shadow-custom ml-4 cursor-pointer md:rounded-tl-extraLarge md:rounded-br-extraLarge hover:scale-105 transition-transform duration-300 rounded-3xl h-56 max-w-max md:ml-10"    
          />
        </div>
        <div className="md:ml-48 ml-5 md:w-1/3 w-[25rem] ">
          <h1 className="md:text-4xl font-bold font-serif text-4xl mt-9">The Team</h1>
          <p className="text-gray-500 mt-3 md:text-2xl text-2xl ">
          Zintlr was founded with the mission of transforming the way businesses connect with their customers. Our team is a diverse group of passionate individuals united by a common goal: to create the  most powerful sales intelligence tool on the market.  By providing our users with the best data and  insights, we empower them to build stronger  relationships, close more deals, and achieve their business objectives
          </p>
        </div>
      </div>
   <div className='mt-10 bg-yellow w-full md:h-[35rem] h-[60rem] '>
    <div className='flex'>
      <div>
        <img className='w-96 h-72 ml-20 mt-32 hidden md:block' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fprosimage-096_hxs5cydkhM.png%3Ftr%3Doptimized&w=640&q=75" alt="" />
      </div>
      <div className='bg-white md:w-[60rem] md:h-[30rem] mt-10 rounded-xl ml-6 h-[55rem] w-96'>
        <div className='md:flex'>

          
          <div className='w-80 md:ml-16 ml-6'>
            <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fspaceship-095_tbKYdcOrOv.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
            <h1 className='text-xl font-semibold'>Zintlr For Startups</h1>
            <p className='mt-3'>We believe in empowering growing business and consistently support them in their growth journey. Being a startup, we understand the importance of community. Connect with us to claim benefits and join our business community.</p>
            <img className='mt-12' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fsupport-099_432SZ-khLu.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
            <p>Our team consistently works on billions of data points from thousands of sources to bring out the best quality intel info, constantly updated, tailored as per your needs.</p>
          </div>


          <div className='w-80 md:ml-32 ml-6'>
          <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fgrouppayment-097_NTktF2FkI.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
            <h1 className='text-xl font-semibold'>Zintlr For Startups</h1>
            <p className='mt-3'>We believe in empowering growing business and consistently support them in their growth journey. Being a startup, we understand the importance of community. Connect with us to claim benefits and join our business community.</p>
            <img className='mt-12' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fsupport-099_432SZ-khLu.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
            <p>Our team consistently works on billions of data points from thousands of sources to bring out the best quality intel info, constantly updated, tailored as per your needs.</p>
          </div>
        </div>
      </div>
    </div>
   </div>
    </div>
  );
};
export default Aboutus;