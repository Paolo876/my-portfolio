import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const Introduction = () => {
  return (
    <Grid container sx={{px: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", my: 10, minHeight: "50vh"}}>
      <Grid item xs={12} md={6} my={2}>
        <Box                
          sx={{
            opacity: .75, 
            mixBlendMode: "difference", 
          }}
          >
          <Typography 
            variant="h1" 
            sx={{
              textTransform: "none",
              fontWeight: 800,
              lineHeight: .95,
            }}
            >About Me</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3.4} my={2}></Grid>

      <Grid item xs={12} md={6} mt={2}>

        <Box sx={{background: "white", height: "4px", width: "25px", my: 5}}></Box>
        <Typography variant="body1" mb={3} fontWeight={200} fontSize={20} letterSpacing={.15} lineHeight={1.75}>
          I am a <Box sx={boxTextStyles} component="span" color="primary.light">Full Stack Web Developer </Box> 
          based in <Box sx={boxTextStyles} component="span">Los Angeles, California.</Box> I design and develop websites from
          a <Box sx={boxTextStyles} component="span">simple static page</Box> to a <Box sx={boxTextStyles} component="span">complex dynamic web application.</Box> 
        </Typography>

        <Typography variant="body1" mb={3} fontWeight={200} fontSize={20} letterSpacing={.15} lineHeight={1.75}>
          I specialize in developing a web application using <Box sx={boxTextStyles} component="span" color="primary.light">ReactJS </Box> 
          or <Box sx={boxTextStyles} component="span" color="secondary.light">NextJS</Box> in the Client-Side, and 
          <Box sx={boxTextStyles} component="span" color="primary.light"> NodeJS</Box> and <Box sx={boxTextStyles} component="span" color="primary.light">ExpressJS </Box>
          in the Server-Side along with related libraries and frameworks.
        </Typography>
      </Grid>
      {/* <Divider flexItem orientation='vertical'><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="column"/></Divider> */}
      <Grid item xs={12} md={3} px={1}>
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
            mt: 2,
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Introduction