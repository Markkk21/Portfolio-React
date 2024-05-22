import * as React from 'react';
import { Grid, Card, Typography, Container} from '@mui/material';
import QueueVista from './QueueVista/QueueVista';
import Aims from './AimsUI/Aims';
import AssetPRO from './AssetPRO/AssetPRO';
// import { Toys } from '@mui/icons-material';

function ProjectList() {
  return (
    <div id="containerProject">
      <Container item xs={12}>
        <Typography variant='h3' textAlign='center' mb={2}>
          My Recent <strong id='lblYellow'>Projects</strong>
        </Typography>
        <Typography id="lblProjectDesc">Here are <strong id='lblYellow'>projects</strong> I've worked on recently.</Typography>
      </Container>
        <Grid container spacing={2}>
            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                <QueueVista/>
              </Card>
            </Grid>

            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                <Aims/>
              </Card>
            </Grid>
        
            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                <AssetPRO/>
              </Card>
            </Grid>
            
        </Grid>
        
        </div>
  );
};
export default ProjectList;