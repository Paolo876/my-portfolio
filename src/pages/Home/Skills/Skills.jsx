import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "white", mixBlendMode: "overlay", opacity: .85, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:2, md: 3}, py: {xs:4, sm: 5, md: 7, lg: 9}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} mb={{xs:0, md: 3}} sx={{opacity: .9}}>
          <Typography variant="h4" align="center" fontSize={{xs:26, sm: 28, md: 30, lg: 32}}>Skills</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "20px", mx: "auto", mt: 3.5}} ></Box>
          </Grid>
        <Grid item xs={12} md={5.5} mt={{xs:0, md: 6}} mb={5} order={{xs: 3, md: 2}}>
          <SkillsDescription/>
        </Grid>
        <Grid item xs={12} md={6.5} mt={{xs:4, md: 8}} mb={{xs:2, md: 5}} pl={{xs:0, md: 2}} order={{xs: 2, md: 3}}>
          <SkillsShowcase/>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Skills