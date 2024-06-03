import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

import Before from '../../../../img/AssetPRO/Before.png';
import After from '../../../../img/AssetPRO/After.png';

const UIButton = () => {
  const [showBefore, setShowBefore] = useState(true);

  const handleToggle = () => {
    setShowBefore(!showBefore);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button variant="contained" color="primary" onClick={handleToggle}>
        <Typography>{showBefore ? 'Switch to After' : 'Switch to Before'}</Typography>
      </Button>
      <Box
        component="img"
        sx={{ marginTop: 2, width: '100%', height: 'auto' }}
        alt={showBefore ? 'Before' : 'After'}
        src={showBefore ? Before : After}
      />
    </Box>
  );
};

export default UIButton;
