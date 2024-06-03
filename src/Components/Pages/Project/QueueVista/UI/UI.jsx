import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PhotoAdmin from "./UIAdmin/UIAdmin";
import HeadStaff from "./UIHeadStaff/UIHeadStaff";
import Staff from "./UIStaff/UIStaff";

import ExternalMonitor from '../../../../../img/QueueVista/ExternalMonitor.png';
import QueueVistaPhotoMobile from "./UIMobile/UIMobile";
import { Typography, Select, MenuItem, Card } from "@mui/material";

function UI() {
  const [selectedSlider, setSelectedSlider] = useState("slider1");

  const handleSliderChange = (event) => {
    setSelectedSlider(event.target.value);
  };

  useEffect(() => {
    setSelectedSlider("slider1");
  }, []);

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
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h4" textAlign="center" mb={2} mt={1} mr={2}>
              Desktop
            </Typography>
          </Grid>
          <Grid item>
            <Select
              value={selectedSlider}
              onChange={handleSliderChange}
              sx={{
                color: '#fff',
                border: '1.7px solid rgba(212, 175, 55, 0.637)',
                boxShadow: "4px 5px 4px 3px rgba(83, 70, 22, 0.637)",
                backgroundColor: 'transparent',
                '&:hover': {
                  borderColor: 'currentColor',
                },
                '& .MuiSelect-icon': {
                  color: '#d4af37',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(212, 175, 55, 0.637)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#d4af37', 
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                    '& .MuiMenuItem-root': {
                      color: '#fff',
                      '&:hover': {
                        bgcolor: 'rgba(212, 175, 55, 0.637)', 
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="slider1">Admin</MenuItem>
              <MenuItem value="slider2">Head Staff</MenuItem>
              <MenuItem value="slider3">Staff</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} flexDirection="column" alignItems="center">
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
      <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h4" textAlign="center" mb={2} mt={1}>
            External Monitor
          </Typography>
          <Card id='photoBox'>
            <img src={ExternalMonitor} alt="about" style={{ maxWidth: "100%", height: "auto", }} />
          </Card>
          
        </Grid>
    </Grid>
  );
}

export default UI;
