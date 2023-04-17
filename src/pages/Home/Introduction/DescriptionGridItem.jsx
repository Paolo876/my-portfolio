import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Box>
        <Typography sx={{fontWeight: 700, fontSize: 65, letterSpacing: 5}}>Hi!</Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 30, mixBlendMode: "difference"}}>I am </Typography>
        <Typography sx={{display: "inline", fontWeight: 800, fontSize: 70, ml: 1, lineHeight: 1.25, letterSpacing: 3, fontFamily: "Manrope"}}>Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 30, mixBlendMode: "difference"}}>,</Typography>

      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 28, mixBlendMode: "difference"}}>a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 600, fontSize: 32, fontFamily: "Manrope"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 28, mixBlendMode: "difference"}}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 600, fontSize: 32, lineHeight: 1, fontFamily: "Manrope"}}>Los Angeles, California.<PlaceIcon fontSize="inherit" sx={{mixBlendMode: "difference"}}/></Typography>
      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 26, mixBlendMode: "difference"}}>I design and develop websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 28}}>simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 26, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 28}}>complex dynamic web application.</Typography>
      </Box>
      <Box mt={10}>
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