import * as React from 'react';
import { Grid, Card} from '@mui/material';
import QueueVista from './QueueVista/QueueVista';
import Aims from './AimsUI/Aims';
import AssetPRO from './AssetPRO/AssetPRO';

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