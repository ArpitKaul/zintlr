import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <div className='bg-[#0e1526] md:h-[31rem] w-full h-[53rem] '>
     <div className=" md:flex  md:pt-20 justify-around text-white p-8 mb-9 ">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col items-start space-y-4 mt-8">
        <img
          src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
          alt="Logo"
          className="w-48 ml-20 md:ml-2"
        />
        <p className='text-xl text-yellow ml-16 md:ml-2 md:pt-0 pt-9'>Sign Up to use the extension</p>
        <button className="bg-white text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200 md:ml-2 ml-28 ">
          Get Extension
        </button>
      </div>
      <div>
      <p className="max-w-xs md:ml-0 ml-10 md:mt-0 mt-10">
          Unlock the power of lead intelligence and streamline your prospecting process.
        </p>
        <div className=' md:mt-6 flex cursor-pointer mt-10 '>
          <a href="https://twitter.com/ZintlrHQ">
        <img className='w-9 md:ml-0 ml-24  rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgCeVF_mpx6Wd50ZWOZVn-nrOl-NJ9SYd-A&s" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/zintlr/">
        <img className='w-9 ml-3 rounded-xl' src="https://banner2.cleanpng.com/20180619/kyf/aa668hp3e.webp" alt="" />
          </a>
          <a href="https://m.facebook.com/100089859531116/">
        <img className='w-9 ml-3 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43HQpKFjAd-Ka_tLRdM37RKIsJMpEmh7Wgw&s" alt="" />
          </a>
          <a href="https://www.instagram.com/zintlrhq/">
        <img className='ml-3 w-9 rounded-xl' src="https://w7.pngwing.com/pngs/877/705/png-transparent-instagram-photo-picture-social-brands-and-logos-icon.png" alt="" />
          </a>
        </div>
      </div>
      {/* Middle Section: Company Links */}
      <div className='flex'>
      <div className="md:flex flex-col space-y-4 mt-7 md:ml-0 ml-20">
        <h1 className="font-bold text-yellow text-2xl">Company</h1>
        <Link to='/Data'>Our Data</Link>
        <Link to='/Aboutus'>About us</Link>
      </div>

      {/* Right Section: Resources Links */}
      <div className="flex flex-col space-y-4 mt-7 ml-8">
        <h1 className="font-bold text-yellow text-2xl">Resources</h1>
        <Link className='cursor-pointer' to='/Contact'>Contact Us</Link>
      </div>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-yellow text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200 mt-7 md:ml-0 ml-28">
          Join the waitlist
        </button>
      </div>
     
    </div>
     <div className='bg-white md:w-3/4 h-0.5 md:ml-48 md:mt-28 w-[20rem] ml-16 '></div>
     <div className='md:flex md:ml-48 text-white'>
      <p className='tmd:ext-sm text-[17px] md:mt-0 mt-5 ml-5'>© Copyright 2024 Zintlr Private Limited. All rights reserved</p>
      <p className='md:ml-[30rem] text-sm ml-28 md:mt-0 mt-7'>Terms & Conditions  Privacy Center</p>
     </div>
   </div>
  );
};

export default Footer;
