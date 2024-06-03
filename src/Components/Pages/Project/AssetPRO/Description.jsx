import { Typography, Grid } from "@mui/material";
import React from "react";


function Description() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6">In my first week of internship, I was assigned to one of the company's projects called <strong id='lblYellow'>AssetPRO</strong>  to fix the <strong id="lblYellow">responsiveness</strong> of the Ingress/Egress module, making it compatible with mobile devices.</Typography>
      </Typography>
    </Grid>
    );
};

export default Description;
