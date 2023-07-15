import React from 'react'
import { Grid, Box, Typography, Button, Stack, ButtonBase } from '@mui/material'
import ProjectsShowcase from './ProjectsShowcase'


const Projects = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 18},
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,1)", mixBlendMode: "overlay", opacity: .2, zIndex: -1}}></Box>
      <Grid container sx={{maxWidth: "1500px", height: "100%", mx: "auto", overflowX:"auto", overflowY: "hidden", px: {md: 0,lg:3}}}>
        <Grid item lg={3}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{lg: 85, xl: 88}} 
              letterSpacing={1}
              lineHeight={{lg:1.6, xl:1.1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              My<br/>Projects
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: 5, width: 5, mr: "auto", mt: { xs: 1.5, md:2.5 }, ml: .75, opacity: 1, boxShadow: 3}}></Box>
          </Box>
          <Box mt={{xs: 2, sm:4, md: 1, lg: 3, xl: 3}} ml={{lg: .5}}>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: {xs: 13, sm: 14, md: 15, lg:16, xl: 16},
                fontWeight: 300,
                opacity: .55,
                letterSpacing: .3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              {/* I mainly develop my projects using ReactJS or NextJS, and with the implementation of the MERN stack. I use different JavaScript libraries and frameworks on my works to
              increase development efficiency and easier scalability. */}
              I mainly develop my projects using ReactJS or NextJS on the frontend, NodeJS and ExpressJS on the backend, MongoDB or MySQL for database implementations, and different libraries
              and frameworks to increase development efficiency and easier scalability.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={9}></Grid>
        <Grid item xs={12} mt={10} >
          <ButtonBase
            sx={{
              borderLeft: 2, 
              fontSize: { xs: "1.25rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem", xl:"1.5rem" },
              lineHeight: 1.4, 
              color: "white", 
              // borderColor: "rgba(200, 200, 200, .5)",
              borderColor: "primary.dark",
              px: 1.5,
              py: .25,
              fontWeight: 600,
              letterSpacing: .4,
              opacity: .85,
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
              }
            }}
          >
          Explore My Projects
          </ButtonBase>
        </Grid>
        <ProjectsShowcase/>
      </Grid>
    </Box>
  )
}

export default Projects