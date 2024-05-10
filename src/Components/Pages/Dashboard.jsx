import React from 'react';
import { Typography } from '@mui/material';

import Tline from '../Layout/Timeline';
import DrawerAppBar from '../Layout/Navbar';

const Dashboard = () => {
  return (
    <div>
      <DrawerAppBar/>
      <Typography variant='h3' id="lblMark">I'm Mark,
        <Typography variant='subtitle1' id="lblSubtitle">An Aspiring Front-End Developer.
        </Typography>
      </Typography>
    </div>
  );
}

export default Dashboard;
