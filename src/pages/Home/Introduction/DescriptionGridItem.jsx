import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack >
      <Box sx={{opacity: 1}}>
        {/* <Typography sx={{fontWeight: 700, fontSize: {xs: 32, sm: 40, md: 45, lg:60, xl: 70}, letterSpacing: 3, lineHeight: 1.4}}>Hi!</Typography> */}
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 21, sm: 26, md: 25, lg:42, xl: 45}, mixBlendMode: "difference"}}>I am </Typography>
        <Typography sx={{display: "inline", fontWeight: 800, fontSize: {xs: 39, sm: 55, md: 55, lg:75, xl: 75}, ml: {xs:0, sm:1}, lineHeight: 1.25, letterSpacing: {xs:.1, md: 1}, fontFamily: "Manrope"}} color="primary.main">Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize:  {xs: 21, sm: 26, md: 25, lg:42, xl: 45}, mixBlendMode: "difference"}}>,</Typography>
      </Box>
      <Box sx={{mixBlendMode: "difference", opacity:.9, mt: 2}}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 17.5, sm: 21, md: 23, lg:21, xl: 21}, lineHeight: 1.2, }}>a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 22, sm: 23, md: 25, lg:23, xl: 24}, lineHeight: 1.2, fontFamily: "Manrope"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 17.5, sm: 21, md: 23, lg:21, xl: 21}, lineHeight: 1.2, }}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 22, sm: 23, md: 25, lg:23, xl: 24}, lineHeight: 1.2, fontFamily: "Manrope"}}>Los Angeles, California.</Typography>
      </Box>
      {/* <Box mt={{xs:2, md: 4}}>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4, mixBlendMode: "difference"}}>I specialize in designing and developing websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4}} >simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4}} >complex dynamic web application </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.6, mixBlendMode: "difference"}}> using </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4}} color="secondary.light"> ReactJS</Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 19, sm: 24, md: 26, lg:28, xl: 30}, lineHeight: 1.6, mixBlendMode: "difference"}}>||</Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4}} color="secondary.light">NextJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: {xs: 15, sm: 20, md: 22, lg:20, xl: 22}, lineHeight: 1.4, mixBlendMode: "difference"}}>framework.</Typography>
      </Box> */}
      <Box mt={{xs: 4, md: 6, lg: 6}}>
        <Button 
          variant="outlined" 
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          sx={{fontSize: {xs: 13, sm: 14, md: 15, lg: 16}, letterSpacing: 1.75}}
        >
          About
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem