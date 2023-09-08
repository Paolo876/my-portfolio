import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';


const slideRight = keyframes`
  0% {
    transform: translateX(-2em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const SubIntroduction = () => {
    
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
        pt: 6, 
        pb: {xs:6, sm: 6, md: 8, lg: 8},       
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container 
        sx={{
          maxWidth: "1500px", 
          mx: "auto"
        }}
      >
        <Grid item xs={12} mt="auto">
          <Box align="right" ref={ref} sx={{opacity: 0, animation: inView ? `${slideRight} 1100ms ease forwards 150ms` : "none"}}>
            <Typography 
              variant="h6" 
              sx={{
                fontWeight: 300, 
                fontSize: {xs: 12.5, sm: 19, md: 22, lg:23, xl: 25}, 
                lineHeight: 1.4, 
                opacity: .9,
                textTransform: "none",
                letterSpacing: {xs: .05, sm:.15},
                textShadow: "1px 1px 3px rgba(100,100,100,.25)",
              }}
            >
              I design and develop websites from a 
              <Box component="span" fontWeight={500}> simple static page </Box> to a<br/>
              <Box component="span" fontWeight={500}> complex dynamic web application</Box>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SubIntroduction