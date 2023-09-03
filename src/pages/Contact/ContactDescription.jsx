import React from 'react'
import { Box, Typography, IconButton, Fade } from '@mui/material'
import SocialLinks from '../../components/SocialLinks';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { keyframes } from '@mui/system';


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
  return (
    <>
      <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "300ms" }}>
        <Box>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{xs: 35, sm: 45, md: 65, lg: 72, xl: 88}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(25,25,25,.75)",
            }}
          >
            Let's Talk
          </Typography>
        </Box>
      </Fade>
      <Box sx={{mt: {xs: 2.5, sm: 4, md: 6, lg: 8, xl: 10}, pl: {lg: .5}}}>
        <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 650ms`}}>
          <Typography
            variant="body1"
            sx={{
              fontSize: {xs: 10, sm: 14.5, md: 15, lg:15, xl: 16},
              fontWeight: 300,
              opacity: .75,
              letterSpacing: .4,
              lineHeight: 1.4,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
            Let me show you my capabilities and what I can offer.
          </Typography>
        </Box>
        <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 950ms`}}>
          <Typography 
            variant="body1"
            sx={{
              mt: {xs: 1, sm:2, md:3},
              fontSize: {xs: 10, sm: 14.5, md: 15, lg:15, xl: 16},
              fontWeight: 300,
              opacity: .6,
              letterSpacing: .4,
              lineHeight: 1.4,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              borderLeft: 2,
              borderColor: "primary.main",
              pl: {xs: .5, sm:1.25},
            }}
          >
            Please feel free to reach out to me using my contact informations provided or by submitting the inquiry form.
          </Typography>
        </Box>
      </Box>
      <Box sx={{mt: {xs: 6, sm: 8, md: 9, lg:"auto"}}}>
        <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
          <Fade appear={true} in={true} timeout={1200}  style={{ transitionDelay: "300ms" }}>
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
                  opacity: .7
                }}
              >
                Paolo Bugarin
              </Typography>
            </Box>
          </Fade>
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
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: {xs: "column", sm: "row"}, mt: {xs: 1.4, sm: 5, md: 6, lg: 8, xl: 8}}} mb={4}>
          <Box sx={{display: "flex", flexDirection: "column", gap: {xs:1, sm: 1.5}}}>
            <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={contactButtonStyles} disableRipple>
              <MailOutlineIcon color="primary" sx={{fontSize: { xs:17, sm: 23, md: 22, lg: 22, xl: 23}}}/>
              <Typography sx={{fontSize: {xs:11.5, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>
            </IconButton>
            <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
              <LocalPhoneIcon color="primary" sx={{fontSize: { xs:17, sm: 23, md: 22, lg: 22, xl: 23}}} />
              <Typography sx={{fontSize: {xs:11.5, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>(323) 481 - 7852</Typography>
            </IconButton> 
          </Box>
          <Box sx={{display: "flex", flexDirection: {xs:"row", sm: "column"}, alignItems: {xs:"center", sm: "flex-start"}, justifyContent: "space-between", mt: {xs: 1, sm: 0}}}>
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
        </Box>
      </Box>
    </>
)
}

export default ContactDescription