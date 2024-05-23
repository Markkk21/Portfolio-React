import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { AiOutlineRocket } from "react-icons/ai";


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

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
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Fab
      color="light"
      size="medium"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '5%',
        right: '2rem',
        display: visible ? 'inline' : 'none',
        backgroundColor: "#727272a2",
        color: "white",
        border:" 1.7px solid white"
      }}
    >
      <AiOutlineRocket fontSize={30} />
    </Fab>
  );
};

export default ScrollToTop;
