import React from 'react'
import { Box, Typography, Stack, Paper, IconButton } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import SocialLinks from "../../../components/SocialLinks"
const ContactInformations = () => {
  return (
    <Stack justifyContent="end" mt={8} ml={5}>
      <Box>
        <Typography variant="body1" sx={{letterSpacing: 1, fontSize: 30, fontWeight: 500}} >Paolo Bugarin</Typography>
        <Typography variant="body1" sx={{letterSpacing: .5, fontSize: 22, fontWeight: 200, mt:.5}} >Los Angeles, California <PlaceIcon fontSize="inherit"/></Typography>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", gap: 2, mt: 3}}>
        <IconButton size="small" href="tel:3234817852" sx={{mixBlendMode: "difference"}}><LocalPhoneIcon color="primary"/></IconButton> 
        <Typography variant="body1" sx={{letterSpacing: 1}} >+1 (323) - 481 - 7852</Typography>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", gap: 2, my: 1}}>
        <IconButton size="small" href="mailto: paolopaolobugarin@gmail.com" sx={{mixBlendMode: "difference"}}><MailOutlineIcon color="primary"/></IconButton> 
        <Typography variant="body1" sx={{letterSpacing: 1}} >paolopaolobugarin@gmail.com</Typography>
      </Box>
      <Box mt={3} gap={2}>
        <Typography variant="body1" sx={{fontSize: 15, letterSpacing: 1, opacity: .8, mb: 1}} >Social:</Typography>
        <SocialLinks buttonSize='small'/>
      </Box>
    </Stack>
  )
}

export default ContactInformations