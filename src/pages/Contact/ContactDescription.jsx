import React from 'react'
import { Box, Stack, Typography, ButtonBase } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import SocialLinks from '../../components/SocialLinks';


const ContactDescription = () => {
  return (
    <Stack sx={{py: 5, mx: 2, pr: 6, height: "100%"}} align='left' justifyContent="space-between">
      <Box pr={2}>
        <Box mb={1.5}>
          <Typography variant="h4" sx={{letterSpacing: 2, textTransform: "initial", fontWeight: 800, fontSize: 40 }}>Let's Talk</Typography>
          <Box sx={{background: "white", height: "2px", width: "15px", my: 1, opacity: .8}} ></Box>
        </Box>
        <Typography sx={{fontWeight: 300, fontSize: 16, opacity: .95, lineHeight: 1.45, letterSpacing: .35}}>
          Let me show you my capabilities and how I can be a great part of your company. 
          Please fill out the form or use my contact informations provided to get in touch with me.
        </Typography>
        <Typography sx={{fontWeight: 300, fontSize: 16, opacity: .95, lineHeight: 1.45, letterSpacing: .35, mt: 1}}>
          I am excited to take a leap forward and further hone my knowledge and skills with the right company.
        </Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1, mb: 8}}>
        <Box sx={{width: 60, height: 60, border: 1,}}>
        </Box>
        <Box sx={{opacity: .9}}>
          <Typography variant="h5" sx={{letterSpacing: 1, textTransform: "none", fontSize: 22 }}>Paolo Bugarin</Typography>
          <Typography variant="body2" sx={{letterSpacing: .25, textTransform: "none", opacity: .8, fontSize: 16, mt: .5, fontWeight: 400}}>Los Angeles, CA <PlaceIcon sx={{fontSize: "inherit"}}/></Typography>
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