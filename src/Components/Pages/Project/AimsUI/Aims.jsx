import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/AIMS/AIMS.png';

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
            AIMS is a project of Golden Aurum System Solution Inc. During my internship, I was tasked with improving the system's responsiveness, designing the login page, and enhancing the error pages using React.js and Material UI.
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Aims;
