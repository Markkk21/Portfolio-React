import { Typography, Grid } from "@mui/material";
import React from "react";

function Description() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6">
        After I finished the assigned task on the previous project, I was assigned to
        <strong id="lblYellow"> AIMS</strong>. My task is to make the web version 
        <strong id='lblYellow'> responsive.</strong></Typography>
        <Typography variant="h6">
          <li>Design and Build <strong id='lblYellow'>Login Page</strong>.</li>
          <li>Made <strong id='lblYellow'>Error Pages</strong> Responsive.</li>
          <li>Made <strong id='lblYellow'>Dashboard</strong> Responsive.</li>
          <li>Made <strong id='lblYellow'>All Modules</strong> Responsive.</li>
        </Typography>
      </Typography>
    </Grid>
    );
};

export default Description;
