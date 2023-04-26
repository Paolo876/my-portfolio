import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import ProcessStepper from './ProcessStepper'
import "../../../index.scss"
import ProcessStepperMobile from './ProcessStepperMobile'

const processItems = [
  {
    title: "Conceptualization",
    body: "The idea turns into a concept. This is the process where I construct the main purpose and functions of the project. I then decide of the project theme, color scheme, considerations, and utilities of the app.",
  },
  {
    title: "Planning",
    body: "This process is where I layout the structure and UI/UX of my app. I list down the web pages needed, the libraries or frameworks to use, the initial pseudo-codes, and other preparations before I start building.",
  },
  {
    title: "Development",
    body: "When the foundations have been set, it's time to start building. I always try to make sure that I follow my plan and stick to my concept. This way the result will be just as I envisioned.",
  },

]
const Process = () => {
  return (
    <Box sx={{position: "relative", px: {xs:1, sm: 1, md: 1.25, lg: 2.25, xl: 3}, py: {xs:2, sm: 3, md: 7, lg: 9}}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(220,220,220,.15)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Box sx={{display: {xs: "initial", lg: "none"}}}>
        <Typography variant="h4" align="center" fontSize={{xs:22, sm: 25, md: 32}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={{xl:1.3}}>My Work Process</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 4, sm: 4, md:7}}}></Box>
      </Box>
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", overflowX:"auto", overflowY: "hidden"}}>
        <Grid item xs={12} md={12} lg={2.5}>
          <Box sx={{display: {xs: "none", lg: "initial"}, mixBlendMode: "difference"}}>
            <Typography variant="h4" align="left" fontSize={{lg: 45, xl: 58}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:5}} lineHeight={{lg:1.6, xl:1.45}}>My<br/>Work<br/>Process</Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "8px", width: "12px", mr: "auto", mt: {xs: 1.5, md:2}, ml: .2}} ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={9.5} pl={{md:0, lg:2, xl: 4}}>
          <Box sx={{display: {xs: "none", md: "initial"}}}>
            <ProcessStepper processItems={processItems}/>
          </Box>
          <Box sx={{display: {xs: "initial", md: "none"}}}>
            <ProcessStepperMobile processItems={processItems}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Process

