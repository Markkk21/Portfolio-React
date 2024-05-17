import React from 'react';
import { Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import GithubIcon from '@mui/icons-material/GitHub';

function InfoBox() {
  return (
    
    <div id="containerInfo">
        <Grid>
              <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
                <Typography>Hi! I'm <span id='lblYellow'>Mark Joshua Garcia</span>, a front-end developer with experience in programming a responsive website.</Typography>
 

                <Typography variant='subtitle1' id="lblSocials" >Feel free to <d id="connect">connect</d> with me</Typography>
                  <a id="iconSocials" href="https://www.linkedin.com/in/mark-joshua-garcia/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: "5vh"}}/>
                  </a>
                  <a id="iconSocials" href="https://www.github.com/Markkk21" target="_blank" rel="noopener noreferrer">
                    <GithubIcon sx={{ fontSize: "5vh"}}/>
                  </a>
                  <a id="iconSocials" href="mailto:markjoshuagarcia009@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon sx={{ fontSize: "5vh"}}/>
                  </a>
              </Typography>
          
            </Grid>
    </div>
  );
}

export default InfoBox;
