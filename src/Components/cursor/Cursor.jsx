import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css'; 

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        ease:"back.out",
        duration:1
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} className="custom-cursor hidden md:block"></div>;
};

export default Cursor;
