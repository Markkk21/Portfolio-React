import * as React from 'react';
import { Grid, Card} from '@mui/material';
import QueueVista from './QueueVista/QueueVista';

function ProjectList() {
  return (
    <div id="containerProject">
        <Grid container spacing={2}>

            {/* Projects */}
            <Grid item xs={12} sm={4}>
                <Card id="cardProject">
                    <QueueVista/>
                </Card>
            </Grid>

            {/* Projects */}
            <Grid item xs={12} sm={4}>

            </Grid>
        
            {/* Projects */}
            <Grid item xs={12} sm={4}>

            </Grid>


  
        </Grid>
    </div>
  );
};
export default ProjectList;