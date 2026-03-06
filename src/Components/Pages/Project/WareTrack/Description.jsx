import { Typography, Grid } from "@mui/material";
import React from "react";

function Description() {

    return ( 
    <Grid mt={3}>
      <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
        <Typography variant="h6">
          Primary focused on mobile application development, with cross-platform support using Xamarin and C#.
        </Typography>
        <Typography variant="h6">
          <li>Improving the user interface to enhance overall user experience and usability both for 
            <strong id='lblYellow'> mobile</strong> and <strong id='lblYellow'>web</strong> applications.</li>
          <li>Handled bug fixes and new feature development for a legacy application using OOP principles, 
            following each phase of the SDLC to make sure changes were properly tested and deployed without breaking existing functionality.</li>
        </Typography>
      </Typography>
    </Grid>
    );
};

export default Description;
