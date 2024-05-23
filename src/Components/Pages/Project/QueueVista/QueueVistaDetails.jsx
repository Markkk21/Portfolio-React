import React from 'react';
import { Grid, Card, Typography, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import QueueVistaPhoto from './PhotoSlider';

function QueueVistaDetails() {
  return (
    <div id="containerDetails">
      <Container item xs={12}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ marginBottom: 4, color: "white", fontFamily: "Raleway" }}>
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
        <Typography variant='h3' textAlign='center' mb={4}>
          Queue<strong id='lblYellow'>Vista</strong>
        </Typography>
        <Grid container spacing={2}>
          {/* Projects */}
          <Grid item xs={12} md={4}>
              <QueueVistaPhoto />
          </Grid>

          {/* Projects */}
          <Grid item xs={12} md={4}>
            <Card id='projectBox'>
              <Typography textAlign='center'>Insert</Typography>
            </Card>
          </Grid>

          {/* Projects */}
          <Grid item xs={12} md={4}>
            <Card id='projectBox'>
              {/* <AssetPRO/> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default QueueVistaDetails;
