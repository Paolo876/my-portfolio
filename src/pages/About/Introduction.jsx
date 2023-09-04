import React from 'react'
import { Box, Typography, Grid, ButtonBase, Fade } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import { keyframes } from '@mui/system';


const slideRight = keyframes`
  0% {
    transform: translateX(-2.25em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const slideLeft = keyframes`
  0% {
    transform: translateX(2.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};


const baseTextStyles = {
  fontSize: {xs: 11.5, sm: 14, md: 14.5, lg:15, xl: 15},
  fontWeight: 300,
  opacity: .6,
  letterSpacing: .4,
  lineHeight: 1.4,
  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
}


const Introduction = () => {
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 12, md: 14, lg: 16, xl: 20}, 
        pb: {xs:10, sm: 13, md: 12, lg: 15}, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container 
        sx={{
          justifyContent: "center", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto",
        }}
      >      
        <Grid item xs={12} md={7} lg={6} xl={5.5} order={{xs: 2, md:1}} mt={{xs: 6, sm: 8, md: 0}}>
          <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "200ms" }}>
            <Box>
              <Typography 
                variant="h2" 
                align="left" 
                fontWeight={400}
                fontSize={{xs: 42, sm: 60, md: 75, lg: 75, xl: 88}} 
                letterSpacing={{xs: .5, xl:1}}
                lineHeight={{xs:1}} 
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(50,50,50,.75)",
                }}
              >
                About Me
              </Typography>
            </Box>
          </Fade>
          <Box mt={{xs: 3, sm: 6, md: 7, lg: 7, xl: 10}} pr={{sm:3, md: 0}}>
            <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 450ms`}}>
              <Typography variant="body1" sx={baseTextStyles}>          
                I am a <Box sx={boxTextStyles} component="span"> Full Stack Web Developer </Box> 
                based in <Box sx={boxTextStyles} component="span">Los Angeles, California. </Box> I started coding in 2019 and went back to college in 2020 for a degree in
                <Box sx={boxTextStyles} component="span"> Computer Information Systems </Box> major in Web Development and Software Development.
              </Typography>
            </Box>
            <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 650ms`}}>
              <Typography 
                variant="body1" 
                sx={baseTextStyles} 
                mt={{xs: 1.25, sm: 1.5, lg: 2, xl:3}}>         
                I can design and develop a fully working website or web application from frontend to backend with amazing features including the use of APIs and database implementation.
              </Typography>
            </Box>
            <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 950ms`}}>
              <Typography 
                variant="body1" 
                sx={{
                  ...baseTextStyles, 
                  opacity: .85, 
                  borderLeft: 2, 
                  pl: {xs: 1, md:1.5}, 
                  borderColor: "primary.dark", 
                  lineHeight: 1.4
                }} 
                mt={{xs: 3, sm: 3.5, lg:5, xl:8}}
              >
                I am ready to take my skills to the next level and I am confident that I have the necessary knowledge and skills to prove my capabilities.
              </Typography>
            </Box>
          </Box>
          <Fade appear={true} in={true} timeout={900}  style={{ transitionDelay: "1300ms" }}>
            <Box sx={{mt: {xs: 5, lg: 6, xl: 8}}}>
              <ButtonBase 
                color="inherit"
                sx={{
                  boxShadow: 5,
                  border: 2, 
                  fontSize: { xs: ".85rem", sm: "1rem", md: "1rem", lg: "1rem" },
                  lineHeight: 1.4, 
                  borderColor: "rgba(100,100,100,.75)",
                  px: 2,
                  py: {xs: 1, sm: 1.25},
                  fontWeight: 600,
                  letterSpacing: .5,
                  opacity: .75,
                  transition: "all 250ms ease-in-out",
                  "&:hover":{
                    opacity:1,
                    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                    transform: "scale(1.02)",
                    borderColor: "primary.dark",
                  }
                }}
              >
                Download My CV <DownloadIcon sx={{ml: 1.5}}/>
              </ButtonBase>
            </Box>
          </Fade>
        </Grid>

        <Grid item xs={12} md={5} lg={6} xl={6.5}  order={{xs: 1, md:2}} sx={{display: "flex", justifyContent: "right", alignitems: "center", height: "100%"}}>
          <Box 
            sx={{
              border: 1, 
              height: {xs: 220, sm: 250, md:300}, 
              width: {xs: 220, sm: 250, md:300}, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              mixBlendMode: "difference", 
              opacity: 0, 
              animation: `${slideLeft} 900ms ease forwards 1250ms`,
            }}>
            <Typography >image</Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Introduction