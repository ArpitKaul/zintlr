import React, { useState,useEffect } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../popup/Popup';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menu, setmenu] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for controlling popup visibility

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setmenu(currentPath || "Home"); 
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Navbar for medium and larger screens */}
      <div className="bg-[#0e1526] h-24 w-full hidden md:flex items-center justify-between fixed z-50">
        <div className="flex items-center">
          <img
            className="w-32 ml-8 cursor-pointer rounded-full"
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt="Logo"
          />
          <ul className="flex text-white ml-10 space-x-16">
            <li onClick={() => setmenu("Home")} className="cursor-pointer hover:text-yellow-500">
              <Link to="/">Home</Link>
              {menu === "Home" && <hr className="border-none rounded-md bg-[#ebc98c] w-10 h-1" />}
            </li>
            <li onClick={() => setmenu("Aboutus")} className="cursor-pointer hover:text-yellow-500">
              <Link to="/Aboutus">About us</Link>
              {menu === "Aboutus" && <hr className="border-none rounded-md bg-[#ebc98c] w-16 h-1" />}
            </li>
            <li onClick={() => setmenu("Contact")} className="cursor-pointer hover:text-yellow-500">
              <Link to='/Contact'>Contact Us</Link>
              {menu === "Contact" && <hr className="border-none rounded-md bg-[#ebc98c] w-20 h-1" />}
            </li>
            <li onClick={() => setmenu("Data")} className="cursor-pointer hover:text-yellow-500">
              <Link to="/Data">Our Data</Link>
              {menu === "Data" && <hr className="border-none rounded-md bg-[#ebc98c] w-16 h-1" />}
            </li>
          </ul>
        </div>
        <div className="flex items-center mr-8">
          <button className="text-[#ebc98c] border-2 border-[#ebc98c] transition-all duration-300 w-20 h-8 rounded-md mr-4 hover:bg-[#ebc98c] hover:text-black">
            <Link to='./Login'>Login</Link>
          </button>
          <button onClick={openPopup} className="bg-[#ebc98c] text-black w-32 h-8 rounded-md ">
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

      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Navbar;
