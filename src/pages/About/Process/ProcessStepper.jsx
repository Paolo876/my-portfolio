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
        }), 6000)
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
              mt={3}
              sx={{
                opacity: activeStep === index ? 1 : .75,
                transition: "all 150ms linear",
                textShadow: activeStep === index ? "1px 1px 7px rgba(125,125,125,.5)" : "1px 1px 7px rgba(25,25,25,.75)",
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
              px={{md: 1, lg:2.5, xl: 5}} 
              mt={{ md: 2, lg:3, xl: 4 }} 
              sx={{
                transition: "all 400ms ease-in-out",
                fontSize: { xs: 11, sm: 12, md: 12.5, lg:13.5, xl: 14 },
                fontWeight: 300,
                opacity: activeStep === index ? .7 : .45,
                transform: activeStep === index ? "scale(1.015)" : "scale(1)",
                letterSpacing: .3,
                textShadow: activeStep === index ? "1px 1px 7px rgba(75,75,75,.5)" : "1px 1px 7px rgba(10,10,10,.75)",
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