import React from 'react'
import { Grid, Box, Typography, useTheme } from '@mui/material'


const Contact = () => {
  return (
    <Grid container sx={{px: 5, py: 7, justifyContent: "center", alignItems: "flex-start" }}>
      <Grid item xs={12} >
        <Typography variant="h4" align="center">Hire Me!</Typography>
        <Box sx={{background: "white", height: "3px", width: "55px", mx: "auto", mt: 3.5}} ></Box>
        </Grid>
      <Grid item xs={12} md={4} mt={8}>
      </Grid>
      <Grid item xs={12} md={4.5} mt={8}>
      </Grid>

    </Grid>
  )
}

export default Contact