import React from 'react'
import { Box, Typography, IconButton, Fade, ButtonBase } from '@mui/material'
import SocialLinks from '../../components/SocialLinks';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { keyframes } from '@mui/system';
import useRootRedux from '../../hooks/useRootRedux';
import DownloadIcon from '@mui/icons-material/Download';


const slideRight = keyframes`
  0% {
    transform: translateX(-2.25em);
    opacity: 0;
  }
  80% {
    opacity: .7;
  }
  100% {
    transform: translateX(0);
    opacity: .75;
  }
`;


const contactButtonStyles = {
  width: "fit-content", 
  textAlign: "left",
  display: "flex", 
  alignItems: "center", 
  gap: {xs: .75, sm: .75, lg: 1}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: .15,
  pl: {xs: .75, lg:1.5},
  transition: "all 250ms ease-in-out",
  opacity: .7,

  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.015)",
    borderColor: "primary.main",
  }
}

const ContactDescription = () => {
  const { resumeUrl } = useRootRedux();


  return (
    <>
      <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "200ms" }}>
        <Box>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{xs: 35, sm: 52, md: 68, lg: 72, xl: 88}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(80,80,80,.2)",
            }}
          >
            Let's Talk
          </Typography>
        </Box>
      </Fade>
      <Box sx={{mt: {xs: 2.5, sm: 4, md: 6, lg: 8, xl: 8}, pl: {lg: .5}}}>
        <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 450ms`}}>
          <Typography
            variant="body1"
            sx={{
              fontSize: {xs: 10, sm: 14, md: 14, lg:14.5, xl: 15},
              fontWeight: 300,
              opacity: .7,
              letterSpacing:{xs: .4, sm:.6},
              transform: "skewX(-3deg)",
              lineHeight: 1.7,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
            {/* Let me show you my capabilities and what I can offer. */}
          </Typography>
        </Box>
      </Box>
      <Box sx={{mt: {xs: 6, sm: 8, md: 9, lg:"auto"}}}>
        <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: {sm:"row"}}}>
          <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "950ms" }}>
              <Box>
                <Typography
                  variant="h2" 
                  align="left" 
                  fontWeight={400}
                  fontSize={{xs: 17, sm: 24, md: 25, lg: 25, xl: 26}} 
                  letterSpacing={{sm: .5, xl:1}}
                  lineHeight={{xs:1}} 
                  textTransform="none"
                  sx={{
                    textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                    opacity: .8
                  }}
                >
                  Paolo Bugarin
                </Typography>
              </Box>
            </Fade>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "1150ms" }}>
              <Box>
                <Typography
                  variant="h2" 
                  align="left" 
                  fontWeight={300}
                  fontSize={{xs: 10.5, sm: 17, md: 18, lg: 18, xl: 18}} 
                  letterSpacing={{sm: .5, xl:1}}
                  lineHeight={{xs:1}} 
                  textTransform="none"
                  sx={{
                    mt: 1,
                    textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                    opacity: .45
                  }}
                >
                  Los Angeles, CA
                </Typography>
              </Box>
            </Fade>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
            <Fade appear={true} in={true} timeout={1400}  style={{ transitionDelay: "950ms" }}>
              <Box>
                <ButtonBase 
                  color="inherit"
                  href={resumeUrl}
                  target="_blank"
                  sx={{
                    boxShadow: 5,
                    border: 2, 
                    fontSize: { xs: ".75rem", sm: ".88rem", md: ".9rem", lg: ".95rem" },
                    lineHeight: 1.4, 
                    borderColor: "rgba(150,150,150,.75)",
                    px: {xs: 1.25, sm: 2.25, md: 2.5, lg: 2.5},
                    py: {xs: 1, sm: 1.1, md: 1.15, lg: 1.25},
                    fontWeight: 600,
                    letterSpacing: {xs:1.75, md: 2, lg: 2.25},
                    opacity: {xs: .95, lg: .85},
                    transition: "all 250ms ease-in-out",
                    textTransform: "uppercase",
                    "&:hover":{
                      opacity:1,
                      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                      transform: "scale(1.01)",
                      borderColor: "primary.dark",
                    }
                  }}
                >
                  Download My CV <DownloadIcon sx={{ml: {xs: 1.25, sm:1.5}}} style={{fontSize: "inherit"}}/>
                </ButtonBase>
              </Box>
            </Fade>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: {xs: "column", sm: "row"}, mt: {xs: 1.4, sm: 5, md: 6, lg: 8, xl: 8}}} mb={4}>
          <Box sx={{display: "flex", flexDirection: "column", gap: {xs:1, sm: 1.5}}}>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "1400ms" }}>
              <Box>
                <IconButton size="small" target="_blank" href="mailto: paolo_bugarin@outlook.com" sx={contactButtonStyles} disableRipple>
                  <MailOutlineIcon color="primary" sx={{fontSize: { xs:17, sm: 23, md: 22, lg: 22, xl: 23}}}/>
                  <Typography sx={{fontSize: {xs:11.5, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>paolo_bugarin@outlook.com</Typography>
                </IconButton>
              </Box>
            </Fade>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "1500ms" }}>
              <Box>
                <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
                  <LocalPhoneIcon color="primary" sx={{fontSize: { xs:17, sm: 23, md: 22, lg: 22, xl: 23}}} />
                  <Typography sx={{fontSize: {xs:11.5, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>(323) 481 - 7852</Typography>
                </IconButton> 
              </Box>
            </Fade>
          </Box>
          <Box sx={{display: "flex", flexDirection: {xs:"row", sm: "column"}, alignItems: {xs:"center", sm: "flex-start"}, justifyContent: "space-between", mt: {xs: 1, sm: 0}}}>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "1450ms" }}>
              <Box>
                <Typography
                  variant="h2" 
                  align="left" 
                  fontWeight={400}
                  fontSize={{xs:10.5, sm: 14, md: 15.5, lg: 15.5, xl: 17}} 
                  letterSpacing={{sm: .5, xl:1}}
                  lineHeight={{xs:1}} 
                  textTransform="none"
                  mr={{xs: 2, sm: 0}}
                  sx={{
                    textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                    opacity: .5,
                  }}
                >
                  Social:
                </Typography>
              </Box>
            </Fade>
            <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "1600ms" }}>
              <Box>
                <SocialLinks 
                  flexDirection='row' 
                  color="inherit" 
                  gap={1}
                  placement="bottom"
                  additionalStyles={{
                    opacity: {lg:.85},
                    transition: "all 200ms ease-in-out",
                    "&:hover": {
                      opacity: 1,
                      transform: "scale(1.15)",
                      color: "primary.light",
                    }
                  }}
                />
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
    </>
)
}

export default ContactDescription