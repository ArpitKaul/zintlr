import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

 
  return (
      <div >
        <div className="flex">
        <img
            className="w-32 mt-5 cursor-pointer rounded-full ml-8 "
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt=""
          />
        </div>
        <ul className="Sidebar">
            <div className='flex'>
            <img
            className="w-32 mt-5 cursor-pointer rounded-full ml-8 "
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2FL-Z-Logo_D_Z67EOaNx.png%3Ftr%3Doptimized&w=256&q=75"
            alt=""
          />
          <div>
          <img className='w-7 h-7 ml-10  mt-8' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhEN2nCoH5IaDqR_oLy9LJOTHQ7fIN11R7MC26oo-nQBRMW-mZ" alt="" />
          </div>
            </div>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/Aboutus">About us</Link>
          </li>
          <li >Contact us</li>
          <li>Our Data</li>
          <li>Login</li>
          <li>join watchList</li>
        </ul>
      
      </div>
  )
}

export default Sidebar
