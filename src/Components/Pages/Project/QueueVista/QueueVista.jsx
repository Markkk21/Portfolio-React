import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/QueueVista/QueueVista.png';
import Laravel from '../../../../img/Logo/Laravel.png';
import MySQL from '../../../../img/Logo/Mysql.png';
import Bootstrap from '../../../../img/Logo/Bootstrap.png';

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
            <Typography gutterBottom variant="h6" component="div" id='lblTitle'>
              QueueVista - Digital Waiting Aide
            </Typography>
            <Typography variant="body2">
            QueueVista is a capstone project consisting of 4 members, built with Laravel, Bootstrap, and MySQL. It is a web-based queue management system that can also be used in a mobile web browser.
            </Typography>

            {/* Logo Area */}
            <Grid container spacing={2} justifyContent="flex-end" sx={{mt:.2 }} >
              <Grid item xs={2} md={2}>
                <CardMedia component="img" src={Laravel} alt="Laravel"/>
              </Grid>
              <Grid item xs={2} md={2}>
                <CardMedia component="img" src={Bootstrap} alt="Bootstrap"/>
              </Grid>
              <Grid item xs={2} md={2}>
                <CardMedia component="img" src={MySQL} alt="MySQL"/>
              </Grid>
            </Grid>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default QueueVista;
