import React from 'react'
import { Typography, Box } from '@mui/material'

const MissionDescription = () => {
  return (
    <Box>
      <Typography variant="h4" align="left" fontSize={{xs:22, sm: 22, md: 24, lg: 26}} letterSpacing={3} >My Mission</Typography>
      <Typography variant="body1">I am seeking for a position in the field of Web Development.</Typography>

    </Box>
  )
}

export default MissionDescription