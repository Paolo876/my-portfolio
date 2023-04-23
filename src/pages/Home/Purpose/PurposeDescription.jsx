import React from 'react'
import { Typography, Box } from '@mui/material'


const PurposeDescription = () => {
  return (
    <Box>
      <Typography variant="h4" align="left" fontSize={{xs:22, sm: 24, md: 26, lg: 28}} letterSpacing={{xs:1.5, md: 4}} >My Purpose</Typography>
      <Box sx={{background: "white", height: "3px", width: "12px", mt: 1.5, mb: 2.5}}></Box>

      <Typography variant="body1" fontSize={18} sx={{mixBlendMode: "difference"}} px={.5}>
        I am seeking for a position in the field of Web Development. 
        I want to challenge myself and apply the knowledge I gained throughout my learning journey.
        I am ready to work with the right company that will help me bring out my full potential.
      </Typography>
    </Box>
  )
}

export default PurposeDescription