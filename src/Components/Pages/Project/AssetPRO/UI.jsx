import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { IoMdReturnLeft } from "react-icons/io";
import { IoMdReturnRight } from "react-icons/io";

import Before from '../../../../img/AssetPRO/Before.png';
import After from '../../../../img/AssetPRO/After.png';

const UIButton = () => {
  const [showBefore, setShowBefore] = useState(true);

  const handleToggle = () => {
    setShowBefore(!showBefore);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button id='btnAsset' onClick={handleToggle}>
        {showBefore ? <IoMdReturnRight /> : <IoMdReturnLeft />}
        <Typography variant="button" sx={{ fontWeight: 'bold' }}>
          {showBefore ? 'Switch to After' : 'Switch to Before'}
        </Typography>
      </Button>
      <Box
        id='UIAssetPROBox'
        component="img"
        sx={{ width: '80%', height: 'auto' }}
        alt={showBefore ? 'Before' : 'After'}
        src={showBefore ? Before : After}
      />
    </Box>
  );
};

export default UIButton;
