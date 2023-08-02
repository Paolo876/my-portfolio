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
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15}
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(15,15,15,.25)", zIndex: -1}}></Box>
      <Box sx={{display: {xs: "initial", lg: "none"}}}>
        <Typography variant="h4" align="center" fontSize={{xs:25, sm: 28, md: 30}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={{xl:1.3}} color="primary.main">My Work Process</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 4, sm: 4, md:7}, mixBlendMode: "difference", opacity: .7}}></Box>
      </Box>

      <Grid 
        container 
        sx={{
          justifyContent: "center", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto", 
          overflowX:"auto", 
          overflowY: "hidden"
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h2" 
              align="center" 
              fontWeight={400}
              fontSize={{xs: 26, sm: 27, md: 28, lg: 30, xl: 45}} 
              letterSpacing={{xs: .5, lg:1}}
              lineHeight={{xs:1.1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
              }}
            >
              My Work Process
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12} pl={{md:0, lg:2, xl: 0}} mt={{ xl: 10 }}>
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

