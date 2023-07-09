import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15}
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>

    </Box>  
  )
}

export default About