import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, ButtonBase, Fade } from '@mui/material'
import Skills from './Skills/Skills';
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


const slideRight = keyframes`
  0% {
    transform: translateX(-1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const AboutContent = ({ isVisible }) => {
  const navigate = useNavigate();

  
  return (
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%"}}>
			<Grid item xs={12}>
				<Grid container columnSpacing={{xs: 0, sm:3, md: 6, lg: 6, xl:12}}>
					<Grid item xs={3.75} sm={3} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "1150ms" }}>
						  <Box sx={{height: {xs: 125, sm: 180, md: 240, lg: 280, xl: 300 }, width: {xs: 90, sm: 130, md: 190, lg: 230, xl: 250}, border: 1}}></Box>
            </Fade>
          </Grid>
					<Grid item xs={8.25} sm={9} sx={{display: "flex", flexDirection: "column", justifyContent: {xs: "center", sm: "space-between"}}}>
            <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "300ms" }}>
              <Box>
                <Typography
                  variant="h2" 
                  fontWeight={600}
                  fontSize={{xs: 18, sm: 23.5, md: 26, lg: 32, xl: 36}} 
                  letterSpacing={{xs: -.05, sm: -.1,}}
                  lineHeight={1.4} 
                  textTransform="none"
                  sx={{
                    textShadow: "1px 1px 7px rgba(10,10,10,.75)",
                  }}
                >
                  <Box component="span" fontSize={{xs: 25.5, sm: 30.5, md: 33, lg: 39, xl: 45}}>I am Paolo Bugarin</Box>, 
                  <br/>
                  <Box component="span" fontWeight={500} sx={{opacity: .75}}>
                    a Web Developer based in <Box component="br" sx={{display: {xs:"none", sm: "initial", md: "none"}}}></Box>Los Angeles, California.
                  </Box>
                </Typography>
              </Box>
            </Fade>
            <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "550ms" }}>
              <Box pb={{md: 1.5, lg:3}} pt={{sm:2, md: 0}} sx={{maxWidth: "100%", display: {xs: "none", sm: "initial"}}}>
                <Typography
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 12, sm: 13, md: 14, lg:16, xl: 16},
                    fontWeight: 100,
                    opacity: .5,
                    letterSpacing: 1.25,
                    lineHeight: 1.6,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                    pr: {xl: 2}
                  }}
                >
                  I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. 
                  A big part of my knowledge is also gained from self-studying through online courses, tutorials, and participating in different coding groups.
                </Typography>
              </Box>
            </Fade>
            <Box sx={{opacity: 0, animation: isVisible ? `${slideLeft} 1100ms ease forwards 1150ms` : "none"}}>
              <Box mb={{lg: 1.5}} sx={{display: {xs: "none", md: "initial"}}}>
                <ButtonBase
                  onClick={() => navigate("/about")}
                  sx={{
                    borderLeft: 2, 
                    fontSize: { xs: "1.25rem", sm: "1.3rem", md: "1.3rem", lg: "1.4rem", xl:"1.4rem" },
                    lineHeight: 1.4, 
                    color: "white", 
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
                  Read More About Me
                </ButtonBase>
              </Box>
            </Box>
					</Grid>
          <Grid item xs={12} sx={{display: {xs: "initial", md: "none"}}} mt={{xs: 1.5, sm:4}}>
            <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "550ms" }}>
              <Box pb={{md: 1.5, lg:3}} pt={{sm:2, md: 0}} sx={{maxWidth: "100%", display: {xs: "initial", sm: "none"}}}>
                <Typography
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 10.5, sm: 13, md: 14, lg:16, xl: 17},
                    fontWeight: 300,
                    opacity: .55,
                    letterSpacing: .4,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                    pr: {xl: 2}
                  }}
                >
                  I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. 
                  A big part of my knowledge is also gained from self-studying through online courses, tutorials, and participating in different coding groups.
                </Typography>
              </Box>
            </Fade>
            <Box sx={{opacity: 0, animation: isVisible ? `${slideLeft} 1100ms ease forwards 1150ms` : "none"}}>
              <Box mt={{xs: 2, sm: 0}}>
                <ButtonBase
                  onClick={() => navigate("/about")}
                  sx={{
                    borderLeft: 2, 
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem", lg: "1.4rem", xl:"1.4rem" },
                    lineHeight: 1.4, 
                    color: "white", 
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
                  Read More About Me
                </ButtonBase>
              </Box>
            </Box>
          </Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} mt={{md: 8, lg: 8, xl: 12}}>
				<Skills isVisible={isVisible}/>
			</Grid>
      <Grid item xs={12} mt={{xs: 1.5, sm:3}} sx={{display: {xs: "initial", md: "none"}}}>
        <Box sx={{opacity: 0, animation: isVisible ? `${slideRight} 1100ms ease forwards 2150ms` : "none"}}>
          <Box>
            <ButtonBase
              onClick={() => navigate("/about")}
              sx={{
                borderLeft: 2, 
                fontSize: { xs: "1rem", sm: "1.2rem" },
                lineHeight: 1.4, 
                color: "white", 
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
              See All My Skills
            </ButtonBase>
          </Box>
        </Box>
      </Grid>
		</Grid>
    )
}

export default AboutContent