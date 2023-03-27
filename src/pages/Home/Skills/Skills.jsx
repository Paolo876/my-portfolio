import React from 'react'
import SkillsDescription from './SkillsDescription';
import { Grid, Box, Typography, useTheme } from '@mui/material'


const Skills = () => {
  const {palette: { background }} = useTheme();


  return (
    <Grid container sx={{px: 5, py: 6, justifyContent: "center", alignItems: "flex-start", background: background.lighter}}>
      <Grid item xs={12} ><Typography variant="h4" align="center">My Skills</Typography></Grid>
      <Grid item xs={12} md={4} mt={8}>
        <SkillsDescription/>
      </Grid>
      <Grid item xs={12} md={4} mt={8}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: 200, 
            width: 200, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
            mt: 2,
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>

    </Grid>
  )
}

export default Skills