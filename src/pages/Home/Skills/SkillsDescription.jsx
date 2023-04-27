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
  fontWeight: 400, 
  fontSize: {xs: 15.5, sm: 15.5, md: 16.5, lg: 16.5}, 
  lineHeight: {xs: 1.4, md: 1.7}
}
const SkillsDescription = () => {
  const navigate = useNavigate();


  return (
    <Stack px={{xs: .5, md: 1.25}} align="right">
      <Box sx={{mb: 4}}>
        <Typography variant="h5">My Skills</Typography>
      </Box>
      <Box>
        <Typography sx={baseTextStyles}>I studied </Typography>
        <Typography sx={medTextStyles}>Computer Information Systems </Typography>
        <Typography sx={baseTextStyles}>major in </Typography>
        <Typography sx={medTextStyles}>Web Development and Software Development </Typography>
        <Typography sx={baseTextStyles}>at Pasadena City College and a part of my knowledge is also gained from  </Typography>
        <Typography sx={medTextStyles}>self-studying </Typography>
        <Typography sx={baseTextStyles}>through </Typography>
        <Typography sx={medTextStyles}>online courses and tutorials,  </Typography>
        <Typography sx={baseTextStyles}>and being a part of </Typography>
        <Typography sx={medTextStyles}>coding groups.</Typography>
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
          variant="contained" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/projects")}
          sx={{fontWeight: 500, letterSpacing: 1.5, fontSize: {xs: 13, sm: 14, md: 15, lg: 16}}}
        >
          Explore My Projects
        </Button>
      </Box>
    </Stack>
  )
}

export default SkillsDescription