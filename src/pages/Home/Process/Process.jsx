import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import ProcessStepper from './ProcessStepper'

const Process = () => {
  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(220,220,220,.15)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:1, sm: 2, md: 1.5, lg: 3}, py: {xs:2, sm: 3, md: 5, lg: 9}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} md={2} lg={2} >
          <Typography variant="h4" align="left" fontSize={{xs:35, sm: 40, md: 28, lg: 36, xl: 43}} letterSpacing={{xs:4, sm:6, md:1.5, lg:3, xl:6}} lineHeight={1.3}>My<br/>Work<br/>Process</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "8px", width: "12px", mr: "auto", mt: {xs: 1.5, md:2}, ml: .2}} ></Box>
        </Grid>
        <Grid item xs={12} md={12} lg={10} pl={2}>
          <ProcessStepper/>
          {/* create vertical stepper for xs,sm widths */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Process