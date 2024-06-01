import React from 'react';
import { Grid, Card, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Tline from './TimelineDetails';
// import QueueVistaPhoto from './PhotoSlider';

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
          >
          <Typography variant='h3' textAlign='center' mb={2}>
            Queue<strong id='lblYellow'>Vista</strong>
          </Typography>
          
        </Grid>


        <Grid container justifyContent="center" spacing={3} padding="10px">
          
            <Grid
              item
              md={7}
              display="flex"
              flexDirection="column"
              alignItems="center"
              paddingTop="30px"
              paddingBottom="50px"
            >
            <Tline/>
            </Grid>

            <Grid
              item
              md={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop="120px"
              paddingBottom="50px"
            >
            <Grid>
              <Card id='sliderBox'>
                {/* <QueueVistaPhoto /> */}
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='h3' textAlign='center' mb={2} mt={1}>
          Technical <strong id='lblYellow'>Skills </strong>
        </Typography>

        <Typography variant='h3' textAlign='center' mb={2}>
        <strong id='lblYellow'>Tools </strong>I use
        </Typography>

      </Container>
    </Container>
  );
}

export default QueueVistaDetails;
