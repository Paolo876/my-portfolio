import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'


const Certifications = () => {
  return (
    <Box sx={{mb: 10}}>
      <Typography variant="h5" sx={{mixBlendMode: "difference"}} fontSize="1.3rem" fontWeight={700} letterSpacing={4}>Certifications</Typography>
      <Box sx={{background: "white", height: "4px", width: "10px", mb: 4, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>

    </Box>
  )
}

export default Certifications