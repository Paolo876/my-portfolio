import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const Summary = () => {
  return (
    <Grid container sx={{px: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", mt: 5}}>
      
      <Grid item xs={10}>
        <Typography variant="h5">My Journey</Typography>
        <Box sx={{background: "white", height: "4px", width: "6px", my: 2}}></Box>
        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          Before my development journey, I studied <Box component="span" fontWeight={200}>Architecture</Box> back in Philippines where I learned about 
          <Box component="span" color="primary.light" fontWeight={200}> design planning, techniques, and strategies</Box> that I continue to incorporate through my projects. 
          I started coding back in 2019 through an online course by Colt Steele on Web Development. 
          After finishing the 40-hour course, I was captivated which then gave me the motivation to enroll back to College in 2020 and work on a degree in 
          <Box component="span" color="primary.light" fontWeight={200}> Computer Information Systems Major in Software Development and Web Development.</Box> 
        </Typography>

        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
          while being employed full time in a non-related office job. 
          <Box component="span" color="primary.light" fontWeight={200}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Summary