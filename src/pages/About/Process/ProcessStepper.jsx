import { useState, useEffect } from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepper = ({ processItems }) => {
  const [ activeStep, setActiveStep ] = useState(0);
  const [ isHovered, setIsHovered ] = useState(false)

  useEffect(() => {
      const interval = setInterval(
        () => setActiveStep(prevState => {
          if(prevState === processItems.length - 1) {
            return 0
          } else {
            return prevState + 1
          }
        }), 5000)
      if(isHovered) clearInterval(interval) 
      return () => clearInterval(interval)    
    
  }, [isHovered])
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={activeStep}>
      {processItems.map((item, index) => 
        <Step 
          key={item.title} 
          onMouseOver={() => { setActiveStep(index); setIsHovered(true) }}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            }} 
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <Typography 
              variant="h2" 
              align="center" 
              fontWeight={400}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                transition: "all 200ms linear",
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                fontSize: {
                  xs: activeStep === index ? 20.5 : 20, 
                  sm: activeStep === index ? 21.5 : 21, 
                  md: activeStep === index ? 22.5 : 22, 
                  lg: activeStep === index ? 23.5 : 23, 
                },
                letterSpacing: activeStep === index ? 1 : .5
              }}
            >{item.title}</Typography>
            <Typography 
              variant="body1" 
              px={{md: 1.5, lg:0, xl: 5}} 
              mt={{md: 2, lg:2, xl: 3}} 
              sx={{
                fontSize: {xs: 12.5, sm: 13, md: 13.5, lg:14, xl: 14},
                fontWeight: 300,
                opacity: .55,
                letterSpacing: .3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              {item.body}
            </Typography>
          </StepLabel>
        </Step>
      )}
    </Stepper>
  )
}

export default ProcessStepper