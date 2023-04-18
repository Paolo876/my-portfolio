import React from 'react'
import { Box, Typography } from '@mui/material'

const ContactDescription = () => {
  return (
    <Box sx={{my: 3.5, mx: 2, px: 6, py: 3}} align='left'>
      <Box mb={3}>
        <Typography variant="h4" sx={{letterSpacing: 2, textTransform: "initial", fontWeight: 800, fontSize: 35 }}>Paolo Bugarin</Typography>
        <Box sx={{background: "white", height: "3px", width: "15px", my: 1.25}} ></Box>
      </Box>
      <Typography sx={{fontWeight: 300, fontSize: 17, opacity: .95, lineHeight: 1.75}}>
        I am excited to take a leap forward and further hone my knowledge and skills with the right company.
      </Typography>
    </Box>
  )
}

export default ContactDescription