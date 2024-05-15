import * as React from 'react';
import { Grid, Card} from '@mui/material';
import QueueVista from './QueueVista/QueueVista';

function ProjectList() {
  return (
    <div id="containerProject">
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
                <QueueVista/>
              </Card>
            </Grid>
        
            {/* Projects */}
            <Grid item xs={12} md={4}>
              <Card id='projectBox'>
                <QueueVista/>
              </Card>
            </Grid>


  
        </Grid>
        </div>
  );
};
export default ProjectList;