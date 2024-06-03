import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Photos
import Home from '../../../../img/QueueVista/Desktop/Admin/HomeDesktop.png'
import Login from '../../../../img/QueueVista/Desktop/Admin/LoginDesktop.png'
import DashboardAdmin from '../../../../img/QueueVista/Desktop/Admin/DashboardDesktop.png'
import ClientAdmin from '../../../../img/QueueVista/Desktop/Admin/AdminClient.png'
import StaffAdmin from '../../../../img/QueueVista/Desktop/Admin/AdminStaff.png'
import WindowAdmin from '../../../../img/QueueVista/Desktop/Admin/AdminWindows.png'
import PurposeAdmin from '../../../../img/QueueVista/Desktop/Admin/AdminPurpose.png'
import AccountAdmin from '../../../../img/QueueVista/Desktop/Admin/AdminAccount.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Home',
    imgPath: Home,
      
  },
  {
    label: 'Login',
    imgPath: Login,
      
  },
  {
    label: 'Dashboard – Admin',
    imgPath: DashboardAdmin,
      
  },
  {
    label: 'Clients – Admin',
    imgPath: ClientAdmin,
      
  },
  {
    label: 'Manage Staff – Admin',
    imgPath: StaffAdmin,
      
  },
  {
    label: 'Manage Window – Admin',
    imgPath: WindowAdmin,
      
  },
  {
    label: 'Manage Purpose – Admin',
    imgPath: PurposeAdmin,
      
  },
  {
    label: 'Manage Account – Admin',
    imgPath: AccountAdmin,
      
  },
];

function UIStaff() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1, border: "1.7px solid rgba(212, 175, 55, 0.637)", boxShadow: "4px 5px 4px 3px rgba(83, 70, 22, 0.637)" }}>

      <Typography>{images[activeStep].label}</Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        '& .MuiMobileStepper-dot': {
          backgroundColor: 'gray', // default color for dots
        },
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: 'white', // active dot color
        },
        '& .MuiButton-root': {
          color: 'white', // button text color
        }
      }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: 'white' }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color: 'white' }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default UIStaff;
