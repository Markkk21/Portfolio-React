import React from 'react';
import { Typography } from '@mui/material';

import Tline from '../Layout/Timeline';
import MarkLogo from "../../img/Logo.png";

const Dashboard = () => {
  return (
    <div id="containerDashboard">
      <img src={MarkLogo} alt="Logo" id="logoDashboard"/>
        <Typography variant='h3' id="lblMark">I'm Mark,
          <Typography variant='subtitle1' id="lblSubtitle">A Front-End Developer.
          </Typography>
        </Typography>
    </div>
  );
}

export default Dashboard;
