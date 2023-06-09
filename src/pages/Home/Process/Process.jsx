import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import ProcessStepper from './ProcessStepper'
import "../../../index.scss"
import ProcessStepperMobile from './ProcessStepperMobile'

const processItems = [
  {
    title: "Conceptualization",
    body: "This is the initial phase of my work where I define the main purpose and functions of the project. I create a draft of the UI/UX and the necessary diagrams for the project.",
  },
  {
    title: "Planning",
    body: "This is the process of refining the initial drafts and having a clear vision of the outcome. I write the initial pseudo-codes, list the needed libraries and frameworks, and other preparations before I start coding",
  },
  {
    title: "Development",
    body: "When the foundations have been set, it's time to start building. I always try to make sure that I follow my plan and stick to my concept. This way, the result will be just as I envisioned.",
  },

]
const Process = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15}
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Box sx={{display: {xs: "initial", lg: "none"}}}>
        <Typography variant="h4" align="center" fontSize={{xs:25, sm: 28, md: 30}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={{xl:1.3}} color="primary.main">My Work Process</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 4, sm: 4, md:7}, mixBlendMode: "difference", opacity: .7}}></Box>
      </Box>
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", overflowX:"auto", overflowY: "hidden", px: {md: 0,lg:3}}}>
        <Grid item xs={12} md={12} lg={2.5}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h4" 
              align="left" 
              fontSize={{lg: 45, xl: 55}} 
              letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:5}} 
              lineHeight={{lg:1.6, xl:1.15}} 
              color="primary.main"
            >
              My<br/>Work<br/>Process
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "12px", width: "12px", mr: "auto", mt: {xs: 1.5, md:3.5}, ml: .2, mixBlendMode: "difference", opacity: .7}}></Box>
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

