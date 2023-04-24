import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'

const Process = () => {
  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(175,175,175,1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:1, sm: 2, md: 1.5, lg: 3}, py: {xs:5, md: 6, lg: 7}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} md={6} lg={6} px={{xs:1, md: 5}}>
          <PurposeDescription/>
        </Grid>
        <Grid item xs={12} md={6} lg={6} px={{xs:1, md: 5}}>
          <MissionDescription/>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Process