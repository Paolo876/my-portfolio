import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import MyTimelineItem from './MyTimelineItem';
import walkicon from "../../../assets/roadmap_icons/walk.svg"
import codeicon from "../../../assets/roadmap_icons/code.svg"
import muscleicon from "../../../assets/roadmap_icons/muscle.svg"
import workicon from "../../../assets/roadmap_icons/work.svg"


const baseTextStyles = {
  fontSize:{ xs: 12, sm: 12, md: 13, lg:14, xl: 14 },
  fontWeight: 200,
  textAlign: "justify", 
  textJustify: "inter-word", 
  mixBlendMode: "difference",
  opacity: .85,
  lineHeight: 1.353,
  letterSpacing: .5, 
}


const Roadmap = () => {
  return (
    <Box sx={{position: "relative"}}>
      <Grid container 
        sx={{
          px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
          py: {xs:6, sm: 6, md: 7, lg: 8, xl: 15}, 
          justifyContent: "center", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto",
        }}
      >        
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.3)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
        <Grid item xs={12}>
          <Box sx={{display: {xs: "none", md: "initial"}}}>
          <Typography 
          variant="h4" 
          fontSize={{md: 28, lg: 30, xl: 32}} 
          letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} 
          lineHeight={{lg:1.6, xl:1.2}} 
          fontWeight={800}
          sx={{
            opacity: .95,
          }}
          color="primary.main"
        >My Development Roadmap</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 3, sm: 5, md: 8}, width: {xs: 3, sm: 5, md: 8}, mr: "auto", mt: {xs: 1.25, sm: 1.25, md:1.5}, mixBlendMode: "difference", opacity: .15}}></Box>
          </Box>        
          <Timeline 
            position="right"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              mt: 8
            }}
            >
            <MyTimelineItem dotColor='primary' dotIcon={walkicon}>
              <Box pl={2}>
                <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Beginning</Typography>
              </Box>
              <Box pl={2} pr={5} mt={1} mb={10}>
                <Typography variant="body1" sx={baseTextStyles}>
                  Before my development journey started, I studied <Box component="span" fontWeight={300}>Bachelor of Science in Architecture</Box> back in Philippines where I learned about the
                  <Box component="span" fontWeight={300}> design methods and strategies</Box> that I continue to incorporate throughout my projects. I started learning coding in 2019 through an online course called <Box component="span" fontWeight={300}> The Web Development Bootcamp by Colt Steele </Box> 
                  where I learned all the fundamentals. After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
                  <Box component="span" fontWeight={300}> Computer Information Systems Major in Software Development and Web Development.</Box>
                </Typography>
              </Box>
            </MyTimelineItem>

            <MyTimelineItem dotColor='primary' dotIcon={muscleicon}>
              <Box pl={2}>
                <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Strive</Typography>
              </Box>
              <Box pl={2} pr={5} mt={1} mb={10}>
                <Typography variant="body1" sx={baseTextStyles}>
                  While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
                  while being employed full time at an office job. 
                  <Box component="span" fontWeight={300}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>

                </Typography>
              </Box>
            </MyTimelineItem>

            <MyTimelineItem dotColor='primary' dotIcon={codeicon}>
              <Box pl={2}>
                <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Process</Typography>
              </Box>
              <Box pl={2} pr={5} mt={1} mb={10}>
                <Typography variant="body1" sx={baseTextStyles}>
                  In college, I was able to learn the foundations, how to think like a developer, analyze logic and algorithms, 
                  and being able to work with a team.
                  I focused more on Web Development than Software Development as it seems more engaging to me. I then started learning 
                  <Box component="span" fontWeight={300}> ReactJS</Box> along with related tech stack and developed most of my projects using it.
                  In 2022, I started working as a freelance developer on the side, building commissioned projects to improve my skills and build network.
                </Typography>
              </Box>
            </MyTimelineItem>
            <MyTimelineItem dotColor='primary' dotIcon={workicon} endItem={true}>
              <Box pl={2}>
                <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Present</Typography>
              </Box>
              <Box pl={2} pr={5} mt={1} mb={3}>
                <Typography variant="body1" sx={baseTextStyles}>
                  Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas.
                  I may lack enough work or professional experience but I am determined and always remain consistent with my progress hoping that one day the hard work will pay off.
                </Typography>
              </Box>
            </MyTimelineItem>
          </Timeline>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Roadmap