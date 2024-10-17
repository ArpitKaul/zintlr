import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#0e1526] h-96 w-full md:flex  md:pt-20 justify-around text-white p-8 mb-9">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col items-start space-y-4">
        <img
          src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
          alt="Logo"
          className="w-48"
        />
        <p className='text-xl text-yellow'>Sign Up to use the extension</p>
        <button className="bg-white text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
          Get Extension
        </button>
      </div>
      <div>
      <p className="max-w-xs">
          Unlock the power of lead intelligence and streamline your prospecting process.
        </p>
        <div className=''>
        <img src="i" alt="" />
        </div>
      </div>

      {/* Middle Section: Company Links */}
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-yellow text-2xl">Company</h1>
        <p>Our Data</p>
        <p>About us</p>
      </div>

      {/* Right Section: Resources Links */}
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-yellow text-2xl">Resources</h1>
        <p>Contact us</p>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-yellow text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Footer;
