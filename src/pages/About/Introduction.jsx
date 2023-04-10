import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
  component: "span",
};

const Introduction = () => {
  return (
    <Box sx={{minHeight: "55vh" }}>
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
      <Box sx={{background: "white", height: "4px", width: "25px", my: 5}}></Box>

        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", mx: "auto", mixBlendMode: "difference"}}>
          <Grid item xs={12} md={6.5} pt={4} px={1}>
            <Typography variant="body1" mb={4} fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              My name is <Box sx={boxTextStyles}>Paolo Bugarin</Box>. I am a <Box sx={boxTextStyles}>Full Stack Web Developer </Box> 
              based in <Box sx={boxTextStyles}>Los Angeles, California.</Box> I design and develop websites from
              a <Box sx={boxTextStyles}>simple static page</Box> to a <Box sx={boxTextStyles}>complex dynamic web application.</Box> 
            </Typography>

            <Typography variant="body1" mb={4} fontWeight={200} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
              I mainly develop my projects using <Box sx={boxTextStyles}>ReactJS </Box> 
              or <Box sx={boxTextStyles}>NextJS</Box> in the Client-Side, and 
              <Box sx={boxTextStyles}> NodeJS</Box> and <Box sx={boxTextStyles}>ExpressJS </Box>
              in the Server-Side along with related libraries and frameworks.
            </Typography>
          </Grid>
          <Divider flexItem orientation='vertical'><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="column"/></Divider>
          <Grid item xs={12} md={5} pt={4} px={1}>
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