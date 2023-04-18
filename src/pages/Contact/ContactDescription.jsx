import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ContactDescription = () => {
  return (
    <Stack sx={{py: 3.5, mx: 2, pr: 6, height: "100%"}} align='left' justifyContent="space-between">
      <Box>
        <Box mb={3}>
          <Typography variant="h4" sx={{letterSpacing: 2, textTransform: "initial", fontWeight: 800, fontSize: 35 }}>Contact Me</Typography>
          <Box sx={{background: "white", height: "3px", width: "15px", my: 1.25}} ></Box>
        </Box>
        <Typography sx={{fontWeight: 200, fontSize: 16, opacity: .95, lineHeight: 1.4}}>
          Thank you for your interest! Please fill out the form or use my contact informations provided to get in touch with me.
          I am excited to take a leap forward and further hone my knowledge and skills with the right company.
        </Typography>
      </Box>
      <Box>
        
      </Box>
    </Stack>
  )
}

export default ContactDescription