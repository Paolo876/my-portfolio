import React from 'react'
import { Box, Stack, Typography, ButtonBase, Grid } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import SocialLinks from '../../components/SocialLinks';

const textStyles = {
  fontSize:{ xs: 11, sm: 12, md: 13, lg:14, xl: 15.5 },
  fontWeight: 300,
  textAlign: "justify", 
  textJustify: "inter-word", 
  opacity: .7,
}

const ContactDescription = () => {
  return (
    <>
      <Box>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 88}} 
          letterSpacing={{xs: .5, xL:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(25,25,25,.75)",
          }}
        >
          Let's Talk
        </Typography>
      </Box>
      <Box sx={{mt: {xs: 3, sm: 4, md: 10, lg: 10, xl: 10}, pl: {xl: .5}}}>
        <Typography
          variant="body1"
          sx={{
            fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 16},
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
            mt: 4,
            fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 16},
            fontWeight: 300,
            opacity: .6,
            letterSpacing: .4,
            lineHeight: 1.4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            borderLeft: 2,
            borderColor: "primary.main",
            pl: 1.25,
          }}
        >
          Please feel free to reach out to me using my contact informations provided or by submitting the inquiry form.
        </Typography>
      </Box>
      <Box>
        
      </Box>
    </>
)
}

export default ContactDescription