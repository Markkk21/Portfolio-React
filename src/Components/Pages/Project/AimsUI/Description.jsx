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
      </Typography>
    </Grid>
    );
};

export default Description;
