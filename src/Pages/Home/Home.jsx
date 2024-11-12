import React, { useEffect } from 'react';
import Pitch from '../pitch/Pitch';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[#0d1d29] h-[43rem] flex flex-col lg:flex-row w-full pt-16 px-5 lg:px-0">
        <div className="flex-1 lg:px-10">
          <div className="lg:ml-10 text-center lg:text-left">
            <h6 className="text-3xl text-white pt-16">Prospect Smarter!</h6>
            <h6 className="text-[#fbbf24] mt-3 text-2xl">10x Your Conversion!</h6>
            <p className="text-base text-white mt-5">
              Unlock the power of <span className="text-[#fbbf24]">Personality intel</span> alongside a rich <span className="text-[#fbbf24]">B2B database</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:ml-10 mt-10 lg:mt-16 space-y-3 lg:space-y-0">
            <input className="bg-[#1a202c] text-white h-10 lg:w-80 w-full pl-4 rounded-lg border-none" type="email" placeholder="Enter your email" />
            <button className="bg-[#fbbf24] text-black h-10 w-full lg:w-28 rounded-lg mt-3 lg:mt-0 lg:ml-2">Start for free</button>
            <button className="bg-transparent text-[#fbbf24] border-0 outline-0 h-10 w-full lg:w-28 rounded-lg mt-3 lg:mt-0 lg:ml-4 hover:bg-[#fbbf24] hover:text-black">Book a Demo</button>
          </div>
          <p className="text-[#a0aec0] mt-2 lg:ml-11 text-center lg:text-left">No credit card required</p>
          <img className="mx-auto lg:ml-10 mt-2" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fhp%2FProductHuntFirstLogo_aYBrOgLO-.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
        </div>
        <div className="hidden lg:block flex-1">
          <img className="w-full mt-16 mx-auto" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcmp%2Fcompanyoverview-100_H3k9nY9MST.webp%3Ftr%3Doptimized&w=640&q=75" alt="" />
        </div>
      </div>

      {/* Globe Section */}
      <div className="text-center mt-16 w-full px-5">
        <h1 className="text-3xl md:text-4xl font-bold font-serif">Precise Phone Numbers. Promising Possibilities</h1>
        <p className="text-xl font-serif mt-7">Find Accurate Phone Numbers of your Target Audience with Advanced Filters</p>
        <img className="w-full max-w-[750px] mt-5 mx-auto" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2FIndia_i8RzDrOIH.png%3FupdatedAt%3D1726752154807%3Ftr%3Doptimized&w=750&q=75" alt="" />
      </div>

      {/* Cards Section */}
      <div className='sm:absolute sm:top-[70rem] sm:left-[48rem] w-auto hidden md:block'>
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

      {/* Indian Data Suite Section */}
      <div className="bg-gray-100 w-full mt-2 px-5"></div>
        <div className="flex flex-col lg:flex-row items-center bg-white border-2 border-red-600 rounded-xl max-w-5xl mx-auto p-4 lg:p-10 space-y-10 lg:space-y-0 lg:space-x-10 mt-28">
          <div className="flex-1">
            <h1 className="font-bold text-2xl lg:text-4xl">Indian Data Suite</h1>
            <p className="text-blue-600 font-semibold text-lg lg:text-2xl mt-3">Unlock contacts, revenue, and intel about any Indian companies instantly.</p>
            <div className="space-y-10 mt-8">
              <div>
                <h1 className="text-lg lg:text-2xl font-semibold">Company revenue and Intel</h1>
                <p className="font-serif mt-4">Use our advanced tools to find GST details, Paid-up capital, Industry, Location, Age, Size, Keywords, Financials, and more.</p>
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-semibold">Smart Extension to find your Next Customer anywhere.</h1>
                <p className="font-serif mt-4">Access Contact Information directly from Zauba Corp, LinkedIn Profiles, and absolutely any website in the world</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <div className="bg-blue-100 rounded-xl w-full h-72 lg:h-80">
              <img className="w-full h-full object-contain pt-3" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fids1_A1EMKFttn.png%3Ftr%3Doptimized&w=828&q=75" alt="" />
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-3xl p-3">
              <h1 className="text-gray-600 font-semibold">Explore access awaits</h1>
              <button className="bg-black text-white rounded-2xl px-5 py-1">Secure Your Spot Now</button>
            </div>
          </div>
        </div>
      

      {/* Experience Section */}
      <div className="flex justify-center mt-10">
        <img className="h-48" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fzml%2FhomePageBanner%2FExperience_in_0uhq9utCV.png%3Ftr%3Doptimized&w=750&q=75" alt="" />
      </div>
      
      {/* Pitch Component */}
      <Pitch />
    </div>
  );
};

export default Home;
