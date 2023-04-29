import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsCarousel from './SkillsCarousel';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: {xs: "rgba(250,250,250,.15)", md:"rgba(200,200,200,.1)"}, mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:0, sm: 0, md: 1.5, lg: 3}, py: {xs:6, sm: 6, md: 8, lg: 10, xl: 12}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Box sx={{display: {xs: "initial", md: "none"}, mt: 2}}>
        <Typography variant="h4" align="center" fontSize={{xs:25, sm: 28, md: 30}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={{xl:1.3}} color="primary.main">Technologies</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 4, sm: 4, md:7}, mixBlendMode: "difference", opacity: .7}}></Box>
      </Box>
        <Grid item xs={12} md={7} lg={7.75}>
          <SkillsCarousel/>
        </Grid>
        <Grid item xs={12} md={5} lg={4.25}>
          <SkillsDescription/>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Skills