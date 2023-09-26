import React from 'react'
import { Grid, Fade, Typography, Box } from '@mui/material'
import { keyframes } from '@mui/system';
import Image from 'mui-image';


const slideDown = keyframes`
  0% {
    transform: translateY(-1.75em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: .75;
  }
`


const ProjectIntroduction = ({ title, description, logo }) => {
  return (
    <Grid 
      container
      sx={{
        justifyContent: "space-between", 
        alignItems: "flex-start", 
      }}
    >
      <Grid item xs={12}>
        <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: "150ms" }}>
          <Box>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 42, sm: 44, md: 48, lg: 55, xl: 65}} 
              letterSpacing={.1}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Fade>
      </Grid>

      <Grid item xs={12} sm={7.15} md={7.5} lg={7} xl={6} sx={{mt: {xs: 3, sm: 5, md: 5, lg: 6, xl: 6}}}>
          <Box sx={{position: "relative"}}>
            <Box 
              sx={{
                height: "100%", 
                // width: 2, 
                // backgroundColor: {xs: "primary.dark", sm:"primary.dark"}, 
                position: "absolute", 
                left: 0, top: 0,
                opacity: 0,
                animation: `${slideDown} 500ms ease forwards 250ms`,
              }}
            ></Box>
            <Fade appear={true} in={true} timeout={700}  style={{ transitionDelay: "800ms" }}>
              <Box>
                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 10, sm: 11, md: 12, lg:14, xl: 14.5},
                    fontWeight: 200,
                    opacity: .5,
                    letterSpacing: {xs: .75, sm: 1, md: 1.2, lg: 1.25, xl:1.3},
                    lineHeight: 1.7,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                    // pl: {xs: .85, sm: 1, md:1.25, lg: 1.5},
                  }}        
                >{description}
                </Typography>
              </Box>
            </Fade>

          </Box>
      </Grid>
      <Grid item xs={0} sm={4.25} md={4} lg={4} xl={3} pt={{sm: 3, md: 2, lg:1, xl: 2.5}} sx={{display: {xs: "none", sm: "initial"}}}>
        <Fade appear={true} in={true} timeout={1000}  style={{ transitionDelay: "1600ms" }}>
          <Box sx={{height: "auto", width: "auto", maxWidth: 300, maxHeight: 300, ml: "auto"}}>
            <Image src={logo} fit='cover' duration={0}/>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default ProjectIntroduction