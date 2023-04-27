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
    <Stack px={{xs: .5, md: 1.25}} align="right">
      <Box sx={{mb: 5}}>
        <Typography variant="h4" fontSize={{lg: 26, xl: 30}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main">Technologies</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: "auto", mt: {xs: 1, md:1}, mr: .5, mixBlendMode: "difference", opacity: .75}}></Box>

      </Box>
      <Box>
        <Typography variant="body1" fontSize={{md: 14, lg:15, xl: 16}} fontWeight={300} sx={{textAlign: "right", textJustify: "inter-word", opacity: .8}}>
          I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. A part of my knowledge is also gained from self-studying through online courses and tutorials, and being a part of coding groups.
        </Typography>
        {/* <Typography sx={baseTextStyles}>I studied </Typography>
        <Typography sx={medTextStyles}>Computer Information Systems </Typography>
        <Typography sx={baseTextStyles}>major in </Typography>
        <Typography sx={medTextStyles}>Web Development and Software Development </Typography>
        <Typography sx={baseTextStyles}>at Pasadena City College. A part of my knowledge is also gained from  </Typography>
        <Typography sx={medTextStyles}>self-studying </Typography>
        <Typography sx={baseTextStyles}>through </Typography>
        <Typography sx={medTextStyles}>online courses and tutorials,  </Typography>
        <Typography sx={baseTextStyles}>and being a part of </Typography>
        <Typography sx={medTextStyles}>coding groups.</Typography> */}
      </Box>
      {/* <Box mt={{xs:.5, md: 1.5}}>
        <Typography sx={baseTextStyles}>I mainly develop my projects using </Typography>
        <Typography sx={medTextStyles}>ReactJS </Typography>
        <Typography sx={baseTextStyles}>or </Typography>
        <Typography sx={medTextStyles}>NextJS </Typography>
        <Typography sx={baseTextStyles}>in the Client-Side, and </Typography>
        <Typography sx={medTextStyles}>NodeJS </Typography>
        <Typography sx={baseTextStyles}>and </Typography>
        <Typography sx={medTextStyles}>ExpressJS </Typography>
        <Typography sx={baseTextStyles}>in the Server-Side along with related libraries and frameworks.</Typography>
      </Box> */}
      <Box mt={{xs:5, md: 8}} mb={{xs:2, md: 4}} >
        <Button 
          variant="outlined" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/projects")}
          sx={{fontWeight: 500, letterSpacing: 1.5, fontSize: {xs: 13, sm: 14, md: 15, lg: 16}}}
        >
          Explore My Works
        </Button>
      </Box>
    </Stack>
  )
}

export default SkillsDescription