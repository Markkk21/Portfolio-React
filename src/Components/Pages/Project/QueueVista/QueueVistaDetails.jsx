import React from 'react';
import { Grid, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Tline from './TimelineDetails';
import Introduction from './Intro';
import DevTools from './DevTools';
import UI from './UI/UI';

function QueueVistaDetails() {
  return (

    <Container maxWidth={false} disableGutters id="containerDetails">
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
          <Typography sx={{ color: '#d4af37' }}>QueueVista</Typography>
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
            Queue<strong id='lblYellow'>Vista</strong>
            <Typography variant='h5'>Digital Waiting Aide</Typography>
          </Typography>
          
        </Grid>


        <Grid container justifyContent="center" spacing={3} >
          
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h3" whiteSpace="nowrap" sx={{marginTop: "2%", textAlign: {xs: "center"}}}>
              Project <strong id='lblYellow'>Purpose</strong>
            </Typography>
            <Introduction/>

            <Typography variant="h3" whiteSpace="nowrap" sx={{marginTop: "12%", textAlign: {xs: "center"}}}>
            <strong id='lblYellow'>Dev </strong>Tools
            </Typography>
            <DevTools/>

          </Grid>

          <Grid
            item
            md={5}
            display="flex"
            flexDirection="column"
          >
            <Tline/>
          </Grid>
        </Grid>

          <Typography variant='h3' textAlign='center' mb={2} mt={5}>
            User <strong id='lblYellow'>Interface</strong>
          </Typography>

          <UI/>



      </Container>
    </Container>
  );
}

export default QueueVistaDetails;
