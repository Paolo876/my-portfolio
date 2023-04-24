import React from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));


function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


const ProcessStepper = () => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={4} >
      {/* <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={18}>Idea</Typography>
          <Typography variant="body1" fontSize={16.5} px={1.25} lineHeight={1.4} mt={3} sx={{mixBlendMode: "difference"}}>
            A great idea comes when we least expect it. When it does, I take note of it, list down its use and functions, and turn it into a project.
          </Typography>
        </StepLabel>
      </Step> */}
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={0.25} fontWeight={800} fontSize={17.5}>Conceptualization</Typography>
          <Typography variant="body1" fontSize={16.5} px={1.25} lineHeight={1.4} mt={3} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word"}}>
            The idea turns into a concept. This is the process where I construct the main purpose and use of the project. I then decide of the project theme, color scheme, considerations, and utilities of the app.
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={18}>Planning</Typography>
          <Typography variant="body1" fontSize={16.5} px={1.25} lineHeight={1.4} mt={3} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word"}}>
           This process is where I layout the structure of my app or what I call the blueprint stage. I write down the web pages needed, the libraries or frameworks to use, 
           and the initial pseudo-code for the app.
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={18}>Execution</Typography>
          <Typography variant="body1" fontSize={16.5} px={1.25} lineHeight={1.4} mt={3} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word"}}>
           When the app's foundations have been set, it is time to start building. I always try to make sure that I follow my plan and stick to my concept. 
           This way the result will be just as I envisioned.
          </Typography>
        </StepLabel>
      </Step>

    </Stepper>
  )
}

export default ProcessStepper