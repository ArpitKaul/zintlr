// Cursor.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css'; // Import your cursor styles

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} className="custom-cursor"></div>;
};

export default Cursor;
