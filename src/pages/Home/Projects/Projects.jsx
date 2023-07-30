import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import ProjectsShowcase from './ProjectsShowcase'


const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        py: {xs:5, sm: 6, md: 8, lg: 12, xl: 18},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,1)", mixBlendMode: "overlay", opacity: .2, zIndex: -1}}></Box>
      <Grid container sx={{maxWidth: "1500px", height: "100%", mx: "auto", overflowX:"auto", overflowY: "hidden"}}>
        <Grid item xs={12} sm={10.5} md={3.75} lg={3.5} xl={3}>
          <Box>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 88}} 
              letterSpacing={{xs: .5, xL:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              My <Box component="br" sx={{display: {xs: "none", md: "initial"}}}></Box>Projects
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: 5, width: 5, mr: "auto", mt: { xs: 1.5, md:2, lg: 2.5 }, ml: {md: .75}, opacity: 1, boxShadow: 3, display: {xs: "none", md: "initial"}}}></Box>
          </Box>
          <Box mt={{xs: 2, sm:2, md: 2, lg: 3, xl: 3}} ml={{md: .5}}>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 16},
                fontWeight: 300,
                opacity: .55,
                letterSpacing: .3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              I mainly develop my projects using ReactJS or NextJS for the frontend, ExpressJS and NodeJS for the backend, MongoDB or MySQL for db implementations. I use different libraries on my works to
              increase development efficiency and easier scalability.
            </Typography>
          </Box>
        </Grid>        
        <Grid item xs={12} mt={{xs: 26, sm: 40, md: 4, lg: 6, xl:10}} >
          <ButtonBase
            onClick={() => navigate("/projects")}
            sx={{
              borderLeft: 2, 
              fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.35rem", lg: "1.4rem", xl:"1.4rem" },
              lineHeight: 1.4, 
              color: "white", 
              borderColor: "primary.dark",
              px: 1.5,
              py: .25,
              fontWeight: 600,
              letterSpacing: .4,
              opacity: .85,
              transition: "all 200ms ease-in-out",
              fontFamily: "Manrope",
              textShadow: "1px 1px 3px rgba(100,100,100,.75)",
              "&:hover":{
                opacity:1,
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