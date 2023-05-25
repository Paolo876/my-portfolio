import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};


const baseTextStyles = {
  fontSize:{xs: 12, sm: 12, md: 13.5, lg:14, xl: 15.5},
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
        pt: {xs:8, sm: 12, md: 14, lg: 16, xl: 20}, 
        pb: {xs:12, sm: 13, md: 12, lg: 15}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto",
      }}
    >      
      <Grid item md={6} lg={5.5} order={{md:1}}>
        <Box>
          <Typography 
            variant="h1" 
            align="left" 
            fontWeight={800} 
            fontSize={{xs:32, sm: 32, md: 70, lg: 75}} 
            letterSpacing={{xs:2, sm:2, md: 3, lg: 3}} 
            lineHeight={1} 
            color="primary.main"
          >
            About Me
          </Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 10}, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: {xs: 1.25, sm: 1.25, md:1.5}, mixBlendMode: "difference", opacity: .15}}></Box>
        </Box>
        <Box mt={{md: 10, lg: 12, xl: 18}}>
          <Typography variant="body1" sx={baseTextStyles}>          
            I am a <Box sx={boxTextStyles} component="span"> Full Stack Web Developer </Box> 
            based in <Box sx={boxTextStyles} component="span">Los Angeles, California. </Box> I started coding in 2019 and went back to college in 2020 for a degree in
            <Box sx={boxTextStyles} component="span"> Computer Information Systems </Box> major in Web Development and Software Development.
          </Typography>
          <Typography variant="body1" sx={baseTextStyles} mt={1}>         
            I can design and develop a fully working website or web application from frontend to backend with amazing features including the use of APIs and database implementation.
          </Typography>
          <Typography variant="body1" sx={{...baseTextStyles, fontWeight: 400, opacity: .9}} mt={1.5}>
            I am ready to take my skills to the next level. 
            I may lack professional experience but I am confident that I have the necessary knowledge and skills to prove myself.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} lg={6.5}  order={{md:2}} sx={{display: "flex", justifyContent: "right"}}>
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