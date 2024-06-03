import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PhotoAdmin from "./UIAdmin/UIAdmin";
import HeadStaff from "./UIHeadStaff/UIHeadStaff";
import Staff from "./UIStaff/UIStaff";
import QueueVistaPhotoMobile from "./UIMobile/UIMobile";
import { Typography, Select, MenuItem } from "@mui/material";

function UI() {
  const [selectedSlider, setSelectedSlider] = useState("");

  const handleSliderChange = (event) => {
    setSelectedSlider(event.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{ paddingBottom: "5%" }}
      spacing={3}
    >
      <Grid
        item
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" textAlign="center" mb={2} mt={1}>
          Mobile
        </Typography>
        <QueueVistaPhotoMobile />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" textAlign="center" mb={2} mt={1}>
          Desktop
          <Select
            value={selectedSlider}
            onChange={handleSliderChange}
          >
            <MenuItem value="slider1">Admin</MenuItem>
            <MenuItem value="slider2">Head Staff</MenuItem>
            <MenuItem value="slider3">Staff</MenuItem>
          </Select>
        </Typography>
        <Grid container spacing={2}>
          {selectedSlider === "slider1" && (
            <>
              <Grid item xs={12}>
                <PhotoAdmin />
              </Grid>
            </>
          )}
          {selectedSlider === "slider2" && (
            <>
              <Grid item xs={12}>
                <HeadStaff />
              </Grid>
            </>
          )}
          {selectedSlider === "slider3" && (
            <>
              <Grid item xs={12}>
                <Staff />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UI;
