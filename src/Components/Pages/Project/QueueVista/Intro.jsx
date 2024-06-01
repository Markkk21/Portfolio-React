import { Typography, Grid } from "@mui/material";
import React from "react";


function Introduction() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6"><strong id='lblYellow'>QueueVista</strong> offers solutions for common challenges in accounting, registrar services, and treasury management. 
        These systems address the problem of long lines during fee payment periods by allowing students to queue up virtually, ensuring smooth transactions through <span id="lblYellow">technology</span></Typography>
      </Typography>
    </Grid>
    );
};

export default Introduction;
