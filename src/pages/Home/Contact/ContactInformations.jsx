import React from 'react'
import { Typography, Stack, Paper, IconButton, Divider } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const ContactInformations = () => {
  return (
    <Stack sx={{mt: 2, pl: {xs:0, md: 2}, gap: 2}}>
        <Paper variant="outlined" sx={{p: {xs:1.5, lg: 1.25}, width:"100%", display: "flex", alignItems: "center", background: "none"}}>
          <PersonPinIcon sx={{mr: {xs: 1.5, lg: 2}, fontSize: { xs:28, sm: 30, md: 30, lg: 40 }}}/>
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={{xs: 1.5, lg: 2}}>
            <Typography variant="body1" sx={{fontSize: {xs:14, sm: 16, md: 18, lg: 20}, fontWeight: 400, letterSpacing: 1.2}} >Paolo Bugarin</Typography>
            <Typography variant="body1" sx={{fontSize: {xs:12, sm: 13, md: 14, lg: 16}, fontWeight: 200, letterSpacing: 1, mt: .5, mixBlendMode: "difference"}}>Los Angeles, CA</Typography>
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{p: {xs:1.5, lg: 1.25}, width:"100%", display: "flex", alignItems: "center", background: "none"}}>
          <IconButton size="small" href="tel:3234817852" sx={{mr: {xs: 1.5, lg: 2}, p: 0}} disableFocusRipple disableRipple disableTouchRipple>
            <LocalPhoneIcon color="primary" sx={{fontSize: { xs:28, sm: 30, md: 30, lg: 40 }}}/>
          </IconButton> 
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={{xs: 1.5, lg: 2}}>
            <Typography variant="body1" sx={{fontSize: {xs:12, sm: 13, md: 14, lg: 16}, fontWeight: 200, mixBlendMode: "difference"}} >Phone:</Typography>
            <Typography variant="body1" sx={{fontSize: {xs:14, sm: 16, md: 18, lg: 20}, letterSpacing: 1, mt: .5}} fontWeight={400}>(323) 481 - 7852</Typography>                
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{p: {xs:1.5, lg: 1.25}, width:"100%", display: "flex", alignItems: "center", background: "none"}}>
          <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={{mr: {xs: 1.5, lg: 2}, p: 0}} disableFocusRipple disableRipple disableTouchRipple>
            <MailOutlineIcon color="primary" sx={{fontSize: { xs:28, sm: 30, md: 30, lg: 40 }}}/>
          </IconButton> 
          <Divider orientation="vertical" flexItem></Divider>
          <Stack ml={{xs: 1.5, lg: 2}}>
            <Typography variant="body1" sx={{fontSize: {xs:12, sm: 13, md: 14, lg: 16}, fontWeight: 200, mixBlendMode: "difference"}} >E-mail:</Typography>
            <Typography variant="body1" sx={{fontSize: {xs:13.5, sm: 14, md: 16, lg: 20}, mt: .5}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>        
          </Stack>
        </Paper>
    </Stack>
  )
}

export default ContactInformations