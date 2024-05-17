import React, {useEffect} from 'react';
import { Typography, Grid, Container } from '@mui/material';

import MyPhoto from '../../img/MyPhoto.png';
import InformationBox from '../Layout/InformationBox';

const AboutMe = () => {
  return (
    <Container maxWidth={false} disableGutters className="about-section">
      <Container>
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
            <Typography variant="h4" gutterBottom>
            Get to Know <strong id='lblYellow'>Me</strong>
            </Typography>

            <InformationBox/>
          
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
            <img src={MyPhoto} alt="about" style={{ maxWidth: "100%", height: "auto" }} />
          </Grid>
        </Grid>
        </Container>
        </Container>
  );
};

export default AboutMe;