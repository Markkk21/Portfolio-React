import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/WareTrack/WareTrack.jpg';

function WareTrack() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/waretrack-details" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="WareTrack"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" id='lblTitle'> 
              WareTrack
            </Typography>
            <Typography variant="body2">
              WareTrack is a warehouse management system made by Aurumax Tech Solutions Inc. that uses RFID technology to help businesses track 
              and manage their inventory more accurately and efficiently. It has both a web and mobile 
              application, built with ReactJS for the web, and Xamarin with C# for mobile, with ASP.NET Core 
              Web API handling the backend.
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default WareTrack;
