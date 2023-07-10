import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const SkillsDescription = () => {

  return (
    <Stack pl={{xs: 3, sm: 3, md: 2, lg: 3.5, xl: 5}}>
      <Box sx={{mb: 5, display: {xs: "none", md: "initial"}}}>
        <Typography 
          variant="h2" 
          fontWeight={400}
          fontSize={{lg: 38, xl: 40}} 
          letterSpacing={.5}
          lineHeight={{lg:1.6, xl:1.1}} 
          textTransform="none"
          align="right"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          My Expertise
        </Typography>
        {/* <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: "auto", mt: {xs: 1, md:1, lg: 1.5}, mr: .5, mixBlendMode: "difference", opacity: .85, boxShadow: 5}}></Box> */}
      </Box>
      <Box ml="auto" sx={{maxWidth: "95%"}}>
        <Typography 
          variant="body1" 
          sx={{
            textAlign: { xs: "justify", md:"right" }, 
            textJustify: "inter-word", 
            fontSize: {xs: 13, sm: 14, md: 15, lg:16, xl: 17},
            fontWeight: 300,
            opacity: .55,
            letterSpacing: .4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          }}
        >
          My skillset is heavily focused on designing and developing web based applications. 
          However, I do have ample knowledge in common coding languages, software development, and other related technologies.
        </Typography>
      </Box>
    </Stack>
  )
}

export default SkillsDescription