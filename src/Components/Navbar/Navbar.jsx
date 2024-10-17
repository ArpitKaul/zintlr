import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Navbar for medium and larger screens */}
      <div className="bg-[#0e1526] h-24 w-full hidden md:flex items-center justify-between ">
        <div className="flex items-center">
          <img
            className="w-32 ml-8 cursor-pointer rounded-full"
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt="Logo"
          />
          <ul className="flex text-white ml-10 space-x-16">
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/Aboutus">About us</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">Contact us</li>
            <li className="cursor-pointer hover:text-yellow-500">Our Data</li>
          </ul>
        </div>
        <div className="flex items-center mr-8">
          <button className="text-[#ebc98c] border-2 border-[#ebc98c] transition-all duration-300 w-20 h-8 rounded-md mr-4 hover:bg-[#ebc98c] hover:text-black">
            Login
          </button>
          <button className="bg-[#ebc98c] text-black w-32 h-8 rounded-md ">
            Join the waitlist
          </button>
        </div>
      </div>

      {/* Navbar for small screens */}
      <div className="md:hidden bg-[#0e1525] h-16 flex items-center justify-between pt-6">
        <img
          className="w-20 h-20 cursor-pointer rounded-full ml-4"
          src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
          alt="Logo"
        />
        <img
          className="w-8 h-8 mr-4 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66cmvUPqMyIFTMjtkUKSHb8pbTTvct4kZNg&s"
          alt="Menu"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar toggling */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
