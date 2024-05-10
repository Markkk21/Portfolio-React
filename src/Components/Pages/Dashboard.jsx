import React from 'react';
import { Typography } from '@mui/material';

import Tline from '../Layout/Timeline';
import DrawerAppBar from '../Layout/Navbar';

const Dashboard = () => {
  return (
    <div>
      <DrawerAppBar/>
      <Typography variant='h3'>I'm Mark,</Typography>
      <Typography variant='subtitle1' >An Aspiring Front-End Developer.</Typography>
    </div>
  );
}

export default Dashboard;
