import React from 'react'
import { Box, Fade, Typography } from '@mui/material'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { keyframes } from '@mui/system';

const iconAnimation = keyframes`
0% {
  transform: scale(1.5);
  opacity: 0;
}
85% {
  opacity: .7;
  transform: scale(3);
}
100% {
  transform: scale(1);
  opacity: .9;
}
`;


const FormSuccess = () => {
  return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        p: {xs: 3, sm:4, md:5, lg: 4}, 
        my: {xs: 6, lg: 6}
      }}>
        <Fade appear={true} in={true} timeout={900}  style={{ transitionDelay: "1200ms" }}>
          <Box>
            <Typography sx={{
              fontWeight: 600,
              fontSize: { xs: 16, sm: 17, md: 18, lg: 19, xl: 25 },
              letterSpacing: 1,
            }}>Your form has been submitted!</Typography>
          </Box>
        </Fade>
        <Box my={{lg: 6, opacity: 0, animation: `${iconAnimation} 1000ms ease forwards`}}>
          <DoneOutlineIcon color="primary" fontSize="large"/>
        </Box>
        <Fade appear={true} in={true} timeout={900}  style={{ transitionDelay: "1500ms" }}>
          <Box mt={{lg: 2}}>
            <Typography
              variant="body1"
              sx={{
                mt: {xs: 1, sm:2, md:3},
                fontSize: {xs: 10, sm: 14.5, md: 15, lg:15, xl: 15.5},
                fontWeight: 300,
                opacity: .75,
                transform: "skewX(-5deg)",
                letterSpacing: .5,
                lineHeight: 1.6,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                textAlign: "left"
              }}
            >Thank you for reaching out! We'll be in touch soon.</Typography>
          </Box>
        </Fade>
      </Box>
  )
}

export default FormSuccess