import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Grid container sx={{px: 5, py: 9, justifyContent: "center", alignItems: "flex-start", position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "white", mixBlendMode: "overlay", opacity: .75}}></Box>
      <Grid item xs={12} mb={3} sx={{opacity: .9}}>
        <Typography variant="h4" align="center">Skills</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "20px", mx: "auto", mt: 3.5}} ></Box>
        </Grid>
      <Grid item xs={12} md={4.25} mt={8} mb={5}>
        <SkillsDescription/>
      </Grid>
      {/* <Grid item xs={.5}></Grid> */}
      <Grid item xs={12} md={4.25} mt={8} mb={5}>
        <SkillsShowcase/>
      </Grid>

    </Grid>
  )
}

export default Skills