import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import conceptIcon from "../../../assets/concept.svg";
import planningIcon from "../../../assets/planning.svg";
import executeIcon from "../../../assets/execute.svg";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SkillIconImageItem from "../../../components/SkillIconImageItem"

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.dark,
      opacity:1,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.dark,
      opacity:1,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    opacity:.5, 
    width: "108%",
    backgroundColor:
      theme.palette.secondary.dark,
    borderRadius: 1,
  },
}));


export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) =>  ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  width: 55,
  height: 55,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transform: "scale(.9)",
  margin: "0 2px",
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    filter: "brightness(1.1)",
    transform: "scale(1)"
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main}),
}));


export const ColorlibStepIcon = (props) => {
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
  