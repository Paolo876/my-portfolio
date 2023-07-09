import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'

const About = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        minHeight: "85vh",
      }}
    >
      <Box align="center" >
        <ButtonBase 
          disableRipple
          sx={{
            opacity: .65,
            transition: "all 500ms ease-in-out",
            letterSpacing: 3,
            textShadow: "1px 1px 7px rgba(10,10,10,.5)",
            "&:hover": {
              transform: "scale(1.015)",
              opacity: 1,
              letterSpacing: 4
            }
          }}
        >
          <Typography variant="h2" textTransform="none" fontWeight={200} >Who Am I?</Typography>
        </ButtonBase>
      </Box>
    </Box>  
  )
}

export default About