import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/QueueVista/QueueVista.png';

function QueueVista() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/queuevista-details" style={{ textDecoration: 'none', color: 'inherit'}}>
      {/* <Card component={Link} style={{ textDecoration: 'none', color: 'inherit'}}> */}
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="QueueVista"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" id='lblTitle'>
              QueueVista
            </Typography>
            <Typography variant="body2">
            QueueVista is a capstone project consisting of 4 members, built with Laravel, Bootstrap, and MySQL. It is a web-based queue management system that can also be used in a mobile web browser.
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default QueueVista;
