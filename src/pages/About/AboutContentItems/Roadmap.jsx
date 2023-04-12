import React from 'react'
import { Grid, Typography, Box, Paper } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent  } from '@mui/lab';
import MyTimelineItem from './MyTimelineItem';
const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const Roadmap = () => {
  return (
    <Grid container sx={{px: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", mt: 5}}>
      
      <Grid item xs={7.5}>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">My Development Roadmap</Typography>
        <Box sx={{background: "white", height: "4px", width: "35px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
        <Timeline position="alternate">
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              Before taking my path in the development field, I studied <Box component="span" fontWeight={200}>Architecture</Box> back in Philippines where I learned about 
              <Box component="span" color="primary.light" fontWeight={200}> design planning, techniques, and strategies</Box> that I continue to incorporate through my projects. 
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={20} letterSpacing={.5} lineHeight={1.75}>
              I started coding back in 2019 through an online course by <Box component="span" color="primary.light" fontWeight={200}> Colt Steele </Box> 
              on Web Development where I learned the fundamentals <Box component="span" color="primary.light" fontWeight={100}>(HTML, CSS and JavaScript)</Box> .
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              After finishing the 40-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in 
              <Box component="span" color="primary.light" fontWeight={200}> Computer Information Systems Major in Software Development and Web Development.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              While being a part-time college student, I was also self-studying through online courses and youtube tutorials, all 
              while also being employed full time at an office job. 
              <Box component="span" color="primary.light" fontWeight={200}> As exhausting as it was, the burnout was worth it for the knowledge I gained.</Box>
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              I decided to focus more on Web Development than Software Development as it seems more engaging to me, and started mastering 
              <Box component="span" color="primary.light" fontWeight={200}> ReactJS</Box> by developing my own personal projects.
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary'>
            <Typography variant="body1" fontWeight={200} fontSize={18} letterSpacing={.5} lineHeight={1.75}>
              In 2022, I started offering my services and develop commissioned projects mainly with ReactJS and other related libraries and frameworks.
            </Typography>
          </MyTimelineItem>
          <MyTimelineItem dotColor='secondary' endItem>
            <Typography variant="body1" fontWeight={200} fontSize={18} letterSpacing={.5} lineHeight={1.75}>
              Present time, I still continue to learn more techologies online, further refine my existing projects, and conceptualize new project ideas that
              I will be starting to work on.
            </Typography>
          </MyTimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  )
}

export default Roadmap