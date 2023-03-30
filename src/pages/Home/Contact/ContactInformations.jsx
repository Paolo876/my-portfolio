import React from 'react'
import { Box, Typography, Stack, Paper, IconButton, Divider } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SocialLinks from "../../../components/SocialLinks"


const ContactInformations = () => {
  return (
    <Stack sx={{mt: 2, ml: 5, gap: 2}}>
        <Paper variant="outlined" sx={{p:2, width:"100%", display: "flex", alignItems: "center"}}>
          <PersonPinIcon fontSize="large" sx={{mr: 2}}/>
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={2}>
            <Typography variant="body1" sx={{fontSize: 25, fontWeight: 400, letterSpacing: 1.2}} >Paolo Bugarin</Typography>
            <Typography variant="body1" sx={{fontSize: 20, fontWeight: 200, mt: .5}}>Los Angeles, CA <PlaceIcon fontSize="inherit"/></Typography>
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{p:2, width:"100%", display: "flex", alignItems: "center"}}>
          <IconButton size="small" href="tel:3234817852" sx={{mixBlendMode: "difference", mr:2, p: 0}} disableFocusRipple disableRipple disableTouchRipple>
            <LocalPhoneIcon color="primary" fontSize="large"/>
          </IconButton> 
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={2}>
            <Typography variant="body1" sx={{fontSize: 18, fontWeight: 200, mixBlendMode: "difference"}} >Phone:</Typography>
            <Typography variant="body1" sx={{fontSize: 22, letterSpacing: 1, mt: .5}} fontWeight={400}>(323) 481 - 7852</Typography>                
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{p:2, width:"100%", display: "flex", alignItems: "center"}}>
          <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={{mixBlendMode: "difference", mr:2, p: 0}} disableFocusRipple disableRipple disableTouchRipple>
            <MailOutlineIcon color="primary" fontSize="large"/>
          </IconButton> 
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={2}>
            <Typography variant="body1" sx={{fontSize: 18, fontWeight: 200, mixBlendMode: "difference"}} >E-mail</Typography>
            <Typography variant="body1" sx={{fontSize: 20, mt: .5}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>        
          </Stack>
        </Paper>
    </Stack>
  )
}

export default ContactInformations