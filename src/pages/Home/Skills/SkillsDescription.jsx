import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const SkillsDescription = () => {
  const navigate = useNavigate();


  return (
    <Stack p={1.25} mt={2}>
      <Box>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>I studied </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>Computer Information Systems </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>major in </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>Web Development and Software Development </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>at Pasadena City College. </Typography>
      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>A big part of my development knowledge is also gained from </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>self-studying </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>through various </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>online courses </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>and being a part of </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>coding groups.</Typography>
      </Box>
      <Box mt={1.5}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>I mainly develop my projects using </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>ReactJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>or </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>NextJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>in the Client-Side, and </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>NodeJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>and </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>ExpressJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 18.25, opacity: .95, lineHeight: 1.75}}>in the Server-Side along with related libraries and frameworks.</Typography>
      </Box>
      <Box mt={8} mb={4} spacing={3}>
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/projects")}
          size="large"
          sx={{fontWeight: 500, letterSpacing: 1.5}}
        >
          Explore My Projects
        </Button>
      </Box>
    </Stack>
  )
}

export default SkillsDescription