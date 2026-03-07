import React from "react";
import { Grid } from "@mui/material";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiGithub,
  SiFigma,
  SiZebratechnologies, 
} from "react-icons/si";

import { FaWindows } from "react-icons/fa";
import { BiRfid } from "react-icons/bi";
import { CiBarcode } from "react-icons/ci";
import { TbSdk } from "react-icons/tb";

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
      <Grid item xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <BiRfid />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <CiBarcode />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiZebratechnologies />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <TbSdk />
      </Grid>
    </Grid>
  );
}

export default Tools;
