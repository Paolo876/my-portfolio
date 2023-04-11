import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const Summary = () => {
  return (
    <Grid container sx={{alignItems: "flex-start", mx: "auto"}} id="summary">
      <Grid item xs={10.2}>
        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          Before my development journey, I studied <Box component="span" color="primary.light" fontWeight={200}>Architecture</Box> back in Philippines where I learned about 
          <Box component="span" color="primary.light" fontWeight={200}> design planning, techniques, and strategies</Box> that I continue to incorporate through my projects. 
          I started coding back in 2019 through an online course by Colt Steele on Web Development. 
          After finishing the 40-hour course, I was captivated which then gave me the motivation to enroll back to College in 2020 and work on a degree in 
          <Box component="span" color="primary.light" fontWeight={200}> Computer Information Systems Major in Software Development and Web Development.</Box> 
        </Typography>
        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          While being a part-time college student, I had also been self-studying through online courses from Udemy and youtube, all 
          while also being employed full time in a non-related office job. <Box component="span" color="primary.light">As challenging as it had gotten, the burnout was worth it.</Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Summary