import React from 'react'
import './Data.css'
import { useEffect } from 'react'
import FAQ from './Faq'
const Data = () => {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

        {/* Header */}
      <div className='bg-[#0e1525] h-[36rem] md:flex w-[27rem] md:w-screen'>
        <div className='md:flex'>
            <div className='md:ml-28 md:mt-48 md:w-2/4 ml-8 pt-32 md:pt-0'>
                <h1 className='text-white md:text-6xl text-3xl font-serif '>End your search for a
                trusted B2B database</h1>
                <p className='text-white md:mt-9'>The gold standard for reliable, high-quality B2B data. Experience the Z-factor firsthand.</p>
                <button class="button font-serif md:mt-16 mt-6 ">Start for free</button>
            </div>'
            <div className='md:mt-32 md:ml-32 ml-20 '>
                <img className='md:w-96 md:h-96 w-72 h-72' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Four_data%2FOurDataOverview_N7OC3ED6B.png%3Ftr%3Doptimized&w=640&q=75" alt="" />
            </div>
        </div>
      </div>

       {/* zintlr get data */}


      <div className=' md:mt-10 mt-32 flex justify-center md:h-96 h-[32rem]'>
        <div className='md:ml-9'>
        <h1 className='md:text-5xl font-serif text-2xl ml-7 '>How Zintlr gets it’s data</h1>
        <p className='text-sm md:ml-16 '> Zintlr’s B2B database results from its proprietary machine <br /> learning algorithms and advanced technologies.</p>

        <div className='bg-blue-50 md:w-[29rem] md:h-24 mt-10 rounded-xl w-80  h-32 ml-5'>
        <p className='text-lg ml-2 md:pt-0 pt-2' >We collect data from various public domains, third-party suppliers, a dedicated research department and our Z-Community contributors</p>
        </div>
        <div className='bg-blue-50 md:w-[29rem] md:h-24 mt-10 rounded-xl w-80 ml-5 h-32'>
        <p className='text-lg ml-2 md:pt-0 pt-2' >The data from multiple sources are cross-verified to give you the most accurate and verified data to empower your business.</p>
        </div>
        </div>
      </div>

       {/* Zintlr Data */}
      <div className='bg-blue-50 md:h-[20rem]  w-[27rem] md:w-screen h-[44rem]'>
        <h1 className='md:text-5xl ml-32 font-serif font-semibold mt-10 pt-9 text-3xl'>Zintlr’s Data</h1>
        <div className='md:flex ml-8'>
            <div className='bg-white md:w-96 md:h-56 mt-10 rounded-xl w-80 md:ml-16 shadow-xl cursor-pointer ml-5  '>
                <img className='w-16 ml-8 mt-5' src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-menu-option-icon-collection-in-glyph-style-png-image_5234824.png" alt="" />
                <p className='text-2xl font-semibold font-serif ml-12'>48+ Billion Data <br /> Touchpoints processed</p>
            </div>
            <div className='bg-white md:w-96 md:h-56 mt-10 rounded-xl w-80 md:ml-16 ml-5  shadow-xl cursor-pointer '>
                <img className='w-12 ml-8 mt-5' src="https://static.vecteezy.com/system/resources/previews/046/280/422/non_2x/chart-icon-symbol-image-for-data-statistic-analysis-illustration-vector.jpg" alt="" />
                <p className='text-2xl font-semibold font-serif ml-12 mt-5'>550+ Million Data <br /> Touchpoints Verified</p>
            </div>
            <div className='bg-white md:w-96 md:h-56 mt-10 rounded-xl w-80 md:ml-16 shadow-xl cursor-pointer ml-5  '>
                <img className='w-16 ml-8 mt-5' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIpqVBhfQ2cfvovb-Sv_pzTwUt_L18qeGvQ6vBmXpS8yor6fzc" alt="" />
                <p className='text-2xl font-semibold font-serif ml-12'>100+ Million Data Live<br />and Increasing <br /> everyday</p>
            </div>
        </div>
      </div>
       {/* privacy */}

      <div className='h-2/4'>
        <div className='md:flex mt-16 md:ml-56 ml-4'>
            <div>
            <img className='w-96 h-96' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Four_data%2FDataSecurityPrivacy_uATChmsme.png%3Ftr%3Doptimized&w=640&q=75" alt="" />
            </div>
            <div className='md:w-2/4 mt-16 md:ml-32 w-96 ml-6'>
                <h1 className='text-5xl font-semibold'>Data Security & <br />Privacy</h1>
                <p className='text-xl mt-5'>Rest assured knowing that our data collection practices prioritize compliance, providing you with the most reliable and secure business data. Our stringent data privacy and security protocols are in place for your peace of mind.</p>
            </div>   
        </div>
      </div>

      <div className='bg-yellow md:h-[20rem]  w-[27rem] md:w-screen h-[28rem] flex justify-center mt-12'>
      <div className='bg-blue-50 md:w-[47rem] md:h-48 mt-10 rounded-2xl w-80  h-80 ml-5 pl-5'>
        <h1 className='text-2xl font-semibold mt-6'>Zintlr Community</h1>
        <p className='mt-5'>Users enroll to Zintlr community & validate their data present in database.</p>
        <p className='mt-4'>Community members contribute their data to Zintlr’s community</p>
        <p className='mt-4'>Members receive free credits to generate high quality leads. <span className='font-semibold'>Claim those free credits</span></p>
        </div>
      </div>
      <FAQ/>
    </div>
  )
}

export default Data
