import React from 'react'
import { Grid, Typography } from '@mui/material'

const Summary = () => {
  return (
    <Grid container sx={{alignItems: "flex-start", mx: "auto", mixBlendMode: "difference"}}>
      <Grid item xs={10.2}>
        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          Before my development journey, I studied Architecture back in Philippines where I learned about design planning, elements 
          and strategies that I had been applying through my projects. I started coding back in 2019 through an online course by Colt Steele 
          on Web Development as a mean to get a feel of what it's about. After finishing the 40-hour course, It caught my interest and got me captivated 
          which gave me the motivation to enroll back to College in 2020 and work on a degree in Computer Information Systems Major in Software Development and Web 
          Development. 
        </Typography>
        <Typography variant="body1" mb={2} fontWeight={100} fontSize={18} letterSpacing={.65} lineHeight={1.7}>
          While being a part-time college student, I had also been self-studying through online courses from Udemy and youtube, all 
          while also being employed full time in a non-related office job.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Summary