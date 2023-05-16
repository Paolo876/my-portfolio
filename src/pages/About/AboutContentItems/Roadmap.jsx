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
            fontSize={{md: 28, lg: 29, xl: 30}} 
            letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3}} 
            lineHeight={{lg:1.6, xl:1.2}} 
            sx={{opacity: .85}}
            color="primary.main"
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
            mt: 8
          }}
          >
          <MyTimelineItem dotColor='primary' dotIcon={walkicon}>
            <Box pl={2}>
              <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Beginning</Typography>
              <Box sx={{background: "rgba(239,235,229,1)", height: "5px", width: "5px", mr: "auto", mt: .5, ml: .25, mixBlendMode: "difference", opacity: .25}}></Box>
            </Box>
            <Box pl={2} pr={5} mt={1.5}>

              <Typography variant="body1" sx={baseTextStyles}>
                Before my development journey started, I studied <Box component="span" fontWeight={400}>Bachelor of Science in Architecture</Box> back in Philippines where I learned about the
                <Box component="span" fontWeight={400}> design methods and strategies</Box> that I continue to incorporate throughout my projects. I started learning coding back in 2019 through an online course called <Box component="span" fontWeight={400}> The Web Development Bootcamp by Colt Steele </Box> 
                where I learned all the fundamentals. After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
                <Box component="span" fontWeight={400}> Computer Information Systems Major in Software Development and Web Development.</Box>
              </Typography>
            </Box>
            {/* <Grid container mt={1.5} pl={2}>
              <Grid item xs={3.75} pr={6}>
              <Typography variant="body1" sx={baseTextStyles}>
                Before my development journey started, I studied <Box component="span" fontWeight={400}>Bachelor of Science in Architecture</Box> back in Philippines where I learned about the
                <Box component="span" fontWeight={400}> design methods and strategies</Box> that I continue to incorporate throughout my projects. 
              </Typography>

              </Grid>
              <Grid item xs={3.75} pr={6}>
              <Typography variant="body1" sx={baseTextStyles}>
                I started learning coding back in 2019 through an online course called <Box component="span" fontWeight={400}> The Web Development Bootcamp by Colt Steele </Box> 
                where I learned all the fundamentals.
              </Typography>
              </Grid>
              <Grid item xs={3.75} pr={6}>
                <Typography variant="body1" sx={baseTextStyles}>
                  After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
                  <Box component="span" fontWeight={400}> Computer Information Systems Major in Software Development and Web Development.</Box>
                </Typography>
              </Grid>
            </Grid> */}
          </MyTimelineItem>

          <MyTimelineItem dotColor='primary' dotIcon={muscleicon}>
            <Box pl={2}>
              <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Training</Typography>
              <Box sx={{background: "rgba(239,235,229,1)", height: "5px", width: "5px", mr: "auto", mt: .15, ml: .25, mixBlendMode: "difference", opacity: .25}}></Box>
            </Box>
            <Grid container mt={1.5} pl={2}>
              <Grid item xs={5} pr={7}>
                <Typography variant="body1" sx={baseTextStyles}>
                  While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
                  while also being employed full time at an office job. 
                  <Box component="span" fontWeight={400}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>
                </Typography>
              </Grid>
              <Grid item xs={5} pr={7}>
                <Typography variant="body1" sx={baseTextStyles}>
                  In college, I was able to learn the foundations of programming, how to think like a developer, analyze logic and algorithms, and getting the feel of working with a team.
                </Typography>
              </Grid>
            </Grid>
          </MyTimelineItem>

          <MyTimelineItem dotColor='primary' dotIcon={codeicon}>
            <Box pl={2}>
              <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Process</Typography>
              <Box sx={{background: "rgba(239,235,229,1)", height: "5px", width: "5px", mr: "auto", mt: .15, ml: .25, mixBlendMode: "difference", opacity: .25}}></Box>
            </Box>
            <Grid container mt={1.5} pl={2}>
              <Grid item xs={5} pr={7}>
                <Typography variant="body1" sx={baseTextStyles}>
                  I focused more on Web Development than Software Development or Programming as it seems more engaging to me. I started learning 
                  <Box component="span" fontWeight={400}> ReactJS</Box> along with related tech stack and developed most of my projects using them.
                </Typography>
              </Grid>
              <Grid item xs={5} pr={7}>
                <Typography variant="body1" sx={baseTextStyles}>
                  In 2022, I started offering my services working as a freelance developer on the side, designing and building commissioned projects to improve my skills and build network.
                </Typography>
              </Grid>
            </Grid>
          </MyTimelineItem>
          <MyTimelineItem dotColor='primary' dotIcon={workicon} endItem={true}>
            <Box pl={2}>
              <Typography variant="h6" letterSpacing={2} fontWeight={800} fontSize={{md:22, lg:23, xl:24}}>The Present</Typography>
              <Box sx={{background: "rgba(239,235,229,1)", height: "5px", width: "5px", mr: "auto", mt: .15, ml: .25, mixBlendMode: "difference", opacity: .25}}></Box>
            </Box>
            <Grid container mt={1.5} pl={2}>
              <Grid item xs={6} pr={7}>
                <Typography variant="body1" sx={baseTextStyles}>
                  Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas.
                </Typography>
              </Grid>
            </Grid>
          </MyTimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  )
}

export default Roadmap