import React from 'react';
import { Grid, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import Description from './Description';
import DevTools from './DevTools';

function AimsDetails() {
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
          <Typography sx={{ color: '#d4af37' }}>AIMS</Typography>
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
            <strong id='lblYellow'>AIMS</strong>
            <Typography variant='h5'>Asset Inventory Management System</Typography>
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
            Assigned <strong id='lblYellow'>Tasks</strong>
            </Typography>
            
            <Description/>

          </Grid>

          <Grid
            item
            md={5}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h3" whiteSpace="nowrap" sx={{marginBottom: "2%",textAlign: {xs: "center"}}}>
                Ingress/<strong id='lblYellow'>Egress</strong>
            </Typography>

          </Grid>
          <Typography variant="h3" whiteSpace="nowrap" sx={{marginTop: "4%",textAlign: {xs: "center"}}}>
            <strong id='lblYellow'>Dev </strong>Tools
            </Typography>
            <DevTools/>
        </Grid>
      </Container>
    </Container>
  );
}

export default AimsDetails;
