import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};


const baseTextStyles = {
  fontSize:{xs: 12, sm: 12, md: 13, lg:14, xl: 15},
  fontWeight: 300,
  textAlign: "justify", 
  textJustify: "inter-word", 
  mixBlendMode: "difference",
  opacity: .8,
}


const Introduction = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
        pt: {xs:8, sm: 12, md: 14, lg: 20}, 
        pb: {xs:12, sm: 13, md: 14, lg: 15}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 

        mx: "auto",
      }}
    >      
      <Grid item xl={6}>
        <Box>
          <Typography 
            variant="h1" 
            align="left" 
            fontWeight={800} 
            fontSize={{xs:32, sm: 32, md: 42, lg: 40, xl: 75}} 
            letterSpacing={{xs:2, sm:2, md: 2, lg: 2, xl: 5}} 
            lineHeight={{xl:1}} 
            color="primary.main"
          >
            About Me
          </Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 10}, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: {xs: 1.25, sm: 1.5, md:3}, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>
        </Box>
        <Box mt={20}>
          <Typography variant="body1" sx={baseTextStyles}>          
            I am a <Box sx={boxTextStyles} component="span">Web Developer </Box> 
            based in <Box sx={boxTextStyles} component="span">Los Angeles, California. </Box>
            Most of my projects are built using <Box sx={boxTextStyles} component="span">ReactJS </Box> 
            or <Box sx={boxTextStyles} component="span">NextJS</Box> for the Client-Side, and 
            <Box sx={boxTextStyles} component="span"> NodeJS</Box> - <Box sx={boxTextStyles} component="span">ExpressJS </Box>
            for the Server-Side along with related libraries and frameworks.
          </Typography>

          <Typography variant="body1" sx={baseTextStyles} mt={2}>
            I always try to incorporate the minimalistic approach. The lesser the pieces the more intuitive and easier to understand. Elegance through simplicity.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} lg={4} xl={6} sx={{display: "flex", justifyContent: "right"}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: 300, 
            width: 300, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Introduction