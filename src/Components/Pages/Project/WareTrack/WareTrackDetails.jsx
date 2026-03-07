import React from 'react';
import { Grid, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import Description from './Description';
import DevTools from './DevTools';

function WareTrackDetails() {
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
          <Typography sx={{ color: '#d4af37' }}>WareTrack</Typography>
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
            <strong id='lblYellow'>WareTrack</strong>
            <Typography variant='h5'>Warehouse Inventory Management System</Typography>
          </Typography>
          
        </Grid>

        <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={3}
          >
          <Typography variant='h4' textAlign='center' mb={2}>
            Description
          </Typography>
          <Typography variant="body1" sx={{ textAlign: { xs: 'center', lg: 'left' }}}>
            <Typography variant="h6">
            <strong id='lblYellow'>WareTrack</strong> is a warehouse management system made by Aurumax Tech Solutions Inc. that uses 
            <strong id='lblYellow'> RFID</strong> technology to help businesses track 
              and manage their inventory more accurately and efficiently. It has both a web and mobile 
              application, built with ReactJS for the web, and Xamarin with C# for mobile, with ASP.NET Core 
              Web API handling the backend.
            </Typography>
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
              Key <strong id='lblYellow'>Resposibilities</strong>
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

          <Grid            
            item
            xs={12}
          >            
            {/* <Typography variant="h3" whiteSpace="nowrap" sx={{marginBottom: "2%",textAlign: {xs: "center"}}}>
              AIMS <strong id='lblYellow'>Modules</strong>
            </Typography> */}
          </Grid>

          <Grid>
            {/* <Typography variant="h3" whiteSpace="nowrap" sx={{marginTop: "4%",textAlign: {xs: "center"}}}>
              <strong id='lblYellow'>Dev </strong>Tools
            </Typography>
            <DevTools/> */}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default WareTrackDetails;
