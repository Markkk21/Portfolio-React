import React, {useEffect} from 'react';
import { Typography, Grid, Container, Card } from '@mui/material';

import MyPhoto from '../../../img/MyPhoto.png';
import InformationBox from '../../Layout/InformationBox';

import Techstack from "./TechSkill";
import Tools from './Tools';
import Github from './Github';

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
            <Typography variant="h3" gutterBottom>
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
            <Grid>
              <Card id='photoBox'>
                <img src={MyPhoto} alt="about" style={{ maxWidth: "100%", height: "auto" }} />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='h3' textAlign='center' mb={2} mt={1}>
          Technical <strong id='lblYellow'>Skills </strong>
        </Typography>

        <Techstack/>

        <Typography variant='h3' textAlign='center' mb={2}>
        <strong id='lblYellow'>Tools </strong>I use
        </Typography>

        <Tools/>

        <Github/>

      </Container>
    </Container>
  );
};

export default AboutMe;