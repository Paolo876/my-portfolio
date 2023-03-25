import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlaceIcon from '@mui/icons-material/Place';


const DescriptionGridItem = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Box>
          <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18, mixBlendMode: "difference"}}>I am</Typography>
          <Typography sx={{display: "inline", fontWeight: 600, fontSize: 40, ml: 1, lineHeight: 1.25}}>Paolo Bugarin</Typography>
          <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, ml: .25}}>, </Typography>
        </Box>
        <Box mt={.25}>
          <Typography sx={{display: "inline", fontWeight: 300, fontSize: 17, mixBlendMode: "difference"}}>a Full Stack Web Developer based in </Typography>
          <Typography sx={{display: "inline", fontWeight: 400, fontSize: 25, lineHeight: 1}}>Los Angeles, California.<PlaceIcon fontSize="inherit"/></Typography>
        </Box>
        {/* <Typography fontSize={14.5} mt={.5}>I design and develop websites from a simple static page to a complex dynamic web application.</Typography> */}
        {/* <Typography fontSize={15} mt={.5} lineHeight={1.75}>
          I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College.
          A big part of my development knowledge also came from self-studying through varieties of online courses and being a part of coding groups.
        </Typography> */}
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
    </>
  )
}

export default DescriptionGridItem