import React, { useEffect } from 'react';
import './Data.css';
import FAQ from './Faq';

const Data = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className='bg-[#0e1525] h-[36rem] md:flex w-full'>
        <div className='flex flex-col md:flex-row md:ml-28 md:mt-24'>
          <div className='md:w-2/4 ml-8 pt-32 md:pt-0'>
            <h1 className='text-white text-3xl md:text-6xl font-serif'>End your search for a trusted B2B database</h1>
            <p className='text-white mt-4 md:mt-9'>The gold standard for reliable, high-quality B2B data. Experience the Z-factor firsthand.</p>
            <button className='btn-primary font-serif mt-6 md:mt-16 bg-yellow w-32 rounded-2xl h-9'>Start for free</button>
          </div>
          <div className='mt-5 md:mt-32 md:ml-32 ml-12'>
            <img className='w-72 h-72 md:w-96 md:h-96' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Four_data%2FOurDataOverview_N7OC3ED6B.png%3Ftr%3Doptimized&w=640&q=75" alt="Zintlr database illustration" />
          </div>
        </div>
      </section>

      {/* Zintlr Data Collection Section */}
      <section className='mt-32 md:mt-10 flex justify-center'>
        <div className='ml-7 md:ml-9'>
          <h1 className='text-2xl md:text-5xl font-serif ml-7'>How Zintlr gets its data</h1>
          <p className='text-sm md:ml-16'>Zintlr’s B2B database results from its proprietary machine learning algorithms and advanced technologies.</p>

          <div className='bg-blue-50 w-80 md:w-[29rem] h-32 md:h-24 mt-10 rounded-xl p-4'>
            <p className='text-lg'>We collect data from various public domains, third-party suppliers, a dedicated research department and our Z-Community contributors</p>
          </div>
          <div className='bg-blue-50 w-80 md:w-[29rem] h-32 md:h-24 mt-10 rounded-xl p-4'>
            <p className='text-lg'>The data from multiple sources are cross-verified to give you the most accurate and verified data to empower your business.</p>
          </div>
        </div>
      </section>

      {/* Zintlr Data Section */}
      <section className='bg-blue-50 md:h-[20rem] w-full h-[44rem]'>
        <h1 className='text-3xl md:text-5xl font-serif font-semibold mt-10 pt-9 w-56 ml-8 md:ml-28'>Zintlr’s Data</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-0 '>
          <DataCard 
            imageSrc="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-menu-option-icon-collection-in-glyph-style-png-image_5234824.png"
            title="48+ Billion Data Touchpoints processed"
          />
          <DataCard 
            imageSrc="https://static.vecteezy.com/system/resources/previews/046/280/422/non_2x/chart-icon-symbol-image-for-data-statistic-analysis-illustration-vector.jpg"
            title="550+ Million Data Touchpoints Verified"
          />
          <DataCard 
            imageSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIpqVBhfQ2cfvovb-Sv_pzTwUt_L18qeGvQ6vBmXpS8yor6fzc"
            title="100+ Million Data Live and Increasing every day"
          />
        </div>
      </section>

      {/* Data Security Section */}
      <section className='h-full mt-72 md:mt-32 '>
        <div className='md:flex mt-16 md:ml-56 ml-4'>
          <div>
            <img className='w-72 h-72 md:w-96 md:h-96 ml-7 md:pb-9' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Four_data%2FDataSecurityPrivacy_uATChmsme.png%3Ftr%3Doptimized&w=640&q=75" alt="Data Security and Privacy illustration" />
          </div>
          <div className='md:w-2/4 mt-8 md:mt-16 md:ml-32 w-80 ml-1'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Data Security & Privacy</h1>
            <p className='text-xl mt-5'>Rest assured knowing that our data collection practices prioritize compliance, providing you with the most reliable and secure business data. Our stringent data privacy and security protocols are in place for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Zintlr Community Section */}
      <section className='bg-yellow flex justify-center mt-12 w-full h-[25rem]'>
        <div className='bg-blue-50 md:w-[47rem] md:h-56 mt-10 rounded-2xl w-80 h-80 p-5 md:p-10 md:mt-24'>
          <h1 className='text-2xl font-semibold'>Zintlr Community</h1>
          <p className='mt-5'>Users enroll to Zintlr community & validate their data present in database.</p>
          <p className='mt-4'>Community members contribute their data to Zintlr’s community.</p>
          <p className='mt-4'>Members receive free credits to generate high quality leads. <span className='font-semibold'>Claim those free credits</span></p>
        </div>
      </section>
      < FAQ />
    </div>
  );
}

// Data Card Component for Reusability
const DataCard = ({ imageSrc, title }) => (
  <div className='bg-white w-80 md:w-96 h-56 md:h-auto mt-10 rounded-xl shadow-xl cursor-pointer flex flex-col items-center p-4 md:ml-24'>
    <img className='w-16 mb-4' src={imageSrc} alt="Data illustration" />
    <p className='text-center text-2xl font-semibold font-serif'>{title}</p>
  </div>
);

export default Data;
