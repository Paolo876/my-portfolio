import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const baseTextStyles = {
  fontSize:{xs: 12, sm: 12, md: 13, lg:14, xl: 15},
  fontWeight: 200,
  textAlign: "justify", 
  textJustify: "inter-word", 
  mixBlendMode: "difference"
}

const Introduction = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
        pt: {xs:8, sm: 12, md: 14, lg: 16}, 
        pb: {xs:8, sm: 12, md: 12, lg: 12}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        // minHeight: "36vh", 
        maxWidth: "1500px", 
        mx: "auto"
      }}
    >      
      <Grid item xs={12} xl={3}>
        <Typography 
          variant="h1" 
          align="left" 
          fontWeight={800} 
          fontSize={{xs:32, sm: 32, md: 42, lg: 40, xl: 70}} 
          letterSpacing={{xs:2, sm:2, md: 2, lg: 2, xl:3.5}} 
          lineHeight={{xl:1}} 
          sx={{mixBlendMode: "difference"}}
        >
          About<br/>Me
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 10}, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: {xs: 1.25, sm: 1.5, md:3}, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>

      </Grid>

      <Grid item xs={12} lg={4} xl={3}>
        <Typography variant="body1" sx={baseTextStyles}>          
          I am a <Box sx={boxTextStyles} component="span" color="primary.light">Full Stack Web Developer </Box> 
          based in <Box sx={boxTextStyles} component="span">Los Angeles, California.</Box> I design and develop websites from
          a <Box sx={boxTextStyles} component="span">simple static page</Box> to a <Box sx={boxTextStyles} component="span">complex dynamic web application.</Box> 
        </Typography>
      </Grid>

      <Grid item xs={12} lg={4} xl={3}>
        <Typography variant="body1" sx={baseTextStyles}>          
          I specialize in developing a web application using <Box sx={boxTextStyles} component="span" color="primary.light">ReactJS </Box> 
          or <Box sx={boxTextStyles} component="span" color="secondary.light">NextJS</Box> in the Client-Side, and 
          <Box sx={boxTextStyles} component="span" color="primary.light"> NodeJS</Box> and <Box sx={boxTextStyles} component="span" color="primary.light">ExpressJS </Box>
          in the Server-Side along with related libraries and frameworks.
        </Typography>
      </Grid>

      <Grid item xs={12} lg={4} xl={3} sx={{display: "flex", justifyContent: "center",}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: 200, 
            width: 200, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
            // mt: 2,
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Introduction