import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../../../img/AssetPRO/AssetPRO.png';

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

export default AssetPRO;
