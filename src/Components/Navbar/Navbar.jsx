import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="bg-[#123456] h-24 w-[27rem] md:w-[96rem]">
      {/* Sidebar only visible on small screens */}
      <div className="md:hidden flex">
        <Sidebar />
        <img className='w-8 h-8 mt-6 ml-60 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66cmvUPqMyIFTMjtkUKSHb8pbTTvct4kZNg&s" alt="" /> 
      </div>

      {/* Navbar only visible on medium screens and larger */}
      <div className="hidden md:flex">
        <div className="flex">
       
          <img
            className="w-32 mt-5 cursor-pointer rounded-full ml-8"
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt="Logo"
          />
        </div>
        <ul className="flex text-white mt-6 text-lg ml-1">
          <li className="ml-16 cursor-pointer hover:text-yellow-500">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-16 cursor-pointer hover:text-yellow-500">
            <Link to="/Aboutus">About us</Link>
          </li>
          <li className="ml-16 cursor-pointer hover:text-yellow-500">Contact us</li>
          <li className="ml-16 cursor-pointer hover:text-yellow-500">Our Data</li>
        </ul>
        <div className="flex items-center ml-auto mr-8 text-sm">
          <button className="cursor-pointer text-[#ebc98c] border-2 border-[#ebc98c] transition-all duration-300 w-20 h-8 rounded-md mr-4 hover:bg-[#ebc98c] hover:text-black">
            Login
          </button>
          <button className="cursor-pointer text-black bg-[#ebc98c] w-32 h-8 rounded-md">
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
