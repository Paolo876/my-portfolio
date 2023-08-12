import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Step, StepLabel, Stepper, Typography, Box } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepperMobile = ({ processItems }) => {
  const [ activeIndex, setActiveIndex ] = useState(0)
  return (
    <Box mt={{sm: 2}}>
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
            my:{xs:2, sm:1},
            minHeight: {xs: 190, sm:200},
          }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            fontWeight={400}
            textTransform="none"
            sx={{
              opacity: 1,
              transition: "all 150ms linear",
              textShadow: "1px 1px 7px rgba(125,125,125,.5)",
              fontSize: { xs: 20, sm: 23 },
              letterSpacing: 1
            }}
          >
            {item.title}
          </Typography>
          <Typography 
            variant="body1" 
            align='center'
            mt={{ sm: 2 }} 
            sx={{
              transition: "all 400ms ease-in-out",
              fontSize: { xs: 10, sm: 12.5 },
              fontWeight: 300,
              opacity: .7,
              letterSpacing: .3,
              textShadow: "1px 1px 7px rgba(75,75,75,.5)",
            }}
          >
            {item.body}
          </Typography>
        </Box>)}
      </Carousel>
    </Box>
  )
}

export default ProcessStepperMobile