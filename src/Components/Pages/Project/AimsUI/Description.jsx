import { Typography, Grid } from "@mui/material";
import React from "react";

function Description() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6">Text Here <strong id='lblYellow'>AIMS</strong></Typography>
      </Typography>
    </Grid>
    );
};

export default Description;
