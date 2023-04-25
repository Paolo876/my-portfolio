import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import ProcessStepper from './ProcessStepper'

const Process = () => {
  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(220,220,220,.15)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:1, sm: 2, md: 1.5, lg: 3}, py: {xs:2, sm: 3, md: 7, lg: 9}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} md={12} lg={2} pt={2}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography variant="h4" align="left" fontSize={{xs:35, sm: 40, md: 28, lg: 38, xl: 45}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:5}} lineHeight={1.3}>My<br/>Work<br/>Process</Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "8px", width: "12px", mr: "auto", mt: {xs: 1.5, md:2}, ml: .2}} ></Box>
          </Box>
          <Box sx={{display: {xs: "initial", lg: "none"}}}>
            <Typography variant="h4" align="center" fontSize={{xs:22, sm: 25, md: 28}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={1.3}>My Work Process</Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 3, md:5}}}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={10} pl={{md:0, lg:2}}>
          <Box sx={{display: {xs: "none", md: "initial"}}}>
            <ProcessStepper/>
          </Box>
          {/* create vertical stepper for xs,sm widths */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Process