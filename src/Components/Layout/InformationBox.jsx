import React from 'react';
import { Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import ViberIcon from '@mui/icons-material/WifiCalling3';

import MyPhoto from '../../img/MyPhoto.png';

function InfoBox() {
  return (
    
    <div id="containerInfo">
        <Grid container spacing={2}>

            {/* Image */}
            <Grid item xs={12} sm={5}>
                <img src={MyPhoto} alt="Mj" id="imageMe" />
            </Grid>
        
            {/* Info */}
            <Grid item xs={12} sm={5}>
            <Typography variant="h4" id="lblAboutMe" 
            sx={{ textAlign: { xs: 'center', lg: 'left' }}}
            >Mark Joshua Garcia
            </Typography>
              <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
                <Typography>Hi, I'm a front-end developer with experience in programming a responsive website.</Typography>
 
                <Typography variant='h6' id="lblSocials" >Connect with me</Typography>
                  <a id="iconSocials" href="https://www.linkedin.com/in/mark-joshua-garcia/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: "5vh"}}/>
                  </a>
                  <a id="iconSocials" href="mailto:markjoshuagarcia009@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon sx={{ fontSize: "5vh"}}/>
                  </a>
                  <a id="iconSocials" href="tel:+639162580989" target="_blank" rel="noopener noreferrer">
                    <ViberIcon sx={{ fontSize: "5vh"}}/>
                  </a>
              </Typography>
          
            </Grid>
        </Grid>
    </div>
  );
}

export default InfoBox;
