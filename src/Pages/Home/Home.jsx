import React, { useRef } from 'react';
import './Home.css'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      transformOrigin: "0 50% 0",
      ease: "back",
      stagger: 1
    });
  });

  return (
    <div>
      <div className="home-container">
        
        <div>
          <div className="header-text">
            <h6 className="header-title" ref={gsapRef}>Prospect Smarter!</h6>
            <h6 className="header-highlight text-5xl">10x Your Conversion!</h6>
            <p className="header-paragraph">
              Unlock the power of <span className="header-highlight">Personality intel</span> alongside a rich <span className="header-highlight"><br />B2B database</span>
            </p>
          </div>
          <div className="input-container">
            <input className="input-email" type="email" placeholder="Enter your email" />
            <button className="start-button">Start for free</button>
            <button className="demo-button">Book a Demo</button>
          </div>
          <div className="mt-1">
            <p className="footer-text">No credit card Required</p>
          </div>
          <div>
            <img className="footer-image" src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fhp%2FProductHuntFirstLogo_aYBrOgLO-.png%3Ftr%3Doptimized&w=384&q=75" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1>Know the Next Step with Zintlr's Personality Intel!</h1>
        <h1>Hyper-Personalize Your Approach with Prospect Psychology</h1>
      </div>
    </div>
  );
};
export default Home;
