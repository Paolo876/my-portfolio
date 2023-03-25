import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack px={1}>
      <Box>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18, mixBlendMode: "difference"}}>I am</Typography>
        <Typography sx={{display: "inline", fontWeight: 600, fontSize: 40, ml: 1, lineHeight: 1.25}}>Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, ml: .25}}>, </Typography>
      </Box>
      <Box mt={.25}>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 17, mixBlendMode: "difference"}}>a Full Stack Web Developer based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 25, lineHeight: 1}}>Los Angeles, California.<PlaceIcon fontSize="inherit"/></Typography>
      </Box>
      <Box>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 15, mixBlendMode: "difference"}}>I design and develop websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 15, mixBlendMode: "difference"}}>simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 15, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 15, mixBlendMode: "difference"}}>complex dynamic web application.</Typography>
      </Box>
      <Box sx={{mt:2, display: "flex", alignItems: "center", justifyContent: "", gap:1}}>
        <Button 
          variant="outlined" 
          sx={{mixBlendMode: "difference", fontWeight: 400}} 
          color="inherit" 
          endIcon={<KeyboardArrowRightIcon color="primary"/>}
          onClick={() => navigate("/about")}
        >
          Read More About Me
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem