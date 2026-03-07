import React from 'react';
import { Grid, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import Description from './Description';
import DevTools from './DevTools';

function WeatherAppDetails() {
  return (

    <Container maxWidth={false} disableGutters id="containerAssetPRODetails">
      <Container>

        {/* BreadCrumbs */}
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{marginBottom:2, color: "white", fontFamily: "Raleway" }}>
          <MuiLink
            component={Link}
            to="/"
            underline="hover"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:visited': {
                color: 'inherit',
              },
              '&:hover': {
                color: 'inherit',
                textDecoration: 'underline',
              }
            }}
          >
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            to="/projects"
            underline="hover"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:visited': {
                color: 'inherit',
              },
              '&:hover': {
                color: 'inherit',
                textDecoration: 'underline',
              }
            }}
          >
            Projects
          </MuiLink>
          <Typography sx={{ color: '#d4af37' }}>WeatherApp</Typography>
        </Breadcrumbs>

        {/* Details */}
        <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={3}
          >
          <Typography variant='h2' textAlign='center' mb={2}>
            Weather<strong id='lblYellow'> App</strong>
            <Typography variant='h5'>Real-Time Weather Forecast</Typography>
          </Typography>
          
        </Grid>


        <Grid container justifyContent="center" spacing={3} >
          
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h4" whiteSpace="nowrap" sx={{marginTop: "2%", textAlign: {xs: "center"}}}>
              Description
            </Typography>
            
            <Description/>

          </Grid>

          <Grid
            item
            md={5}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h4" whiteSpace="nowrap" sx={{marginTop: "4%",textAlign: {xs: "center"}}}>
              <strong id='lblYellow'>Dev </strong>Tools
            </Typography>
            <DevTools/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default WeatherAppDetails;
