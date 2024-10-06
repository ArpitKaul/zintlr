import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
      <div className=" border-2 border-red-600 rounded-xl mt-16  flex w-3/4 ">
        <div>
          <img className='w-72 h-72 mt-16' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fids1_A1EMKFttn.png%3Ftr%3Doptimized&w=828&q=75" alt="" />
        </div>
        <div>
        <h1>Indian Data Suite</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
