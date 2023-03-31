import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "white", mixBlendMode: "overlay", opacity: .75}}></Box>
      <Grid container sx={{px: 5, py: 9, justifyContent: "center", alignItems: "flex-start", maxWidth: "1900px", mx: "auto"}}>
        <Grid item xs={12} mb={3} sx={{opacity: .9}}>
          <Typography variant="h4" align="center">Skills</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "20px", mx: "auto", mt: 3.5}} ></Box>
          </Grid>
        <Grid item xs={12} md={3.75} mt={6} mb={5}>
          <SkillsDescription/>
        </Grid>
        <Grid item xs={12} md={4.75} mt={8} mb={5} pl={2}>
          <SkillsShowcase/>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Skills