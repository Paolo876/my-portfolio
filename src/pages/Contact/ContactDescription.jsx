import React from 'react'
import { Box, Stack, Typography, ButtonBase, Grid, IconButton } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import SocialLinks from '../../components/SocialLinks';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
  pl: {xs: 1, lg:1.5},
  transition: "all 250ms ease-in-out",
  letterSpacing: .4,
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
      <Box sx={{mt: {xs: 3, sm: 4, md: 6, lg: 8, xl: 10}, pl: {lg: .5}}}>
        <Typography
          variant="body1"
          sx={{
            fontSize: {xs: 11, sm: 14.5, md: 15, lg:15, xl: 16},
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
        <Typography 
          variant="body1"
          sx={{
            mt: {xs: 2, sm:3, md:4},
            fontSize: {xs: 11, sm: 14.5, md: 15, lg:15, xl: 16},
            fontWeight: 300,
            opacity: .6,
            letterSpacing: .4,
            lineHeight: 1.4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            borderLeft: 2,
            borderColor: "primary.main",
            pl: {xs: .75, sm:1.25},
          }}
        >
          Please feel free to reach out to me using my contact informations provided or by submitting the inquiry form.
        </Typography>
      </Box>
      <Box sx={{mt: {xs: 6, sm: 8, md: 12, lg:"auto"}}}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <Box>
            <Typography
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 20, sm: 24, md: 25, lg: 25, xl: 26}} 
              letterSpacing={{xs: .5, xl:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
              }}
            >
              Paolo Bugarin
            </Typography>
            <Typography
              variant="h2" 
              align="left" 
              fontWeight={300}
              fontSize={{xs: 14, sm: 17, md: 18, lg: 18, xl: 18}} 
              letterSpacing={{xs: .5, xl:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                mt: 1,
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                opacity: .6
              }}
            >
              Los Angeles, CA
            </Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", flexDirection: {xs: "column", sm: "row"}, mt: {xs: 3, sm: 5, md: 6, lg: 8, xl: 9}}} mb={4}>
          <Box sx={{display: "flex", flexDirection: "column", gap: 1.5}}>
            <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={contactButtonStyles} disableRipple>
              <MailOutlineIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 22, xl: 23}}}/>
              <Typography sx={{fontSize: {xs:14, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>
            </IconButton>
            <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
              <LocalPhoneIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 22, xl: 23}}} />
              <Typography sx={{fontSize: {xs:14, sm: 14, md: 15.5, lg: 15.5, xl: 17}, letterSpacing: 1}} fontWeight={300}>(323) 481 - 7852</Typography>
            </IconButton> 
          </Box>
          <Box sx={{display: "flex", flexDirection: {xs:"row", sm: "column"}, alignItems: {xs:"center", sm: "flex-start"}, justifyContent: "space-between", mt: {xs: 1.75, sm: 0}}}>
            <Typography
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs:14, sm: 14, md: 15.5, lg: 15.5, xl: 17}} 
              letterSpacing={{xs: .5, xl:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              mr={{xs: 3, sm: 0}}
              sx={{
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                opacity: .75
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