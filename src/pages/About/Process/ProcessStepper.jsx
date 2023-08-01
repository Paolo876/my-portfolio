import React from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepper = ({ processItems }) => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={3}>
      {processItems.map((item, index) => <Step key={item.title} sx={{pl:{md: 0, lg:2, xl:6}}}>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography 
            variant="h2" 
            align="center" 
            fontWeight={400}
            fontSize={{xs: 17, sm: 18, md: 19, lg: 20, xl: 21}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(25,25,25,.75)",
            }}
          >{item.title}</Typography>
          <Typography 
            variant="body1" 
            px={{md: 1.5, lg:0}} 
            mt={{md: 2, lg:2, xl: 3}} 
            sx={{
              textAlign: "justify", 
              textJustify: "inter-word", 
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
      </Step>)}
    </Stepper>
  )
}

export default ProcessStepper