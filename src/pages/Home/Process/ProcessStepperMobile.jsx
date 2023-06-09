import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Step, StepLabel, Stepper, Typography, Box } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepperMobile = ({ processItems }) => {
  const [ activeIndex, setActiveIndex ] = useState(0)
  return (
    <Box>
      <Box sx={{maxWidth: {xs: 400, sm: 600}, mx: "auto"}}>
        <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={activeIndex}>
          {processItems.map((item, index) => <Step key={item.title}>
            <StepLabel StepIconComponent={ColorlibStepIcon}  onClick={() => setActiveIndex(index)}>
            </StepLabel>
          </Step>)}
        </Stepper>
      </Box>
      <Carousel
        indicators={true}
        autoPlay={false}
        index={activeIndex}
        onChange={(e) => setActiveIndex(e)}
        navButtonsAlwaysInvisible={true}
        
      >
        {processItems.map(item => <Box 
          key={item.title} 
          sx={{
            px:2,
            py:{xs:3, sm: 4},
            mx:{xs:1, sm:2},
            my:{xs:2, sm:2},
            minHeight: {xs: 190, sm:200},
          }}
          >
          <Typography variant="h6" align="center" letterSpacing={1.25} fontWeight={800} fontSize={{xs: 17, sm: 19}}>{item.title}</Typography>
          <Typography variant="body1" align="center" fontSize={{xs: 13.5, sm: 15}} fontWeight={300} mt={{xs: 1.25, sm: 3}} sx={{textAlign: "justify", textJustify: "inter-word", opacity: .7}}>
            {item.body}
          </Typography>
        </Box>)}
      </Carousel>
    </Box>
  )
}

export default ProcessStepperMobile