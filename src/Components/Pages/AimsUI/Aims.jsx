import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../img/AIMS/AIMS.png';
import ReactJS from '../../../img/Logo/ReactJS.png';
import MUI from '../../../img/Logo/MUI.png';
// import Bootstrap from '../../../img/Logo/Bootstrap.png';

function Aims() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/aims-details" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="AIMS"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" id='lblTitle'> 
              AIMS - Asset Inventory Management System
            </Typography>
            <Typography variant="body2">
            AIMS is a project of Golden Aurum System Solution Inc. During my internship, I was assigned to improve the system's responsiveness, design the login page, and enhance the error pages.
            </Typography>

            {/* Logo Area */}
            <Grid container spacing={2} justifyContent="flex-end" sx={{mt:.2 }} >
              <Grid item xs={2} md={2}>
                {/* <CardMedia component="img" src={ReactJS} alt="ReactJS"/> */}
              </Grid>
              <Grid item xs={2} md={2}>
                <CardMedia component="img" src={ReactJS} alt="ReactJS"/>
              </Grid>
              <Grid item xs={2} md={2}>
                <CardMedia component="img" src={MUI} alt="MUI"/>
              </Grid>
            </Grid>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Aims;
