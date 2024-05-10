import React from 'react';
import { Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            <Grid item xs={12} sm={7}>
            <Typography variant="h4" id="lblAboutMe" 
            sx={{ textAlign: { xs: 'center', lg: 'left' }}}
            >Mark Joshua Garcia
            </Typography>
            
          <Typography variant="body1">
            <LinkedInIcon />
            <a id="lbl" href="https://www.linkedin.com/in/mark-joshua-garcia/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </Typography>
            </Grid>
        </Grid>
    </div>
  );
}

export default InfoBox;
