import React from 'react'
import { Grid, Box, Typography, Button, Stack } from '@mui/material'

const Projects = () => {
  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 12},
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,1)", mixBlendMode: "overlay", opacity: .8, zIndex: -1}}></Box>
      <Grid container sx={{maxWidth: "1500px", height: "100%", mx: "auto", overflowX:"auto", overflowY: "hidden", px: {md: 0,lg:3}}}>
        <Grid item lg={3}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h3" 
              align="left" 
              fontWeight={800}
              fontSize={{lg: 75, xl: 85}} 
              letterSpacing={-.5}
              lineHeight={{lg:1.6, xl:1.1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.35)",
              }}
            >
              My<br/>Projects
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: 10, width: 10, mr: "auto", mt: {xs: 1.5, md:2}, ml: .75, opacity: .95, boxShadow: 5}}></Box>
          </Box>
          <Box mt={{xs: 2, sm:4, md: 1, lg: 3, xl: 4}} ml={{lg: .5}}>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: {xs: 13, sm: 14, md: 13.5, lg:15, xl: 15.5},
                fontWeight: 300,
                opacity: .65,
                lineHeight: 1.4,
              }}
            >
              I mainly develop my projects using ReactJS or NextJS and with the implementation of the MERN stack. I use different JavaScript libraries and frameworks on my works to
              increase development efficiency and easier scalability.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={9}></Grid>
      </Grid>
    </Box>
  )
}

export default Projects