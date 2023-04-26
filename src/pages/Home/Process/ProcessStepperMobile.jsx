import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Typography } from '@mui/material'

const ProcessStepperMobile = () => {
  return (
    <Box>
      <Carousel
        indicators={true}
        autoPlay={false}
      >
        <Paper sx={{p: 2}}>
          <Typography variant="h6" letterSpacing={0.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}}>Conceptualization</Typography>
          <Typography variant="body1" fontSize={{md: 13.5, lg:14, xl: 15.5}} fontWeight={400} px={{md: .5, lg:1, xl:4}} mt={{md: 2, lg:2, xl: 3.5}} sx={{mixBlendMode: "difference", textAlign: "justify", textJustify: "inter-word", opacity: .9}}>
            The idea turns into a concept. This is the process where I construct the main purpose and functions of the project. I then decide of the project theme, color scheme, considerations, and utilities of the app.
          </Typography>
        </Paper>
        <Paper>
          asdasd
        </Paper>
      </Carousel>
    </Box>
  )
}

export default ProcessStepperMobile