import React from "react";
import { Grid } from "@mui/material";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

function Tools() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom: "5%" }}>
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
        <SiFigma />
      </Grid>
    </Grid>
  );
}

export default Tools;
