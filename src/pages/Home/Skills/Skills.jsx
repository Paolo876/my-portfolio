import React from 'react'
import { Grid, Box, Typography, useTheme } from '@mui/material'


const Skills = () => {
  const {palette: { background }} = useTheme();


  return (
    <Grid container sx={{px: 5, height: "78vh", justifyContent: "center", alignItems: "flex-start", background: background.lighter}}>
      <Grid item xs={12} mt={3}><Typography variant="h3" align="center">My Skills</Typography></Grid>
      <Grid item xs={12} md={2} pt={4}>
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
            transform: "translateY(50%)"
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} pt={4}>
      </Grid>
    </Grid>
  )
}

export default Skills