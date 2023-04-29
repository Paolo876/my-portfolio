import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack >
      <Box sx={{opacity: 1}}>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: {xs: 20, sm: 22, md: 30, lg:36, xl: 45}, mixBlendMode: "difference"}}>I am </Typography>
        <Typography sx={{display: "inline", fontWeight: 800, fontSize: {xs: 37, sm: 50, md: 56, lg:62, xl: 75}, ml: {xs:.25, sm:1}, lineHeight: 1.25, letterSpacing: {xs:.5, md: 1}, fontFamily: "Manrope"}} color="primary.main">Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize:  {xs: 20, sm: 22, md: 30, lg:36, xl: 45}, mixBlendMode: "difference"}}>,</Typography>
      </Box>
      <Box sx={{mixBlendMode: "difference", opacity:.9, mt: {sm:1, md:1.25, lg: 2}}}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 15, sm: 15.5, md: 17, lg:18, xl: 21}, lineHeight: 1.2, }}>a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 15.5, md: 18, lg:20, xl: 24}, lineHeight: 1.2, fontFamily: "Manrope"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 15, sm: 15.5, md: 17, lg:18, xl: 21}, lineHeight: 1.2, }}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 15, sm: 15.5, md: 18, lg:20, xl: 24}, lineHeight: 1.2, fontFamily: "Manrope"}}>Los Angeles, California.</Typography>
      </Box>
      <Box mt={{xs: 2.5, sm: 4, md: 6, lg: 5, xl: 6}}>
        <Button 
          variant="outlined" 
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          sx={{fontSize: {xs: 11, sm: 12, md: 14, lg: 15, xl: 16}, letterSpacing: 1.75}}
        >
          About
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem