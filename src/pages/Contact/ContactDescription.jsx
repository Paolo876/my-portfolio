import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';

const ContactDescription = () => {
  return (
    <Stack sx={{py: 3.5, mx: 2, pr: 6, height: "100%"}} align='left' justifyContent="space-between">
      <Box>
        <Box mb={3}>
          <Typography variant="h4" sx={{letterSpacing: 2, textTransform: "initial", fontWeight: 800, fontSize: 35 }}>Hire Me</Typography>
          <Box sx={{background: "white", height: "3px", width: "15px", my: 1.25}} ></Box>
        </Box>
        <Typography sx={{fontWeight: 200, fontSize: 16, opacity: .95, lineHeight: 1.45, letterSpacing: .35}}>
          Let me show you my capabilities and how I can be a great part of your company. 
          Please fill out the form or use my contact informations provided to get in touch with me. <br/>
          I am excited to take a leap forward and further hone my knowledge and skills with the right company.
        </Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1}}>
        <Box sx={{width: 70, height: 70, border: 1,}}>
        </Box>
        <Box>
          <Typography variant="h4" sx={{letterSpacing: .8, textTransform: "none", opacity: .8, lineHeight: 1.5}}>Paolo Bugarin</Typography>
          <Typography variant="body2" sx={{letterSpacing: .8, textTransform: "none", opacity: .7, fontSize: 19}}>Los Angeles, CA <PlaceIcon sx={{fontSize: "inherit"}}/></Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default ContactDescription