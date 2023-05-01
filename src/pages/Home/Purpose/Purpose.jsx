import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'
import PurposeDescription from './PurposeDescription'
import MissionDescription from './MissionDescription'

const Purpose = () => {
  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: {xs: "rgba(125,125,125,.15)", md:"rgba(200,200,200,.1)"}, mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:3, sm: 3, md: 1.5, lg: 3}, py: {xs:8, sm: 8, md: 8, lg: 8, xl: 8}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} md={4.5} lg={4} pr={{xs:0, md: 5, lg:8}} order={{xs: 1, md: 1}}>
          <PurposeDescription/>
        </Grid>
        <Grid item xs={12} md={4.5} lg={4} pr={{xs:0, md: 5, lg:8}} order={{xs: 2, md: 2}}>
          <MissionDescription/>
        </Grid>
        <Grid item xs={12} md={2.75} lg={4} pl={{xs:1, md: 5}} order={{xs: 3, md: 3}}></Grid>
      </Grid>
    </Box>
  )
}

export default Purpose