import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../Components/popup/Popup';


const Footer = () => {
  const [isPopupOpen , setIsPopupOpen] = useState(false);

  const openPopup=()=>{
    setIsPopupOpen(true);
  };
  
  const closePopu=()=>{
    setIsPopupOpen(false);
  };


  return (
    <>
    <div className="bg-[#0e1526] w-full h-auto py-12 md:py-20 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left px-8 space-y-10 md:space-y-0">
        
        {/* Left Section: Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt="Logo"
            className="w-48"
          />
          <p className="text-xl text-yellow">Sign Up to use the extension</p>
          <button className="bg-white text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
            Get Extension
          </button>
        </div>

        {/* Middle Section: Info and Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="max-w-xs text-center md:text-left">
            Unlock the power of lead intelligence and streamline your prospecting process.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="https://twitter.com/ZintlrHQ">
              <img className="w-9 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgCeVF_mpx6Wd50ZWOZVn-nrOl-NJ9SYd-A&s" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/zintlr/">
              <img className="w-9 rounded-xl" src="https://banner2.cleanpng.com/20180619/kyf/aa668hp3e.webp" alt="LinkedIn" />
            </a>
            <a href="https://m.facebook.com/100089859531116/">
              <img className="w-9 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43HQpKFjAd-Ka_tLRdM37RKIsJMpEmh7Wgw&s" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/zintlrhq/">
              <img className="w-9 rounded-xl" src="https://w7.pngwing.com/pngs/877/705/png-transparent-instagram-photo-picture-social-brands-and-logos-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Right Section: Company and Resources Links */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-yellow text-2xl">Company</h1>
            <Link to="/Data">Our Data</Link>
            <Link to="/Aboutus">About Us</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-yellow text-2xl">Resources</h1>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start">
          <button onClick={openPopup} className="bg-yellow text-[#0e1526] py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
            Join the waitlist
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="bg-white w-3/4 h-0.5 mx-auto my-8 md:my-12"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left px-8">
        <p className="text-sm md:text-base">© Copyright 2024 Zintlr Private Limited. All rights reserved</p>
        <p className="text-sm md:text-base mt-4 md:mt-0">Terms & Conditions  |  Privacy Center</p>
      </div>
    </div>
      <Popup isOpen={isPopupOpen} onClose={closePopu}/>
      </>
  );
};

export default Footer;
