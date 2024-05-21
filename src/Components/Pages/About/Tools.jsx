import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiGithub,
  SiCisco
} from "react-icons/si";

function Tools() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom: "50px" }}>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Grid>
    </Grid>
  );
}

export default Tools;
