import React from 'react';
import { Grid, List, Typography, ListItem, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import GithubIcon from '@mui/icons-material/GitHub';

import { CgGames, CgGym } from "react-icons/cg";
import { MdCardTravel } from "react-icons/md";

function InfoBox() {
  return (
    
    <div id="containerInfo">
        <Grid>
          <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
            <Typography variant="h6">Hi! I'm <strong id='lblYellow'>Mark Joshua Garcia</strong>, a front-end and web developer with experience in programming responsive websites. 
            I graduated from Wesleyan University-Philippines with a <strong id='lblYellow'> Bachelor of Information Technology.</strong></Typography>

            <Typography variant="h6" mt={4}>Apart from coding, I love engaging in other activities!</Typography>
            <List>
              <ListItem>
                <CgGames />
                <Typography ml={1}>Playing Games</Typography>
              </ListItem>
              <ListItem>
                <MdCardTravel/>
                <Typography ml={1}>Traveling</Typography>
              </ListItem>
              <ListItem>
                <CgGym/>
                <Typography ml={1}>Gym</Typography>
              </ListItem>

            </List>
            
            <Typography variant="h4" whiteSpace="nowrap" gutterBottom mt={2}>
            <strong id='lblYellow'>Find</strong> Me On
            </Typography>

              <Typography variant='h6'>Feel free to <d id="lblYellow">connect</d> with me</Typography>
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
