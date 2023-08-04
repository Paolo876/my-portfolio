import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const roadmapItems = [
  {
    title: "I - The Beginning",
    description: "Before my development journey started, I used to study Architecture back in Philippines where I learned about effective design methods and strategies that I continue to incorporate throughout my projects. In 2019, I started an online course called The Web Development Bootcamp by Colt Steele where I learned about the fundamentals. After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in Computer Information Systems Major in Software Development and Web Development."
  },
  {
    title: "II - The Challenges",
    description: "While being a part-time college student, I was also self-studying through multiple online courses and youtube tutorials, all while being full-time employed at an office job. As challenging as it was, the experience was worth it for the knowledge I gained."
  },
  {
    title: "III - The Process",
    description: "In college, I was able to learn the foundations, how to think like a developer, analyze logic and algorithms, and experienced working with a team. I focused more on Web Development than Software Development as it seems more engaging to me. I then started learning ReactJS along with related tech stack and developed most of my projects using it. In 2022, I started working as a freelance developer on the side, building commissioned projects to improve my skills and build network."
  },
  {
    title: "IV - The Present",
    description: "Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas. I may lack enough work or professional experience but I am determined and always remain consistent with my progress hoping that one day the hard work will pay off."
  },

]


const RoadmapCarousel = () => {
  return (
    <Carousel
      indicators={true}
      interval={8000}
      duration={800} 
      navButtonsAlwaysInvisible={true}
    >
      <Grid container>
        <Grid item></Grid>
      </Grid>
    </Carousel>
  )
}

export default RoadmapCarousel