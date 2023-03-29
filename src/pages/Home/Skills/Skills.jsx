import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';

import { Grid, Box, Typography, useTheme } from '@mui/material'


const Skills = () => {
  const { palette } = useTheme();

  return (
    <Grid container sx={{px: 5, py: 9, justifyContent: "center", alignItems: "flex-start", position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "white", mixBlendMode: "overlay", }}></Box>
      <Grid item xs={12} mb={3} sx={{opacity: .9, color: palette.text.secondary}}>
        <Typography variant="h4" align="center">My Skills</Typography>
        <Box sx={{background: palette.text.secondary, height: "3px", width: "55px", mx: "auto", mt: 3.5}} ></Box>
        </Grid>
      <Grid item xs={12} md={4} mt={8} mb={5}>
        <SkillsDescription/>
      </Grid>
      <Grid item xs={12} md={4.5} mt={8} mb={5}>
        <SkillsShowcase/>
      </Grid>

    </Grid>
  )
}

export default Skills