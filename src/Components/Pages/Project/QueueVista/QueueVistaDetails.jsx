import React from 'react';
import { Grid, Card, Typography, Container} from '@mui/material';


function QueueVistaDetails() {

  return (
    <div id="containerProject">
        <Grid container spacing={2}>
            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                {/* <QueueVista/> */}
              </Card>
            </Grid>

            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                {/* <Aims/> */}
              </Card>
            </Grid>
        
            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                {/* <AssetPRO/> */}
              </Card>
            </Grid>
        </Grid>
        </div>
  );
};

export default QueueVistaDetails;