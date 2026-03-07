import React from 'react';
import { Typography, Grid, Container, Card } from '@mui/material';

import MyPhoto from '../../../img/MyPhoto.png';
import InformationBox from './InformationBox';
import Experiences from './Experiences';
import Techstack from "./TechSkill";
import Tools from './Tools';
import Github from './Github';

const AboutMe = () => {
  return (
    <Container maxWidth={false} disableGutters className="about-section">
      <Container>
        <Grid container justifyContent="center" spacing={3}>
        <Grid
            item
            md={7}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h3" whiteSpace="nowrap" gutterBottom>
              Mark Joshua Garcia
            </Typography>
            <Typography variant="body" whiteSpace="nowrap" gutterBottom>
              Software Engineer | Mobile & Web Developer
            </Typography>

          </Grid>

          <Grid
            item
            md={7}
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingTop="30px"
            paddingBottom="50px"
          >
            <Typography variant="h4" whiteSpace="nowrap" gutterBottom>
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
            paddingBottom="40px"
          >
            <Grid>
              <Card id='photoBox'>
                <img src={MyPhoto} alt="about" style={{ maxWidth: "100%", height: "auto", }} />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Experiences/>

        <Typography variant='h4' textAlign='center' mb={2} mt={3}>
          Technical <strong id='lblYellow'>Skills </strong>
        </Typography>

        <Techstack/>

        <Typography variant='h4' textAlign='center' mb={2}>
        <strong id='lblYellow'>Tools </strong>I use
        </Typography>

        <Tools/>

        <Github/>

      </Container>
    </Container>
  );
};

export default AboutMe;