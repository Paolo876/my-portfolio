import React from 'react'
import { Box, Stack, Typography, ButtonBase } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import SocialLinks from '../../components/SocialLinks';

const textStyles = {
  fontSize:{ xs: 12, sm: 12, md: 13, lg:14, xl: 15.5 },
  fontWeight: 300,
  textAlign: "justify", 
  textJustify: "inter-word", 
  opacity: .9,
}

const ContactDescription = () => {
  return (
    <Stack sx={{py: 5, mx: 2, pr: 6, height: "100%"}} align='left' justifyContent="space-between">
      <Box pr={2}>
        <Box mb={3}>
          <Typography 
            variant="h4" 
            fontSize={{xs:36, sm: 38, md: 40, lg: 42}} 
            sx={{opacity: .9}}
            color="primary.main"
            letterSpacing={{xs:2, sm:2, md:2, lg:2}} 
            textTransform="none"
          >
            Contact Me
          </Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 8}, width: {xs: 12, sm: 8, md: 8}, mr: "auto", mt: .75, ml: .5, mixBlendMode: "difference", opacity: .5}}></Box>
        </Box>
        <Box ml={.5}>
          <Typography sx={textStyles}>
            Let me show you my capabilities and how I can be a great part of your company. 
            Please fill out the form or use my contact informations provided to get in touch with me.
          </Typography>
          <Typography sx={textStyles} mt={1.5}>
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
          </Typography>
        </Box>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1, mb: 8}}>
        <Box sx={{width: 60, height: 60, border: 1,}}>
        </Box>
        <Box sx={{opacity: .9}}>
          <Typography 
            variant="h5" 
            sx={{letterSpacing: 1.5, textTransform: "none", fontSize: {xs:18, sm: 19, md: 20, lg: 22}, fontWeight: 800}}
          >
            Paolo Bugarin
          </Typography>
          <Typography variant="h5" sx={{letterSpacing: 1, textTransform: "none", opacity: .75, fontSize: {xs:12, sm: 13, md: 14, lg: 15}, mt: .5, fontWeight: 200}}>Los Angeles, CA <PlaceIcon sx={{fontSize: "inherit"}} color="primary"/></Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, justifyContent: "space-between", opacity: .75 }}>
        <Box>
          <Typography variant="body1" sx={{letterSpacing: .5, textTransform: "none", fontWeight: 500, opacity: .9}}>Email</Typography>
          <Box sx={{background: "white", height: "1px", width: "100%", my: .1, opacity: .15}}></Box>
          <ButtonBase target="_blank" href="mailto: paolopaolobugarin@gmail.com" >
            <Typography variant="body1" sx={{textTransform: "none", opacity: 1, fontWeight: 500}} color="primary">paolopaolobugarin@gmail.com</Typography>
          </ButtonBase>
        </Box>
        <Box>
          <Typography variant="body1" sx={{letterSpacing: .5, textTransform: "none", fontWeight: 500, opacity: .9}}>Phone</Typography>
          <Box sx={{background: "white", height: "1px", width: "100%", my: .1, opacity: .15}}></Box>
          <ButtonBase href="tel:3234817852">
            <Typography variant="body1" sx={{textTransform: "none", opacity: 1, fontWeight: 500}} color="primary">+1 (323) 481 7852</Typography>
          </ButtonBase>
        </Box>
        <Box>
          <Typography variant="body1" sx={{letterSpacing: .5, textTransform: "none", fontWeight: 500, opacity: .9}}>Social</Typography>
          <Box sx={{background: "white", height: "1px", width: "100%", my: .1, opacity: .15}}></Box>
          <SocialLinks mixBlendMode='none' buttonSize='medium' iconSize={18} gap={1}/>
        </Box>
      </Box>
    </Stack>
  )
}

export default ContactDescription