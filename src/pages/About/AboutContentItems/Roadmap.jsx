import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { Timeline } from '@mui/lab';
import MyTimelineItem from './MyTimelineItem';
import bldgicon from "../../../assets/roadmap_icons/building.svg"
import codeicon from "../../../assets/roadmap_icons/code.svg"
import collegeicon from "../../../assets/roadmap_icons/college.svg"
import brainicon from "../../../assets/roadmap_icons/brain.svg"
import muscleicon from "../../../assets/roadmap_icons/muscle.svg"
import websiteicon from "../../../assets/roadmap_icons/website.svg"
import handshakeicon from "../../../assets/roadmap_icons/handshake.svg"
import workicon from "../../../assets/roadmap_icons/work.svg"


const Roadmap = () => {
  return (
    <Grid container sx={{px: 5, py: 8, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.5)", mixBlendMode: "overlay", zIndex: -1}}></Box>
      <Grid item xs={8.5}>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">My Development Roadmap</Typography>
        <Box sx={{background: "white", height: "4px", width: "35px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
        <Timeline position="alternate">
          <MyTimelineItem dotColor='secondary' dotIcon={bldgicon} firstItem={true}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              Before taking my path in the development field, I studied <Box component="span" fontWeight={200}>Architecture</Box> back in Philippines where I learned about 
              <Box component="span" color="primary.light" fontWeight={200}> design planning, techniques, and strategies</Box> that I continue to incorporate through my projects. 
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={codeicon}>
            <Typography variant="body1" fontWeight={200} fontSize={20} letterSpacing={.5} lineHeight={1.75}>
              I started learning coding back in 2019 through an online course by <Box component="span" color="primary.light" fontWeight={200}> Colt Steele </Box> 
              on Web Development where I learned the fundamentals of <Box component="span" color="primary.light" fontWeight={200}>HTML, CSS, JavaScript, 
              NodeJS, and MongoDB.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={collegeicon}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
              <Box component="span" color="primary.light" fontWeight={200}> Computer Information Systems Major in Software Development and Web Development.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={brainicon}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              In college, I was able to learn the foundations of programming, how to think like a developer, analyze logic and algorithms, and how to work as a team.
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={muscleicon}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
              while also being employed full time at an office job. 
              <Box component="span" color="primary.light" fontWeight={200}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={websiteicon}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              I focused more on Web Development than Software Development/Programming as it seems more engaging to me. I started learning 
              <Box component="span" color="primary.light" fontWeight={200}> ReactJS</Box> and developed my projects using it.
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' dotIcon={handshakeicon}>
            <Typography variant="body1" fontWeight={200} fontSize={20} letterSpacing={.5} lineHeight={1.75}>
              In 2022, I started offering my services, designing and building commissioned projects.
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' endItem dotIcon={workicon}>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas.
            </Typography>
          </MyTimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  )
}

export default Roadmap