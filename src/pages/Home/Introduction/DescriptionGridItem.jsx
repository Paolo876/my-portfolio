import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <Stack pr={1.25}>
      <Box>
        <Typography sx={{fontWeight: 700, fontSize: 60, letterSpacing: 2}}>Hi!</Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 30, mixBlendMode: "difference"}}>My name is </Typography>
        <Typography sx={{display: "inline", fontWeight: 600, fontSize: 70, ml: 1, lineHeight: 1.25}}>Paolo Bugarin</Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 30, ml: .25}}>.</Typography>
      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 25, mixBlendMode: "difference"}}>I am a  </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 30, mixBlendMode: "difference"}}>Full Stack Web Developer </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 25, mixBlendMode: "difference"}}>based in </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 30, lineHeight: 1}}>Los Angeles, California.<PlaceIcon fontSize="inherit" sx={{mixBlendMode: "difference"}}/></Typography>
      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 21, mixBlendMode: "difference"}}>I design and develop websites from a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 24, mixBlendMode: "difference"}}>simple static page </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 21, mixBlendMode: "difference"}}>to a </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 24, mixBlendMode: "difference"}}>complex dynamic web application.</Typography>
      </Box>
      {/* <Box mt={1}>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 17, mixBlendMode: "difference"}}>I mainly develop my projects using </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 17, mixBlendMode: "difference"}}>ReactJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 17, mixBlendMode: "difference"}}>or </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 17, mixBlendMode: "difference"}}>NextJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 17, mixBlendMode: "difference"}}>in the Client-Side, and </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 17, mixBlendMode: "difference"}}>NodeJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 17, mixBlendMode: "difference"}}>and </Typography>
        <Typography sx={{display: "inline", fontWeight: 400, fontSize: 17, mixBlendMode: "difference"}}>ExpressJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 200, fontSize: 17, mixBlendMode: "difference"}}>in the Server-Side along with related libraries and frameworks.</Typography>

      </Box> */}
      <Box mt={4}>
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          size="large"
        >
          More About Me
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionGridItem