import React from "react";
import Grid from "@mui/material/Grid";
import QueueVistaPhoto from "./PhotoSlider";
import { Typography } from "@mui/material";

function UI() {

  return (
    <Grid container justifyContent="center" style={{ paddingBottom: "5%" }} spacing={3}>
        <Grid 
            item
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
            <Typography variant='h4' textAlign='center' mb={2} mt={1}>
            Mobile
            </Typography>
                <QueueVistaPhoto/>
        </Grid>

        <Grid             
            item
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
            <Typography variant='h4' textAlign='center' mb={2} mt={1}>
            Desktop
            </Typography>
            <QueueVistaPhoto/>
        </Grid>
    </Grid>
  );
}

export default UI;
