import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../img/QueueVista/HomePC.jpeg';

function QueueVista() {
  return (
    <Grid>
      {/* Projects */}
      <Card component={Link} to="/queuevista-details" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={MyPhoto}
            alt="QueueVista"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              QueueVista - Digital Waiting Aide
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This capstone project consists of 4 members, it is a web-based queue management system that can be also used in mobile web browser.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default QueueVista;
