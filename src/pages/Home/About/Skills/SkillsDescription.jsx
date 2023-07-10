import React from 'react'
import { Box, Typography, Stack, ButtonBase } from '@mui/material'

const SkillsDescription = () => {

  return (
    <Stack pl={{xs: 3, sm: 3, md: 2, lg: 3.5, xl: 5}}>
      <Box sx={{display: {xs: "none", md: "initial"}}} mb={3}>
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
      <Box ml="auto" sx={{maxWidth: "95%"}} mb={5}>
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
      <Box align="right">
      <ButtonBase
								sx={{
									borderRight: 2, 
									fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.2rem", lg: "1.25rem", xl:"1.3rem" },
									lineHeight: 1.4, 
									color: "white", 
									borderColor: "primary.dark",
									px: 1.5,
									py: .25,
									fontWeight: 600,
									letterSpacing: .4,
									opacity: .85,
									transition: "all 250ms ease-in-out",
									fontFamily: "Manrope",
									"&:hover":{
										opacity:1,
										textShadow: "1px 1px 3px rgba(100,100,100,.75)",
										transform: "scale(1.02)",
										borderColor: "primary.main",
									}
								}}
							>
								Read More About My Skills
							</ButtonBase>
      </Box>
    </Stack>
  )
}

export default SkillsDescription