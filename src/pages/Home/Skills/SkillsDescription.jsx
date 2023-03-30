import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const SkillsDescription = () => {
  const navigate = useNavigate();


  return (
    <Stack p={1.25} mt={2}>
      <Box>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>I studied </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>Computer Information Systems </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>major in </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>Web Development and Software Development </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>at Pasadena City College. </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>A big part of my development knowledge is also gained from </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>self-studying </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>through various </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>online courses </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>and being a part of </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>coding groups.</Typography>
      </Box>
      <Box mt={2}>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>I mainly develop my projects using </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>ReactJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>or </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>NextJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>in the Client-Side, and </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>NodeJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>and </Typography>
        <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, opacity: .95, lineHeight: 1.9}}>ExpressJS </Typography>
        <Typography sx={{display: "inline", fontWeight: 100, fontSize: 20, opacity: .85, lineHeight: 1.9}}>in the Server-Side along with related libraries and frameworks.</Typography>
      </Box>
      <Box mt={6} mb={4} spacing={3}>
        <Button 
          variant="outlined" 
          color="secondary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/projects")}
          size="large"
        >
          See My Projects
        </Button>
      </Box>
    </Stack>
  )
}

export default SkillsDescription