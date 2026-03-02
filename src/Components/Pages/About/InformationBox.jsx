import React from 'react';
import { Grid, List, Typography, ListItem, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import GithubIcon from '@mui/icons-material/GitHub';

// import { CiMountain1 } from "react-icons/ci";
import { CgGames } from "react-icons/cg";
import { MdCardTravel } from "react-icons/md";

function InfoBox() {
  return (
    
    <div id="containerInfo">
        <Grid>
          <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
            <Typography variant="h6">I build software that's fast, clean, and easy to maintain. 
            I enjoy solving problems, picking up new tools when needed, and continuously improving — both in my craft and as a teammate.</Typography>

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
                {/* <ListItem>
                  <CiMountain1 />
                  <Typography ml={1}>Hiking</Typography>
                </ListItem> */}

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
