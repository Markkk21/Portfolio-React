import React from "react";
import Grid from "@mui/material/Grid";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJava,
} from "react-icons/di";
import {
  SiPhp,
  SiBootstrap,
  SiLaravel,
  SiMui,
} from "react-icons/si";
import { TbBrandReactNative  } from "react-icons/tb";

function TechSkill() {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ paddingBottom: "5%" }}>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiReact />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiMui />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiPython />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiJava />
      </Grid>
    </Grid>
  );
}

export default TechSkill;
