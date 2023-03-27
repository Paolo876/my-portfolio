import React from 'react'
import SkillsDescription from './SkillsDescription';
import { Grid, Box, Typography, useTheme } from '@mui/material'
import SkillsShowcase from './SkillsShowcase';


const Skills = () => {
  const {palette: { background }} = useTheme();


  return (
    <Grid container sx={{px: 5, py: 6, justifyContent: "center", alignItems: "flex-start", background: background.lighter}}>
      <Grid item xs={12} ><Typography variant="h4" align="center">My Skills</Typography></Grid>
      <Grid item xs={12} md={4} mt={8}>
        <SkillsDescription/>
      </Grid>
      <Grid item xs={12} md={4.5} mt={8}>
        <SkillsShowcase/>
      </Grid>

    </Grid>
  )
}

export default Skills