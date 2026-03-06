import { Typography, Grid } from "@mui/material";
import React from "react";

function Description() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6">Weather App is a simple mobile application that shows real-time weather based on searched location. 
            I built this as a personal project using<strong id="lblYellow"> .NET MAUI</strong> for the mobile side and <strong id="lblYellow">Open-Meteo</strong> as the weather API since it's free and reliable.</Typography>
      </Typography>
    </Grid>
    );
};

export default Description;
