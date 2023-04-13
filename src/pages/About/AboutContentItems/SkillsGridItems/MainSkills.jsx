import React from 'react'
import { Grid, Typography } from '@mui/material'


const MainSkills = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={4}>
        <Typography variant="h1" sx={{mixBlendMode: "difference"}} fontWeight={800}>My Tech Skills</Typography>
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  )
}

export default MainSkills