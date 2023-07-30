import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};


const baseTextStyles = {
  fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 16},
  fontWeight: 300,
  opacity: .55,
  letterSpacing: .3,
  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
}


const Introduction = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
        pt: {xs:8, sm: 12, md: 14, lg: 16, xl: 20}, 
        pb: {xs:12, sm: 13, md: 12, lg: 15}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto",
      }}
    >      
      <Grid item md={6} lg={5.5} order={{xs: 2, md:1}} mt={{xs: 6, sm: 6, md: 0}}>
        <Box>
          <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 88}} 
              letterSpacing={{xs: .5, xL:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
          >
            About Me
          </Typography>
        </Box>
        <Box mt={{xs: 3, sm: 4, md: 10, lg: 12, xl: 13}}>
          <Typography variant="body1" sx={baseTextStyles}>          
            I am a <Box sx={boxTextStyles} component="span"> Full Stack Web Developer </Box> 
            based in <Box sx={boxTextStyles} component="span">Los Angeles, California. </Box> I started coding in 2019 and went back to college in 2020 for a degree in
            <Box sx={boxTextStyles} component="span"> Computer Information Systems </Box> major in Web Development and Software Development.
          </Typography>
          <Typography variant="body1" sx={baseTextStyles} mt={.5}>         
            I can design and develop a fully working website or web application from frontend to backend with amazing features including the use of APIs and database implementation.
          </Typography>
          <Typography variant="body1" sx={{...baseTextStyles, opacity: .8}} mt={6}>
            I am ready to take my skills to the next level and I am confident that I have the necessary knowledge and skills to prove myself.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} lg={6.5}  order={{xs: 1, md:2}} sx={{display: "flex", justifyContent: "right"}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: {xs: 220, sm: 250, md:300}, 
            width: {xs: 220, sm: 250, md:300}, 
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