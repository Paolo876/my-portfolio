import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsShowcase from './SkillsShowcase';

import { Grid, Box, Typography, useTheme } from '@mui/material'


const Skills = () => {
  const { palette } = useTheme();
  console.log(palette)

  return (
    <Grid container sx={{px: 5, py: 9, justifyContent: "center", alignItems: "flex-start", background: palette.background.lighter}}>
      <Grid item xs={12} mb={3} sx={{opacity: .9, color: palette.background.default}}>
        <Typography variant="h4" align="center">My Skills</Typography>
        <Box sx={{background: palette.background.default, height: "3px", width: "55px", mx: "auto", mt: 3.5}} ></Box>
        </Grid>
      <Grid item xs={12} md={4} mt={8} mb={5}  sx={{color: palette.background.default}}>
        <SkillsDescription/>
      </Grid>
      <Grid item xs={12} md={4.5} mt={8} mb={5}>
        <SkillsShowcase/>
      </Grid>

    </Grid>
  )
}

export default Skills