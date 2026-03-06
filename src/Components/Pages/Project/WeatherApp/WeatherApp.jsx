import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/WeatherApp/WeatherApp.png';

function WeatherApp() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/weatherapp-details" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="WeatherApp"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" id='lblTitle'> 
              Weather Application
            </Typography>
            <Typography variant="body2">
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default WeatherApp;
