import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack pr={{xs: 0, lg: 4, xl: 3}}>
      <Box>
        <Typography sx={{fontWeight: 700, fontSize: {xs: 32, sm: 40, md: 45, lg:60, xl: 70}, letterSpacing: 3, lineHeight: 1.4}}>Hi!</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 21, sm: 24, md: 25, lg:40, xl: 45}, mixBlendMode: "difference"}}>I am </Typography>
        <Typography sx={{display: "inline", fontWeight: 800, fontSize: {xs: 39, sm: 53, md: 55, lg:70, xl: 85}, ml: {xs:0, sm:1}, lineHeight: 1.25, letterSpacing: {xs:.1, md: 1}, fontFamily: "Manrope"}}>Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize:  {xs: 21, sm: 24, md: 25, lg:40, xl: 45}, mixBlendMode: "difference"}}>,</Typography>
      </Box>
      <Box mt={{xs: 1, lg: 1}}>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 17.5, sm: 23, md: 23, lg:25, xl: 30}, lineHeight: 1.4, mixBlendMode: "difference"}}>a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 700, fontSize: {xs: 22, sm: 24, md: 25, lg:27, xl: 36}, lineHeight: 1.4, fontFamily: "Manrope"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 17.5, sm: 23, md: 23, lg:25, xl: 30}, lineHeight: 1.4, mixBlendMode: "difference"}}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 700, fontSize: {xs: 22, sm: 24, md: 25, lg:27, xl: 36}, lineHeight: 1.2, fontFamily: "Manrope"}}>Los Angeles, California.<PlaceIcon fontSize="inherit" sx={{mixBlendMode: "difference", display: "inline"}}/></Typography>
      </Box>
      <Box mt={{xs: 2, lg: 4}}>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 16.5, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4, mixBlendMode: "difference"}}>I design and develop websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 16.5, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4}}>simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 16.5, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 16.5, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4}}>complex dynamic web application.</Typography>
      </Box>
      <Box mt={{xs: 5, md: 10}} pb={2}>
        <Button 
          variant="outlined" 
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          sx={{fontWeight: 500, fontSize: {xs: 11, sm: 13, md: 14, lg: 16}}}
        >
          Read More About Me
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem