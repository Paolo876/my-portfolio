import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import conceptIcon from "../../../assets/concept.svg";
import planningIcon from "../../../assets/planning.svg";
import executeIcon from "../../../assets/execute.svg";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SkillIconImageItem from "../../../components/SkillIconImageItem"

export const ColorlibConnector = styled(StepConnector)(() => ({
  
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "rgba(100,100,100,.45)",
      opacity:1,
      
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "rgba(100,100,100,.45)",
      opacity:1,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    opacity:.5, 
    width: "108%",
    backgroundColor:
      "rgba(100,100,100,.45)",
    borderRadius: 1,
  },
}));


export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) =>  ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  // width: 55,
  // height: 55,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: "all 200ms linear",
  transform: "scale(.9)",
  margin: "0 2px",
  ...(ownerState.active && {
    backgroundColor: "#d19119",
    filter: "brightness(1.1)",
    transform: "scale(1.025)",

  }),
  ...(ownerState.completed && {
    backgroundColor: "rgba(250,250,250,1)"}),
}));


const boxItemStyles = {
  p:1.5, 
  height: {xs: 45, sm: 50, md: 52, lg:55}, 
  width: {xs: 45, sm: 50, md: 52, lg:55},
}

export const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;

  const icons = {
    1: <Box sx={boxItemStyles}><SkillIconImageItem src={conceptIcon} objectFit='scale-down'/></Box>,
    2: <Box sx={boxItemStyles}><SkillIconImageItem src={planningIcon} objectFit='scale-down'/></Box>,
    3: <Box sx={boxItemStyles}><SkillIconImageItem src={executeIcon} objectFit='scale-down'/></Box>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
  