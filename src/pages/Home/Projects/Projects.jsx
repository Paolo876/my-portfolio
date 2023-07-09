import React from 'react'
import { Grid, Box, Typography, Button, Stack } from '@mui/material'
import ProjectsShowcase from './ProjectsShowcase'


const Projects = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 12},
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,1)", mixBlendMode: "overlay", opacity: .8, zIndex: -1}}></Box>
      <Grid container sx={{maxWidth: "1500px", height: "100%", mx: "auto", overflowX:"auto", overflowY: "hidden", px: {md: 0,lg:3}}}>
        <Grid item lg={3}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={200}
              fontSize={{lg: 75, xl: 85}} 
              letterSpacing={1}
              lineHeight={{lg:1.6, xl:1.1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.5)",
              }}
            >
              My<br/>Projects
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: 5, width: 5, mr: "auto", mt: {xs: 1.5, md:1.5}, ml: .75, opacity: 1, boxShadow: 3}}></Box>
          </Box>
          <Box mt={{xs: 2, sm:4, md: 1, lg: 5, xl: 4}} ml={{lg: .5}}>
            <Typography 
              variant="body1" 
              sx={{
                fontFamily: "Manrope",
                fontSize: {xs: 13, sm: 14, md: 13.5, lg:15, xl: 15.5},
                fontWeight: 200,
                opacity: .65,
                letterSpacing: .25,
                // lineHeight: 1.4,
              }}
            >
              I mainly develop my projects using ReactJS or NextJS and with the implementation of the MERN stack. I use different JavaScript libraries and frameworks on my works to
              increase development efficiency and easier scalability.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={9}></Grid>
        <Grid item xs={12} mt={8} ><Button sx={{borderLeft: 2}} size="large">Explore My Projects</Button></Grid>
        <ProjectsShowcase/>
      </Grid>
    </Box>
  )
}

export default Projects