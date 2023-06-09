import React from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepper = ({ processItems }) => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={3}>
      {processItems.map((item, index) => <Step key={item.title} sx={{pl:{md: 0, lg:2, xl:6}}}>
        <StepLabel StepIconComponent={ColorlibStepIcon}>
          <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>{item.title}</Typography>
          <Typography 
            variant="body1" 
            fontSize={{md: 13.5, lg:14, xl: 15}} 
            fontWeight={300} 
            px={{md: 1.5, lg:0}} 
            mt={{md: 2, lg:2, xl: 3}} 
            sx={{textAlign: "justify", textJustify: "inter-word", opacity: .8}}>
            {item.body}
          </Typography>
        </StepLabel>
      </Step>)}
    </Stepper>
  )
}

export default ProcessStepper