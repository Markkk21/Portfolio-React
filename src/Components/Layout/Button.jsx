import React from 'react';
import { Box, Typography } from '@mui/material';
// import './CustomButton.css'; // Import your CSS file for styling

function CustomButton() {
  return (
    <Box className="css-button" component="div">
      <Typography className="css-button-text" component="p" textAlign='center'>
        LOVE
      </Typography>
      <Box className="css-button-inner" component="div">
        <Box className="reset-skew" component="div">
          <Typography className="css-button-inner-text" component="p">
            LOVE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomButton;
