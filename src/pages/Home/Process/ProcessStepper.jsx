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
  // [`&.${stepConnectorClasses.completed}`]: {
  //   [`& .${stepConnectorClasses.line}`]: {
  //     backgroundImage:
  //       'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  //   },
  // },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    opacity:.75, 
    backgroundColor:
      theme.palette.secondary.dark,
      // theme.palette.mode === 'dark' ? theme.palette.grey[600] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => {

  return ({
  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  // color: '#fff',
  width: 55,
  height: 55,
  // padding: 7,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  // border: "2px solid white",
  margin: "0 2px",

})});


function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Box sx={{p:1.25}}><SkillIconImageItem src={conceptIcon} objectFit='scale-down'/></Box>,
    2: <Box sx={{p:1.5}}><SkillIconImageItem src={planningIcon} objectFit='scale-down'/></Box>,
    3: <Box sx={{p:1.25}}><SkillIconImageItem src={executeIcon} objectFit='scale-down'/></Box>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


const ProcessStepper = ({ processItems }) => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={4}>
      {processItems.map(item => <Step key={item.title}>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>{item.title}</Typography>
          <Typography variant="body1" fontSize={{md: 13.5, lg:14, xl: 15.5}} fontWeight={400} px={{md: .5, lg:1, xl:2.25}} mt={{md: 2, lg:2, xl: 3.5}} sx={{textAlign: "justify", textJustify: "inter-word", opacity: .7}}>
            {item.body}
          </Typography>
        </StepLabel>
      </Step>)}
    </Stepper>
  )
}

export default ProcessStepper