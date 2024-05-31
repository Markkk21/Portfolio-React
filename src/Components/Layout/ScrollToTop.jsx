import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { AiOutlineRocket } from "react-icons/ai";
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const { pathname } = useLocation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const customSmoothScroll = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return change / 2 * time * time + start;
      time--;
      return -change / 2 * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToTop = () => {
    customSmoothScroll(0, 1000); // Adjust the speed
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500); // Remove the class after the animation
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fab
      size="medium"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '5%',
        right: '2rem',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    >
      <AiOutlineRocket fontSize={30} className={wiggle ? 'wiggle' : ''} />
    </Fab>
  );
};

export default ScrollToTop;
