import React, { useEffect } from 'react';
import './Aboutus.css'

const Aboutus = () => {
  // Scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* First Section */}
      <div className="bg-[#0d1d29] w-full h-[55rem] sm:h-[45rem] sm:pt-16 lg:w-[96rem]">
        <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-row">
          <div className="flex flex-col sm:ml-6 ml-10">
            <div className="flex space-x-4 sm:mt-28 md:mt-40 ml-6 md:ml-20 mt-48">
              <h1 className="text-white sm:text-4xl md:text-5xl font-thin font-serif text-4xl">Hello</h1>
              <img className="h-8 sm:h-10" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStyOJduLfHENoGTOAb8dkW2yZlJUgSsuvmjJ3U3QqjnX3KiA_-" alt="" />
            </div>
            <div>
              <h1 className="text-white sm:text-4xl md:text-5xl font-serif pb-4 mt-2 text-4xl ml-6 md:ml-20">We are Team</h1>
              <p className="text-yellow sm:text-4xl md:text-5xl ml-7 font-serif text-4xl md:ml-20">Zintlr</p>
            </div>
            <div className="ml-6 sm:ml-12 mt-5 text">
              <button className="button font-serif md:ml-9">Join us</button>
            </div>
          </div>
          <div className="sm:ml-4 md:ml-9 sm:mt-10 md:mt-24 mt-10">
            <img
              src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75"
              alt=""
              className="sm:h-56  h-56 md:h-80  md:pt-6 md:ml-96  "
            />
          </div>
        </div>
      </div>

      {/* About Zintlr Section */}
      <div className="sm:items-center sm:h-auto h-[50rem] w-full md:w-[96rem] md:flex">
        <div className="sm:ml-0 md:ml-56 sm:mt-5 mt-[5rem] w-full sm:w-auto md:w-[35rem]">
          <h1 className="md:text-2xl font-serif sm:text-xl text-4xl font-semibold ml-6 sm:ml-6 pt-10">About Zintlr</h1>
          <p className="text-gray-500 sm:text-base md:text-lg font-serif text-xl ml-6 sm:ml-8 md:mr-5">
          Zintlr is a B2B SaaS for Sales Intelligence & Prospecting. It is a leading AI Powered Buyer Intelligence platform, combined with curated contact database, revenue intelligence, and other powerful Insights and prospects for niche markets and geo-locations. <br /><br />

          Zintlr also boasts the strongest B2B intel 
          for targeting specific markets like India among other geographies. Zintlr provides in-depth personality insights on your prospects to anticipate objections, tailor your pitch, negotiate better and build stronger relationships with them.
          <br /><br />
          Zintlr currently provides world's strongest database of India and decision makers, extremely useful for Corporates in sales & marketing in various Industry verticals like Banking, Manufacturing, Fintechs, Distributors, and other domains.


          </p>
        </div>
        <div className="sm:ml-6 sm:mt-4 md:ml-16 ml-16">
          <img className='sm:h-72 sm:w-full md:h-96 h-56' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fabout%2Fabout-zintlr-105%3Ftr%3Doptimized&w=640&q=75" alt="" />
        </div>
      </div>

      {/* The Minds Behind Zintlr Section */}
      <div className="flex justify-center items-center bg-[#f0f7ff] sm:h-32 md:h-40 mb-48 sm:mt-[5rem] w-full h-48 ">
        <h1 className="text-xl sm:text-2xl font-bold font-serif">The minds behind Zintlr</h1>
      </div>

      {/* Team Section */}
      <div className="md:flex md:items-center pb-9">
        <div className="sm:ml-5 sm:mt-4 ">
          <img
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fzintlr_team_s4h1QaOHK.jpg%3Ftr%3Doptimized&w=640&q=75"
            alt=""
            className="sm:h-72 sm:w-full md:h-96 shadow-custom ml-4 cursor-pointer sm:rounded-xl md:rounded-tl-extraLarge md:rounded-br-extraLarge hover:scale-105 transition-transform duration-300 rounded-3xl h-56 max-w-max md:ml-10"
          />
        </div>
        <div className="sm:ml-8 sm:mt-8 md:ml-48 ml-5 sm:w-full md:w-1/3 ">
          <h1 className="md:text-4xl sm:text-2xl font-bold font-serif text-4xl mt-9">The Team</h1>
          <p className="text-gray-500 mt-3 sm:text-sm md:text-2xl text-2xl  ">
          Zintlr was founded with the mission of transforming the way businesses connect with their customers. Our team is a diverse group of passionate individuals united by a common goal: to create the most powerful sales intelligence tool on the market. By providing our users with the best data and insights, we empower them to build stronger relationships, close more deals, and achieve their business objectives.
          </p>
        </div>
      </div>

      {/* Zintlr For Startups Section */}
      <div className="mt-10 bg-yellow w-full sm:h-[35rem] md:h-[56rem] h-[65rem]">
        <div className="flex md:flex-row ">
          <div className="ml-12 mt-12 hidden md:block">
            <img className=" hidden md:block h-[25rem] w-[30rem]  " src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fprosimage-096_hxs5cydkhM.png%3Ftr%3Doptimized&w=640&q=75" alt="" />
          </div>
          <div className="bg-white md:w-[55rem] md:h-[47rem] mt-10 rounded-xl h-[59rem] ml-6  ">
            <div className="md:flex sm:items-center">
              <div className="w-80 sm:ml-10 ml-1 sm:w-full">
                <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fspaceship-095_tbKYdcOrOv.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
                <h1 className="sm:text-xl md:text-2xl font-semibold">Zintlr For Startups</h1>
                <p className="sm:text-base md:text-lg mt-3 text-gray-400">We believe in empowering growing businesses and consistently support them in their growth journey. Being a startup, we understand the importance of community. Connect with us to claim benefits and join our business community.</p>

                <img className="md:mt-32 mt-12" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fsupport-099_432SZ-khLu.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
                <h1 className='sm:text-xl md:text-2xl font-semibold mt-3'>Bringing the best Data for you</h1>
                <p className="sm:text-sm md:text-lg text-gray-400">Our team consistently works on billions of data points from thousands of sources to bring out the best quality intel info, constantly updated, tailored as per your needs.</p>
              </div>

              <div className="w-80 sm:ml-10 ml-1 sm:w-full md:ml-32 md:mt-16">
                <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fgrouppayment-097_NTktF2FkI.png%3Ftr%3Doptimized&w=32&q=75xx`" alt="" />
                <h1 className="sm:text-xl md:text-2xl font-semibold">Navigate to your next customer</h1>
                <p className="sm:text-base md:text-lg mt-3 text-gray-400">Our vision is to make the entire customer identification to customer acquisition seamless and efficient for you. As part of our mission to empower the entire sales community, we strive to build engineering solutions to make sales, talent acquisition, marketing and bring next generation of evolution.</p>
                <img className="mt-12" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fpros%2Fapp-098_vQAzFH3ypL.png%3Ftr%3Doptimized&w=32&q=75" alt="" />
                <h1 className='sm:text-xl md:text-2xl font-semibold'>We respect privacy & follow compliances</h1>
                <p className="sm:text-sm md:text-lg text-gray-400">Our team consistently works on billions of data points from thousands of sources to bring out the best quality intel info, constantly updated, tailored as per your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Section */}
     
    </div>
  );
}

export default Aboutus;
