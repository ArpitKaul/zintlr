import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../popup/Popup';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLinkClick = () => {
    toggleSidebar(); // Close the sidebar when a link is clicked
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    handleLinkClick();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
    <div
      className={`fixed inset-y-0 right-0 bg-gray-800 text-white w-72 py-6 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Cross icon to close the sidebar */}
      <div className="flex ">
        <div>
          <img className='w-28 mt-2 ' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75" alt="" />
        </div>
        <button onClick={toggleSidebar}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X2XsNu8kb7ZWgjMVsQDZS6B5RLtafWAP7WM8PsQyb2Cp0mK9"
            alt="Close"
            className="w-8 h-8 cursor-pointer ml-28"
          />
        </button>
      </div>
      <ul className="mt-20 space-y-4 text-center text-2xl ">
        <li>
          <Link to="/" className="hover:text-yellow-500" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Aboutus" className="hover:text-yellow-500" onClick={handleLinkClick}>
            About us
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="hover:text-yellow-500" onClick={handleLinkClick}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/Data" className="hover:text-yellow-500" onClick={handleLinkClick}>
            Our Data
          </Link>
        </li>
        <li>
          <Link to="/Login" className="hover:text-yellow-500 bg-[#ebc98c] text-black rounded-md" onClick={handleLinkClick}>
            Login
          </Link>
        </li>
        <button onClick={openPopup} className="bg-[#ebc98c] text-black w-48 h-8 rounded-md ">
          Join the waitlist
        </button>
      </ul>
    </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </>
  );
};

export default Sidebar;
