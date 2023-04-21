import React from 'react'
import { Typography, Box } from '@mui/material'
const Footer = () => {
  return (
    <Box align="center" py={.25} sx={{mixBlendMode: "difference"}}>
        <Typography sx={{fontSize: {xs: 12, md: 14, lg:16}}}>© 2023 Paolo Bugarin, All rights reserved.</Typography>
    </Box>
  )
}

export default Footer