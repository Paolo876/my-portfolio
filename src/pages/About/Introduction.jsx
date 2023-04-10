import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};

const Introduction = () => {
  return (
    // <Box sx={{minHeight: "50vh" }}>
    <Box sx={{ mb: 4}}>
      <Box                
        sx={{
          opacity: .9, 
          mixBlendMode: "difference", 
        }}
        >
        <Typography 
          variant="h1" 
          sx={{
            textTransform: "none",
            fontWeight: 800,
            // fontSize: "5rem",
            lineHeight: .95,
          }}
          >About Me</Typography>
      </Box>
      <Box sx={{background: "white", height: "4px", width: "25px", my: 4}}></Box>

        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", mx: "auto", mixBlendMode: "difference"}}>
          <Grid item xs={12} md={6.5} px={1}>
            <Typography variant="body1" mb={4} fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              My name is <Box sx={boxTextStyles} component="span">Paolo Bugarin</Box>. I am a <Box sx={boxTextStyles} component="span">Full Stack Web Developer </Box> 
              based in <Box sx={boxTextStyles} component="span">Los Angeles, California.</Box> I design and develop websites from
              a <Box sx={boxTextStyles} component="span">simple static page</Box> to a <Box sx={boxTextStyles} component="span">complex dynamic web application.</Box> 
            </Typography>

            <Typography variant="body1" mb={4} fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              I specialize in developing a web application using <Box sx={boxTextStyles} component="span">ReactJS </Box> 
              or <Box sx={boxTextStyles} component="span">NextJS</Box> in the Client-Side, and 
              <Box sx={boxTextStyles} component="span"> NodeJS</Box> and <Box sx={boxTextStyles} component="span">ExpressJS </Box>
              in the Server-Side along with related libraries and frameworks.
            </Typography>
          </Grid>
          <Divider flexItem orientation='vertical'><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="column"/></Divider>
          <Grid item xs={12} md={5} px={1}>
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
    </Box>
  )
}

export default Introduction