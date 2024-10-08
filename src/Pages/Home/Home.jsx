import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Pitch from '../pitch/Pitch';

const Home = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      transformOrigin: "0 50% 0",
      ease: "back",
      stagger: 1
    });
  });

  return (
    <div>
      <div className="bg-[#0e1525] h-[36rem] flex">
        <div>
          <div className="ml-10">
            <h6 className="text-6xl text-white pt-16" ref={gsapRef}>Prospect Smarter!</h6>
            <h6 className="text-[#fbbf24] mt-3 text-5xl">10x Your Conversion!</h6>
            <p className="text-base text-white mt-5">
              Unlock the power of <span className="text-[#fbbf24]">Personality intel</span> alongside a rich <span className="text-[#fbbf24]"><br />B2B database</span>
            </p>
          </div>
          <div className="flex ml-10 mt-16">
            <input className="bg-[#1a202c] text-white h-10 w-80 pl-4 rounded-lg border-none" type="email" placeholder="Enter your email" />
            <button className="bg-[#fbbf24] text-black h-10 w-28 rounded-lg ml-2">Start for free</button>
            <button className="ml-4 bg-transparent text-[#fbbf24] border-0 outline-0 h-10 w-28 rounded-lg hover:bg-[#fbbf24] hover:text-black">Book a Demo</button>
          </div>
          <div className="mt-1">
            <p className="text-[#a0aec0] ml-11">No credit card Required</p>
          </div>
          <div>
            <img className="ml-10 mt-2" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fhp%2FProductHuntFirstLogo_aYBrOgLO-.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
          </div>
        </div>
      </div>
      <div className='text-center mt-16 '>
        <h1 className='text-4xl font-bold font-serif'>Precise Phone Numbers. Promising Possibilities</h1>
        <p className='text-xl font-serif '>Find Accurate Phone Numbers of your Target Audience with Advanced Filters</p>
        <img className='ml-96' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2FIndia_i8RzDrOIH.png%3FupdatedAt%3D1726752154807%3Ftr%3Doptimized&w=750&q=75" alt="" />
      </div>
      <div >
        <div className=" border-2 border-blue-600 rounded-xl mt-16 h-32 flex w-[38rem]">
          <div>
          <h1 className='ml-16 text-blue-600 font-bold mt-4 font-serif text-xl'>Curated database</h1>
          <p className='ml-16 text-lg font-serif'>Access millions of <span className='font-semibold'>verified Indian</span></p>
          <p className='text-lg font-serif ml-16'><span className='font-semibold'>Buisness</span>and<span className='font-semibold'>their Decison makers</span></p>
          </div>
          <div>
          <img className='h-24 w-24 mt-6 ml-24' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        </div>
        <div className=" md:w-[40%] border-2 border-blue-600 rounded-xl mt-16  w-[40rem] h-32 flex">
          <div>
          <h1 className='ml-16 text-blue-600 font-bold mt-4 font-serif text-xl'>Targeted lead generation</h1>
          <p className='ml-16 text-lg font-serif'>Identifying <span className='font-semibold'>key decision-makers</span>and their</p>
          <p className='text-lg font-serif ml-16'><span className='font-semibold'>Phone Numbers</span>with<span className='font-semibold'>dvanced filters</span></p>
          </div>
          <div>
          <img className='h-24 w-24 mt-6 ml-24' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        </div>
        <div className=" md:w-[40%] border-2 border-blue-600 rounded-xl mt-16  w-[40rem] h-32 flex">
          <div>
          <h1 className='ml-16 text-blue-600 font-bold mt-4 font-serif text-xl'>Accurate & up-to-date data</h1>
          <p className='ml-16 text-lg font-serif'>Get real-time information on company  <span className='font-semibold'>size,</span></p>
          <p className='text-lg font-serif ml-16'><span className='font-semibold'>industry, revenue,</span>and<span className='font-semibold'>more.</span></p>
          </div>
          <div>
          <img className='h-24 w-24 mt-6 ml-24' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        </div>
      </div>
      <div className=" border-2 border-red-600 rounded-xl mt-16  flex w-3/4 h-[33rem] ml-56">
       <div>
       <div className='bg-blue-100 h-80 w-96 ml-16 mt-9 rounded-xl'>
          <img className='w-72 h-72 pt-3 ml-16 m' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fids1_A1EMKFttn.png%3Ftr%3Doptimized&w=828&q=75" alt="" />
        </div>
       <div className='flex bg-blue-50 w-96  rounded-3xl h-16 mt-10 ml-16'>
       <div className='' >
          <h1 className='ml-2 mt-4 text-gray-600 font-semibold'>Explore access awaits</h1>
        </div>
        <div className='bg-black w-48 h-8 rounded-2xl ml-6 mt-4 '>
          <h1 className='text-white ml-3'>Secure Your Sport Now</h1>
        </div>
       </div>
       </div>
        <div className='ml-32 mt-10'>
        <h1 className='font-bold text-4xl'>Indian Data Suite</h1>
        <p className='text-blue-600 font-semibold text-2xl mt-3'>Unlock contacts, revenue and intel about any  <br />Indian companies instantly.</p>
        <div className='w-80  text-blue-600 mt-3 ml-16'>
        <h1 className='text-xl font-semibold  '>Company revenue and Intel</h1>
        <p className='font-serif mt-4'>Use our advanced to find GST details, Paid-up capital, Industry, Location, Age, Size, Keywords, Financials and more.</p>
        <h1 className='text-xl font-semibold mt-9 '>Smart Extension to find your Next Customer anywhere.</h1>
        <p className='text-serif mt-4'>Access Contact Information directly from Zauba Corp, LinkedIn Profiles, and absolutely any website in the world</p>
        </div>
        </div>
      </div>
      <div className=' flex justify-center'>
        <img src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fdirection_zJ6ULSWI7.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
      </div>
      <Pitch/>
    </div>
  );
};

export default Home;
