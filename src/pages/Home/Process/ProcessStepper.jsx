import React from 'react'
import { Step, StepLabel, Stepper, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import conceptIcon from "../../../assets/concept.svg";
import planningIcon from "../../../assets/planning.svg";
import executeIcon from "../../../assets/execute.svg";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SkillIconImageItem from "../../../components/SkillIconImageItem"


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
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
    height: 2,
    border: 0,
    opacity:.65, 
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  // backgroundColor: "theme.palette.primary",
  zIndex: 1,
  // color: '#fff',
  width: 55,
  height: 55,
  // padding: 7,
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
    1: <Box sx={{filter: "invert(.95)", p:1.25}}><SkillIconImageItem src={conceptIcon} objectFit='scale-down'/></Box>,
    2: <Box sx={{filter: "invert(.95)", p:1.5}}><SkillIconImageItem src={planningIcon} objectFit='scale-down'/></Box>,
    3: <Box sx={{filter: "invert(.95)", p:1.25}}><SkillIconImageItem src={executeIcon} objectFit='scale-down'/></Box>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


const ProcessStepper = () => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={4}>
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={0.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>Conceptualization</Typography>
          <Typography variant="body1" fontSize={{md: 13.5, lg:14, xl: 15.5}} fontWeight={400} px={{md: .5, lg:1, xl:4}} mt={{md: 2, lg:2, xl: 3.5}} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word", opacity: .9}}>
            The idea turns into a concept. This is the process where I construct the main purpose and functions of the project. I then decide of the project theme, color scheme, considerations, and utilities of the app.
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>Planning</Typography>
          <Typography variant="body1" fontSize={{md: 13.5, lg:14, xl: 15.5}} fontWeight={400} px={{md: .5, lg:1, xl:4}} mt={{md: 2, lg:2, xl: 3.5}} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word", opacity: .9}}>
            This process is where I layout the structure and UI/UX of my app. I list down the web pages needed, the libraries or frameworks to use, 
            the initial pseudo-codes, and other preparations before I start building.
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>Execution</Typography>
          <Typography variant="body1" fontSize={{md: 13.5, lg:14, xl: 15.5}} fontWeight={400} px={{md: .5, lg:1, xl:4}} mt={{md: 2, lg:2, xl: 3.5}} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word", opacity: .9}}>
            When the foundations have been set, it's time to start building. I always try to make sure that I follow my plan and stick to my concept. 
            This way the result will be just as I envisioned.
          </Typography>
        </StepLabel>
      </Step>

    </Stepper>
  )
}

export default ProcessStepper