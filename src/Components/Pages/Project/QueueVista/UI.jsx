import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PhotoAdmin from "./UIAdmin";
import QueueVistaPhotoMobile from "./UIMobile";
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
        </Typography>
        <Select
          value={selectedSlider}
          onChange={handleSliderChange}
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="slider1">Admin</MenuItem>
          <MenuItem value="slider2">Head Staff</MenuItem>
          <MenuItem value="slider3">Staff</MenuItem>
          {/* Add more sliders as needed */}
        </Select>
        <Grid container spacing={2}>
          {selectedSlider && (
            <>
              <Grid item xs={12} md={4}>
                <PhotoAdmin slider={selectedSlider} />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UI;
