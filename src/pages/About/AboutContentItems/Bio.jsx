import React from 'react'
import { Grid, Typography, Box } from '@mui/material'


const Bio = () => {
  return (
    <Grid container sx={{px: 5, py: 8, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", position: "relative"}}>
      <Grid item xs={10.2}>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">Bio</Typography>
        <Box sx={{background: "white", height: "4px", width: "10px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
        <Box>
          <Typography variant="body1">
            My name is Paolo Bugarin. I was born and raised in Philippines. I studied Bachelor of Science in Architecture for 3 and a half years 
            until my family and I had to migrate to California in 2016. 
          </Typography>
        </Box>
      </Grid>
    </Grid>  )
}

export default Bio