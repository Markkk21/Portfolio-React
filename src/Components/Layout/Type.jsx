import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Typewriter = ({ text = "", speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text || text.length === 0) return; // Check if text is provided
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, speed]);

  return <Box>{displayText}</Box>;
};

export default Typewriter;
