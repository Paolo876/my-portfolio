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
        <Typography sx={{fontWeight: 700, fontSize: {xs: 40, sm: 40, md: 45, lg:60, xl: 70}, letterSpacing: 3, lineHeight: 1.4}}>Hi!</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 22, sm: 24, md: 25, lg:40, xl: 45}, mixBlendMode: "difference"}}>I am </Typography>
        <Typography sx={{display: "inline", fontWeight: 800, fontSize: {xs: 38, sm: 53, md: 55, lg:70, xl: 85}, ml: 1, lineHeight: 1.25, letterSpacing: {xs:.15, md: 1}, fontFamily: "Manrope"}}>Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize:  {xs: 22, sm: 24, md: 25, lg:40, xl: 45}, mixBlendMode: "difference"}}>,</Typography>
      </Box>
      <Box mt={1}>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 17, sm: 23, md: 23, lg:25, xl: 30}, lineHeight: 1.4, mixBlendMode: "difference"}}>a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 700, fontSize: {xs: 20, sm: 24, md: 25, lg:27, xl: 36}, lineHeight: 1.4, fontFamily: "Manrope"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 17, sm: 23, md: 23, lg:25, xl: 30}, lineHeight: 1.4, mixBlendMode: "difference"}}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 700, fontSize: {xs: 20, sm: 24, md: 25, lg:27, xl: 36}, lineHeight: 1.4, fontFamily: "Manrope"}}>Los Angeles, California.<PlaceIcon fontSize="inherit" sx={{mixBlendMode: "difference", display: "inline"}}/></Typography>
      </Box>
      <Box mt={4}>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 15, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4, mixBlendMode: "difference"}}>I design and develop websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4}}>simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 15, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 22, md: 22, lg:23, xl: 26}, lineHeight: 1.4}}>complex dynamic web application.</Typography>
      </Box>
      <Box mt={{xs: 6, md: 10}} pb={3}>
        <Button 
          variant="outlined" 
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          size="large"
          sx={{fontWeight: 500}}
        >
          Read More About Me
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem