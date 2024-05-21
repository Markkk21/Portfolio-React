import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import GithubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container >

        <Grid xs={12} md={4}>
          <Typography variant="subtitle2" color="inherit" align="center" display="inline-block" marginTop='3%'>
            Designed and Developed by Mark Joshua Garcia
          </Typography>
        </Grid>

        <Grid xs={12} md={4}>
          <Typography variant="subtitle2" color="inherit" align="center" display="inline-block" marginTop='3%'>
           Copyright © {new Date().getFullYear()} MarkWorks.
          </Typography>
        </Grid>
        
        <Grid xs={12} md={4} mt={1}>
          <a id="iconSocials" href="https://www.linkedin.com/in/mark-joshua-garcia/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{width: "5vh"}}/>
          </a>
          <a id="iconSocials" href="https://www.github.com/Markkk21" target="_blank" rel="noopener noreferrer">
            <GithubIcon sx={{width: "5vh"}}/>
          </a>
          <a id="iconSocials" href="mailto:markjoshuagarcia009@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{width: "5vh"}}/>
          </a>
        </Grid>

      </Grid>

      {/* <nav className="footer-nav">
        <Link href="#" className="footer-link">Privacy Policy</Link>
        <Link href="#" className="footer-link">Terms of Service</Link>
        <Link href="#" className="footer-link">Contact Us</Link>
      </nav> */}
    </footer>
  );
};

export default Footer;
