import React from 'react';
import { Grid, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import Description from './Description';
import DevTools from './DevTools';
import UIButton from './UI';
// import UI from './UI/UI';

function AssetPRODetails() {
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
          <Typography sx={{ color: '#d4af37' }}>AssetPRO</Typography>
        </Breadcrumbs>

        {/* Details */}
        <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
          <Typography variant='h2' textAlign='center' mb={2}>
            Asset<strong id='lblYellow'>PRO</strong>
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
            
            <UIButton/>
          </Grid>
          <Typography variant="h3" whiteSpace="nowrap" sx={{textAlign: {xs: "center"}}}>
            <strong id='lblYellow'>Dev </strong>Tools
            </Typography>
            <DevTools/>
        </Grid>
      </Container>
    </Container>
  );
}

export default AssetPRODetails;
