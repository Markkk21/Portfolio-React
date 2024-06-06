import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function CustomGauge({ value, label }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={100} id="gaugeLayout"/>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" component="div">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
      {label && (
        <Box mt={1}>
          <Typography variant="body2">
            {label}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default CustomGauge;
