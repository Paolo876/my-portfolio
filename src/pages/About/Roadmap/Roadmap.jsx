import React from 'react'
import { Grid, Box, Typography, Fade } from '@mui/material'
import RoadmapCarousel from './RoadmapCarousel'
import { useInView } from 'react-intersection-observer';


const Roadmap = () => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -30% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (
    <Box 
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15}
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(15,15,15,.6)", zIndex: -1}}></Box>
      <Grid 
        container 
        sx={{
          justifyContent: "center", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto", 
          overflowX:"auto", 
          overflowY: "hidden"
        }}
        ref={ref}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Fade appear={inView} in={inView} timeout={500}  style={{ transitionDelay: "100ms" }}>
            <Box>
              <Typography 
                variant="h2" 
                align="center" 
                fontWeight={400}
                fontSize={{xs: 30, sm: 32, md: 34, lg: 36, xl: 40}} 
                letterSpacing={{xs: .5, lg:1}}
                lineHeight={{xs:1.1}} 
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                }}
              >
                My Development Roadmap
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Fade appear={inView} in={inView} timeout={500}  style={{ transitionDelay: "400ms" }}>
            <Box>
              <RoadmapCarousel/>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Roadmap