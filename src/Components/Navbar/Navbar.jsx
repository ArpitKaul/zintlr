import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar-container"> 
      <div className="navbar-content">
        <div className="flex">
          <img
            className="navbar-logo"
            src="https://i.tracxn.com/logo/company/Screenshot_2023-05-11_105325_2278b7e2-26a5-40d9-bd24-a3fd59659976.png?height=&width=60"
            alt=""
          />
          <h1 className="navbar-title">Zintlr</h1>
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
