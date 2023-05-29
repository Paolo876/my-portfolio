import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const SkillsDescription = () => {

  return (
    <Stack pl={{xs: 3, sm: 3, md: 2, lg: 3.5, xl: 5}} pr={{xs:3, sm: 3, md: 2, lg: 3.5}}>
      <Box sx={{mb: 4, display: {xs: "none", md: "initial"}}}>
        <Typography variant="h4" fontSize={{md: 28, lg: 30, xl: 35}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main" align="right">Technologies</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: "auto", mt: {xs: 1, md:1, lg: 1.5}, mr: .5, mixBlendMode: "difference", opacity: .75}}></Box>

      </Box>
      <Box mt={{xs: 2, sm:4, md: 1}}>
        <Typography variant="body1" fontSize={{xs: 13, sm: 14, md: 13.5, lg:15, xl: 16.5}} fontWeight={300} sx={{textAlign: {xs: "justify", md:"right"}, textJustify: "inter-word", opacity: .8}}>
          I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. A part of my knowledge is also gained from self-studying through online courses, tutorials, and being a member of different coding groups.
        </Typography>
      </Box>
    </Stack>
  )
}

export default SkillsDescription