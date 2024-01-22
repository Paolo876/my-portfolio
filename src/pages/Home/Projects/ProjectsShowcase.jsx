import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';
import Image from 'mui-image';
import useProjectsRedux from "../../../hooks/useProjectsRedux"
import generateRandomNumbers from '../../../utils/generateRandomNumbers';

const previewBoxStyles = {
  height: {xs: 155, sm: 230, md: 320, lg: 360, xl:410}, 
  width: {xs: 110, sm: 180, md: 270, lg: 310, xl: 360}, 
  border: 1, 
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
    triggerOnce: true
  });

  
  useEffect(() => {
    if(projectsList.length !== 0 ) {
      console.log(generateProjectPreviews())
    }
  }, [projectsList])

  
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
      <Grid container gap={{xs: 1.5, sm: 3, md: 4, lg: 5, xl:7}} ref={ref}>
        <Box sx={{opacity: 0, animation: inView ? `${slideLeft} 1100ms ease forwards 1100ms` : "none"}}>
          <Grid item sx={previewBoxStyles}></Grid>
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