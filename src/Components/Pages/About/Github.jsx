import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Grid, Typography } from "@mui/material";

function Github() {


  return (
    <Grid container justifyContent="center" sx={{ paddingBottom: "5%" }}>
      <Typography
        variant="h3"
        sx={{ paddingBottom: "20px" }}
      >
        My Github <strong id="lblYellow">Calendar</strong>
      </Typography>
      <GitHubCalendar
        username="Markkk21"
        blockSize={15}
        blockMargin={5}
        color="white"
        fontSize={16}
      />
    </Grid>
  );
}

export default Github;
