import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import MyTimelineItem from './MyTimelineItem';
import bldgicon from "../../../assets/roadmap_icons/building.svg"
import codeicon from "../../../assets/roadmap_icons/code.svg"
import collegeicon from "../../../assets/roadmap_icons/college.svg"
import brainicon from "../../../assets/roadmap_icons/brain.svg"
import muscleicon from "../../../assets/roadmap_icons/muscle.svg"
import websiteicon from "../../../assets/roadmap_icons/website.svg"
import handshakeicon from "../../../assets/roadmap_icons/handshake.svg"
import workicon from "../../../assets/roadmap_icons/work.svg"


const baseTextStyles = {
  fontSize:{ xs: 12, sm: 12, md: 13, lg:14, xl: 15 },
  fontWeight: 300,
  textAlign: "justify", 
  textJustify: "inter-word", 
  mixBlendMode: "difference",
  opacity: .85,
  lineHeight: 1.55,
  letterSpacing: .5, 
}


const Roadmap = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
        py: {xs:6, sm: 6, md: 7, lg: 8}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto",
      }}
    >        
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid item xs={12}>
        <Box sx={{display: {xs: "none", md: "initial"}}}>
          <Typography 
            variant="h4" 
            fontWeight={800}
            fontSize={{md: 28, lg: 30, xl: 35}} 
            letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3}} 
            lineHeight={{lg:1.6, xl:1.2}} 
            sx={{mixBlendMode:"difference"}}

          >
            My Development Roadmap
          </Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mr: "auto", mt: {xs: 1, md:1}, ml: .5, mixBlendMode: "difference", opacity: .75}}></Box>
        </Box>        
        <Timeline 
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            // mt: 8
          }}
          >
          <MyTimelineItem dotColor='primary' dotIcon={bldgicon} firstItem={true}>
            <Typography variant="h6" letterSpacing={1.25} fontWeight={800} fontSize={{md:18, lg:20, xl:23}} pl={2}>The Beginning</Typography>
            <Grid container mt={2}>
              <Grid item xs={4} px={2}>
              <Typography variant="body1" sx={baseTextStyles}>
                Before my dev journey started, I studied <Box component="span" fontWeight={300}>Bachelor of Science in Architecture</Box> back in Philippines where I learned about the
                <Box component="span" color="primary.light"> design methods and strategies</Box> that I continue to apply through my projects. 
              </Typography>

              </Grid>
              <Grid item xs={4} px={2}>
              <Typography variant="body1" sx={baseTextStyles}>
                I started learning coding back in 2019 through an online course called <Box component="span" color="primary.main" fontWeight={400}> The Web Development Bootcamp by Colt Steele </Box> 
                where I learned all the fundamentals.
              </Typography>
              </Grid>
              <Grid item xs={4} px={2}>
                <Typography variant="body1" sx={baseTextStyles}>
                  After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
                  <Box component="span" color="primary.main" fontWeight={400}> Computer Information Systems Major in Software Development and Web Development.</Box>
                </Typography>
              </Grid>
            </Grid>
          </MyTimelineItem>
          {/* <MyTimelineItem dotColor='primary' dotIcon={codeicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              I started learning coding back in 2019 through an online course called <Box component="span" color="primary.main" fontWeight={400}> The Web Development Bootcamp by Colt Steele </Box> 
              where I learned all the fundamentals.
            </Typography>
          </MyTimelineItem> */}
          {/* <MyTimelineItem dotColor='primary' dotIcon={collegeicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
              <Box component="span" color="primary.main" fontWeight={400}> Computer Information Systems Major in Software Development and Web Development.</Box>
            </Typography>
          </MyTimelineItem> */}
          {/* <MyTimelineItem dotColor='secondary' dotIcon={brainicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              In college, I was able to learn the foundations of programming, how to think like a developer, analyze logic and algorithms, and how to work as a team.
            </Typography>
          </MyTimelineItem> */}
          <MyTimelineItem dotColor='primary' dotIcon={muscleicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
              while also being employed full time at an office job. 
              <Box component="span" color="primary.main" fontWeight={400}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='primary' dotIcon={websiteicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              I focused more on Web Development than Software Development/Programming as it seems more engaging to me. I started learning 
              <Box component="span" color="primary.main" fontWeight={400}> ReactJS</Box> and developed my projects using it.
            </Typography>
          </MyTimelineItem>
          {/* <MyTimelineItem dotColor='secondary' dotIcon={handshakeicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              In 2022, I started offering my services, designing and building commissioned projects.
            </Typography>
          </MyTimelineItem> */}
          <MyTimelineItem dotColor='primary' endItem dotIcon={workicon}>
            <Typography variant="body1" sx={baseTextStyles}>
              Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas.
            </Typography>
          </MyTimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  )
}

export default Roadmap