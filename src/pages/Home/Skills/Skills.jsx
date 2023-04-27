import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';
import SkillsCarousel from './SkillsCarousel';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Box sx={{position: "relative"}}>
      {/* <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(50,50,50,.2)", mixBlendMode: "overlay", opacity: .85, zIndex: -1}}></Box> */}
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:1, sm: 2, md: 1.5, lg: 3}, py: {xs:2, sm: 3, md: 5, lg: 9}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>

        <Grid item xs={12} md={7} lg={7.5} mt={{xs:2, sm:4, md: "auto"}} mb={{xs:2, md: "auto"}} pl={{xs:0, md: 2}} >
          {/* <SkillsShowcase/> */}
          <SkillsCarousel/>
        </Grid>
        <Grid item xs={12} md={5} lg={4.5} mt={{xs:0, md: 2, lg: 6}}>
          <SkillsDescription/>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Skills