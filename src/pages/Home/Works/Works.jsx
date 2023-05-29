import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Works = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{
        position: "relative", 
        px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3}, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 12}
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(170,170,170,.75)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", overflowX:"auto", overflowY: "hidden", px: {md: 0,lg:3}}}>
        <Grid item xs={12} md={12} lg={3}>
          <Box sx={{display: {xs: "none", lg: "initial"}}}>
            <Typography 
              variant="h4" 
              align="left" 
              fontWeight={800}
              fontSize={{lg: 45, xl: 60}} 
              letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:5}} 
              lineHeight={{lg:1.6, xl:1.1}} 
              color="primary.main"
            >
              My<br/>Projects
            </Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "12px", width: "12px", mr: "auto", mt: {xs: 1.5, md:2}, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>
          </Box>
          <Box mt={{xs: 2, sm:4, md: 1, lg: 3, xl: 4}}>
            <Typography variant="body1" fontSize={{xs: 13, sm: 14, md: 13.5, lg:15, xl: 15}} fontWeight={300} sx={{textAlign: "justify", textJustify: "inter-word", opacity: .8}}>
              I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. A part of my knowledge is also gained from self-studying through online courses, tutorials, and being a member of different coding groups.
            </Typography>
            
          </Box>
          <Box mt={{xs:5, md: 6, lg: 5}} mb={{xs:2, md: 4}} ml={{md: "auto"}}>
            <Button 
              variant="outlined" 
              color="primary"
              endIcon={<KeyboardArrowRightIcon color="inherit"/>}
              onClick={() => navigate("/projects")}
              sx={{fontWeight: 500, letterSpacing: 1.5, fontSize: {xs: 11, sm: 12, md: 14, lg: 15, xl: 16}}}
            >
              Explore My Works
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={9} pl={{md:0, lg:2, xl: 4}}>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Works