import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../img/AssetPRO/AssetPRO.png';
import ReactJS from '../../../img/Logo/ReactJS.png';
import MUI from '../../../img/Logo/MUI.png';
// import Bootstrap from '../../../img/Logo/Bootstrap.png';

function AssetPRO() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/assetpro-details" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="AssetPRO"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"> 
              AssetPRO
            </Typography>
            <Typography variant="body2">
            AssetPRO is a project of Golden Aurum System Solution Inc. During my internship, I was assigned to make the Ingress/Egress page responsive for mobile devices.
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

export default AssetPRO;
