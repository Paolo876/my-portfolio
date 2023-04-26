import React from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'


const ProcessStepper = ({ processItems }) => {
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={3}>
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