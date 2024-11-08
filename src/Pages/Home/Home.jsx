import React, { useEffect } from 'react';
import Pitch from '../pitch/Pitch';

const Home = () => {

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='md:w-screen'>
      <div  className="bg-[#0d1d29] h-[43rem] md:flex w-[27rem] md:w-screen pt-16 ">
        <div className=''>
          <div className="ml-10">
            <h6 className="text-3xl text-white pt-16 " >Prospect Smarter!</h6>
            <h6 className="text-[#fbbf24] mt-3 text-2xl">10x Your Conversion!</h6>
            <p className="text-base text-white mt-5">
              Unlock the power of <span className="text-[#fbbf24]">Personality intel</span> alongside a rich <span className="text-[#fbbf24]"><br />B2B database</span>
            </p>
          </div>
          <div className="md:flex ml-10 mt-16">
            <input className="bg-[#1a202c] text-white h-10 md:w-80 pl-4 rounded-lg border-none" type="email" placeholder="Enter your email" />
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
        <div>
          <img className=' hidden md:block ml-44 mt-16 ' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75" alt="" />
        </div>
      </div>
      {/* globe image */}
      <div className='text-center mt-16 md:w-screen w-[27rem] '>
        <h1 className='md:text-4xl text-3xl font-bold font-serif'>Precise Phone Numbers. Promising Possibilities</h1>
        <p className='text-xl font-serif mt-7  '>Find Accurate Phone Numbers of your Target Audience with Advanced Filters</p>
        <img className='md:ml-72 mt-5' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2FIndia_i8RzDrOIH.png%3FupdatedAt%3D1726752154807%3Ftr%3Doptimized&w=750&q=75" alt="" />
      </div>
      {/* /cards */}
      <div className='absolute top-[70rem] left-[48rem] w-auto hidden md:block'>
        <div className=" border-2 border-blue-600 rounded-xl mt-16 h-32 flex w-[38rem] bg-white">
          <div className='ml-5 border-l-4 border-blue-600 my-5 rounded'>
          <h1 className='ml-16 text-blue-600 font-bold font-serif text-xl'>Curated database</h1>
          <p className='ml-16 text-lg font-serif'>Access millions of <span className='font-semibold'>verified Indian</span></p>
          <p className='text-lg font-serif ml-16'><span className='font-semibold'>Buisness</span>and<span className='font-semibold'>their Decison makers</span></p>
          </div>
          <div>
          <img className='h-24 w-24 mt-6 ml-24' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        </div>
        <div className=" border-2 border-blue-600 rounded-xl mt-16  right-40 w-[40rem] h-32 flex bg-white relative">
          <div>
          <h1 className='ml-16 text-blue-600 font-bold mt-4 font-serif text-xl'>Targeted lead generation</h1>
          <p className='ml-16 text-lg font-serif'>Identifying <span className='font-semibold'>key decision-makers</span>and their</p>
          <p className='text-lg font-serif ml-16'><span className='font-semibold'>Phone Numbers</span>with<span className='font-semibold'>advanced filters</span></p>
          </div>
          <div>
          <img className='h-24 w-24 mt-6 ml-24' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        </div>
        <div className=" border-2 border-blue-600 rounded-xl mt-16 relative right-60 w-[40rem] h-32 flex bg-white">
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
      <div className='absolute top-[76rem] -z-20 md:bg-gray-100 h-[78rem] md:w-screen '></div>
      <div className=" border-2 border-red-600 rounded-xl md:mt-60 bg-white md:flex md:w-3/4 h-[55rem] md:ml-56 ml-7 w-96 md:h-[45rem] mt-32">
        <div className='md:ml-32 mt-10 ml-5'>
        <h1 className='font-bold md:text-4xl text-xl'>Indian Data Suite</h1>
        <p className='text-blue-600 font-semibold md:text-2xl mt-3'>Unlock contacts, revenue and intel about any  <br />Indian companies instantly.</p>
        <div className='md:w-80  text-blue-600 mt-8 flex flex-row md:flex md:flex-col'> 
        <div className='w-56 h-16 md:w-80' >
          <h1 className='text-lg md:text-2xl font-semibold  '>Company revenue and Intel</h1>
          <p className='font-serif mt-4'>Use our advanced to find GST details, Paid-up capital, Industry, Location, Age, Size, Keywords, Financials and more.</p>
        </div>
          <div className='ml-1 w-56 h-16 md:w-80'>
          <h1 className='md:text-2xl font-semibold md:mt-32  '>Smart Extension to find your Next Customer anywhere.</h1>
          <p className='text-serif mt-4'>Access Contact Information directly from Zauba Corp, LinkedIn Profiles, and absolutely any website in the world</p>
          </div>
        </div>
        </div>
        <div>
       <div className='bg-blue-100 md:h-80 md:w-96 w-[23rem] h-60  ml-2 mt-56 md:mt-48  rounded-xl'>
          <img className='md:w-72 md:h-72 pt-3 md:ml-16 ml-16 h-56' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fids1_A1EMKFttn.png%3Ftr%3Doptimized&w=828&q=75" alt="" />
        </div>
       <div className='flex bg-blue-50 md:w-96  rounded-3xl h-16 mt-10 md:ml-16 w-[23rem]'>
       <div className='' >
          <h1 className='md:ml-2 mt-4 text-gray-600 font-semibold text-sm'>Explore access awaits</h1>
        </div>
        <div className='bg-black md:w-48 w-[19vh]  h-8  rounded-2xl md:ml-6 md:mt-4 ml-12 mt-4'>
          <h1 className='text-white ml-3 text-sm mt-1'>Secure Your Sport Now</h1>
        </div>
       </div>
       </div>
      </div>
      <div className=' flex justify-center mr-16 md:ml-96'>
        <img  className="h-48"src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fdirection_zJ6ULSWI7.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
      </div>
      <Pitch/>
    </div>
  );
};

export default Home;
