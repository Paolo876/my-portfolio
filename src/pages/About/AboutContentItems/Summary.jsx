import React from 'react'
import { Grid, Typography } from '@mui/material'

const Summary = () => {
  return (
    <Grid container sx={{alignItems: "flex-start", mx: "auto", mixBlendMode: "difference"}}>
      <Grid item xs={10.2}>
        <Typography variant="body1" mb={4} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          Before I embarked on my development journey, I used to study Architecture back in Philippines where I learned a lot about design elements 
          and strategies that I had been applying through my projects. I started coding back in 2019 through an online course from Udemy by Colt Steele 
          on Web Development as a mean to get a feel of what it is about. After finishing the 40-hour online course, It caught my interest and got me captivated 
          which gave me the motivation to enroll back to College in 2020 and work on a degree in Computer Information Systems Major in Software Development and Web 
          Development. 
        </Typography>
        <Typography variant="body1" mb={4} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          While being enrolled in college part-time, I also started learning on some more online courses related to Web Development in Udemy and youtube tutorials, all 
          while also being employed full time in a non-related office job.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Summary