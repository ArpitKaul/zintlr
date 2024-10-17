import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUsAnimations = ({ marqueesRef, teamRef, gsapRef }) => {

  useEffect(() => {
    // Team section animation
    gsap.from(teamRef.current, {
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
      },
    });

    // GSAP section animation
    gsap.from(gsapRef.current, {
      y: 30,
      opacity: 0,
      scale: 1,
      ease: "back",
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    // Marquee animation on scroll
    marqueesRef.current.forEach((marquee, i) => {
      gsap.to(marquee, {
        x: '-200%', // Adjust speed or percentage as needed
        scrollTrigger: {
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

  }, [marqueesRef, teamRef, gsapRef]);

  return null; // This component is used only for animations
};

export default AboutUsAnimations;
