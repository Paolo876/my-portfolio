import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, ButtonBase, Fade } from '@mui/material'
import ProjectsShowcase from './ProjectsShowcase'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';


const slideLeft = keyframes`
  0% {
    transform: translateX(1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Projects = () => {
  const navigate = useNavigate();
    
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    triggerOnce: true
  });


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
      <Grid container sx={{maxWidth: "1500px", height: "100%", mx: "auto", overflowX:"auto", overflowY: "hidden"}} ref={ref}>
        <Grid item xs={12} sm={10.5} md={3.75} lg={3.5} xl={3}>
          <Fade appear={inView} in={inView} timeout={1100}  style={{ transitionDelay: "300ms" }}>
            <Box>
              <Typography 
                variant="h2" 
                align="left" 
                fontWeight={400}
                fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 80}} 
                letterSpacing={-.1}
                lineHeight={{xs:1}} 
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(10,10,10,.75)",
                }}
              >
                My <Box component="br" sx={{display: {xs: "none", md: "initial"}}}></Box>Projects
              </Typography>
            </Box>
          </Fade>
          <Fade appear={inView} in={inView} timeout={1100}  style={{ transitionDelay: "600ms" }}>
            <Box mt={{xs: 5, sm:6, md: 7, lg: 8, xl: 8}} ml={{md: .5}}>
              <Typography 
                variant="body1" 
                sx={{
                  fontSize: {xs: 12.5, sm: 14, md: 14, lg:14.5, xl: 14.5},
                  fontWeight: 100,
                  opacity: .5,
                  letterSpacing: 1.25,
                  lineHeight: 1.8,
                  textShadow: "1px 1px 5px rgba(50,50,50,.5)",
                }}
              >
                I mainly develop my projects using ReactJS or NextJS for the frontend, ExpressJS and NodeJS for the backend, and MongoDB or MySQL for db implementations. I use different libraries on my projects to
                increase development efficiency and easier scalability.
              </Typography>
            </Box>
          </Fade>
        </Grid>        
        <Grid item xs={12} mt={{xs: 30, sm: 40, md: 4, lg: 6, xl:10}} sx={{overflow: "hidden"}}>
          <Box sx={{opacity: 0, animation: inView ? `${slideLeft} 1100ms ease forwards 850ms` : "none"}}>
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
          </Box>
        </Grid>
        <ProjectsShowcase/>
      </Grid>
    </Box>
  )
}

export default Projects