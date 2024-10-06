import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar-container"> 
      <div className="navbar-content">
        <div className="flex">
          <img
            className="navbar-logo w-32 mt-5 cursor-pointer"
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt=""
          />
        </div>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to='/'>Home</Link></li>
          <li className="navbar-item"><Link to='/Aboutus'>About us</Link></li>
          <li className="navbar-item">Contact us</li>
          <li className="navbar-item">Our Data</li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-button-login">Login</button>
          <button className="navbar-button-signup">Join the waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
