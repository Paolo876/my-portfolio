import React from 'react'
import { Typography, Box } from '@mui/material'
const Footer = () => {
  return (
    <Box align="center" py={.3} sx={{mixBlendMode: "difference"}}>
        <Typography sx={{fontSize: {xs: 11, sm:12, md: 13, lg:14}, opacity: .5, mixBlendMode: "difference"}}>© 2023 Paolo Bugarin, All rights reserved.</Typography>
    </Box>
  )
}

export default Footer
