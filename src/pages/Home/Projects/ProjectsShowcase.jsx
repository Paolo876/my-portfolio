import React, { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';
import Image from 'mui-image';
import useProjectsRedux from "../../../hooks/useProjectsRedux"
import generateRandomNumbers from '../../../utils/generateRandomNumbers';

const previewBoxStyles = {
  height: {xs: 155, sm: 230, md: 320, lg: 360, xl:410}, 
  width: {xs: 110, sm: 180, md: 270, lg: 310, xl: 360}, 
  // border: 1, 
  boxShadow: "inset rgba(15, 15, 15, 0.9) 0px 1px 8px",
  background: "rgba(19,19,19,1)",
  transform: "skewX(-7deg)",
}

const slideLeft = keyframes`
  0% {
    transform: translateX(3em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const ProjectsShowcase = () => {
  const { projectsList } = useProjectsRedux();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    // triggerOnce: true
  });

  
  useEffect(() => {
    if(projectsList.length !== 0 && inView ) {
      const interval = setInterval(() => {
        console.log(generateProjectPreviews())
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [projectsList, inView])


  const generateProjectPreviews = () => {
    return generateRandomNumbers(projectsList.length, 3)
  }
  return (
    <Box 
      sx={{
        height: "100%",
        position: "absolute",
        top: 0,
        right: {xs: 0, md: "initial"},
        transform: {xs: "translateX(2em)", md: "translateX(10em)", lg: "translateX(29em)", xl: "translateX(40em)"},
        pt: {xs:18, sm: 15, md: 18, lg: 14, xl: 18},
        pb: {xs:0, sm: 0, md: 11, lg: 14, xl: 18},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container gap={{xs: 1.5, sm: 3, md: 4, lg: 5, xl:7}} ref={ref} >
        <Box sx={{opacity: 0, animation: inView ? `${slideLeft} 1100ms ease forwards 1100ms` : "none"}}>
          <Grid item sx={previewBoxStyles}>
            <Box 
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                background: projectsList[0].palette.primary,
                overflow: "hidden",
                opacity: .85,
                px: 2,
                py: 2
              }}
            >
              <Box
                sx={{
                  transform: "skewX(1deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Image
                  src={projectsList[0].logo.url}
                  fit="scale-down"
                />
                <Box>
                  <Typography variant="h6" sx={{letterSpacing: 3}}>{projectsList[0].title}</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      fontSize: {xs: 10, sm: 11, md: 12, lg:12},
                      fontWeight: 100,
                      opacity: .75,
                      letterSpacing: {xs: 1, md: 1.3},
                      lineHeight: {xs: 1.05, md: 1.25},
                      textShadow: "1px 1px 3px rgba(30,30,30,.5)",
                    }}
                  >
                    {projectsList[0].briefDescription}
                  </Typography>
                </Box>

              </Box>
            </Box>
          </Grid>
        </Box>

        
        <Box sx={{opacity: 0, animation: inView ? `${slideLeft} 1100ms ease forwards 1350ms` : "none"}}>
          <Grid item sx={previewBoxStyles}></Grid>
        </Box>
        <Box sx={{opacity: 0, animation: inView ? `${slideLeft} 1100ms ease forwards 1600ms` : "none"}}>
          <Grid item sx={previewBoxStyles}></Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default ProjectsShowcase