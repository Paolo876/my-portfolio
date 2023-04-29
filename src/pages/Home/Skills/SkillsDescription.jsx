import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const baseTextStyles = {
  display: "inline", 
  fontWeight: 200, 
  fontSize: {xs: 15, sm: 15, md: 16, lg: 16}, 
  lineHeight: {xs: 1.4, md: 1.7}
}

const medTextStyles = {
  display: "inline", 
  fontWeight: 300, 
  fontSize: {xs: 15.5, sm: 15.5, md: 16.5, lg: 16.5}, 
  lineHeight: {xs: 1.4, md: 1.7}
}
const SkillsDescription = () => {
  const navigate = useNavigate();


  return (
    <Stack pl={{xs: 3, sm: 3, md: 2, lg: 3.5, xl: 5}} pr={{xs:3, sm: 3, md: 2, lg: 3}}>
      <Box sx={{mb: 4, display: {xs: "none", md: "initial"}}}>
        <Typography variant="h4" fontSize={{md: 28, lg: 30, xl: 35}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main" align="right">Technologies</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: "auto", mt: {xs: 1, md:1}, mr: .5, mixBlendMode: "difference", opacity: .75}}></Box>

      </Box>
      <Box mt={{xs: 2, sm:4, md: 0}}>
        <Typography variant="body1" fontSize={{xs: 13, sm: 14, md: 13.5, lg:15, xl: 16.5}} fontWeight={300} sx={{textAlign: {xs: "justify", md:"right"}, textJustify: "inter-word", opacity: .8}}>
          I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. A part of my knowledge is also gained from self-studying through online courses, tutorials, and being a member of different coding groups.
        </Typography>
      </Box>
      <Box mt={{xs:5, md: 6, lg: 8}} mb={{xs:2, md: 4}} ml={{md: "auto"}}>
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
    </Stack>
  )
}

export default SkillsDescription