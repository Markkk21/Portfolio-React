import React from 'react';
import { Typography } from '@mui/material';
import Tilt from "react-parallax-tilt";

import MarkLogo from "../../img/Logo.png";
import Typewriter from '../Layout/Type';

const Dashboard = () => {
  return (
    <div id="containerDashboard">
      <Tilt><img src={MarkLogo} alt="Logo" id="logoDashboard"/></Tilt>
        <Typography variant='h3' id="lblMark">I'm Mark,
          <Typography variant='body1' id="lblSubtitle"><Typewriter/>
          </Typography>
        </Typography>
    </div>
  );
}

export default Dashboard;