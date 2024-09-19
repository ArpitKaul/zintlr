import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-purple h-[36rem] flex'>
        <div>
        <div className='ml-10'>
          <h6 className='text-6xl text-white pt-16 '>Prospect Smarter!</h6>
          <h6 className='text-6xl text-yellow mt-3'>10x Your Conversion!</h6>
          <p className='text-xl text-white mt-5'>
            Unlock the power of <span className='text-yellow'>Personality intel</span> alongside a rich <span className='text-yellow'> <br />B2B database</span>
          </p>
        </div>
        <div className='flex ml-10 mt-16'>
          <input className='text-white bg-gray-900 h-10 w-80 pl-4 rounded-xl' type="email" placeholder='Enter your email' />
            <button className='text-black bg-yellow h-10 w-28 rounded-xl '>Start for free</button>  
            <button className='ml-4 hover:bg-yellow rounded-xl w-28 text-yellow hover:text-black border-0 outline-0'>Book a Demo</button>
        </div>
        <div className='mt-1'>
          <p className='text-gray-400 ml-11'>No credit card Required</p>
        </div>
        <div>
          <img className='ml-10 mt-2' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fhp%2FProductHuntFirstLogo_aYBrOgLO-.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
        </div>
        </div>
        <div className='flex items-center ml-24'>
         <img className='w-[45rem] h-[25rem] rounded-xl' src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/charting%20the%20path%20to%20the%20next%20normal/2023/feb/gifs/cod-helpwanted-v18-ex4-js-shrunk-timed.gif" alt="" />
        </div>
      </div>
      <div>
        <h1>Know the Next Step with Zintlr's Personality Intel!</h1>
        <h1>Hyper-Personalize Your Approach with Prospect Psychology</h1>
      </div>
    </div>
  )
}

export default Home
