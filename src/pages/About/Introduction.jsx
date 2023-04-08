import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'


const Introduction = () => {
  return (
    <Box sx={{minHeight: "55vh" }}>
      <Box                
        sx={{
          opacity: .9, 
          mixBlendMode: "difference", 
        }}
        >
        <Typography 
          variant="h1" 
          sx={{
            textTransform: "none",
            fontWeight: 800,
            fontSize: "7.25rem",
            lineHeight: .95,
          }}
          >Paolo Bugarin</Typography>
      </Box>
      <Box sx={{px: 4, my: 8, mixBlendMode: "difference"}}>
        <Box sx={{background: "white", height: "4px", width: "20px", my: 2}}></Box>
        <Typography variant="body1" mb={4} fontWeight={200} fontSize={18} letterSpacing={.5} lineHeight={1.75}>
          I am a <Box fontWeight={400} display='inline'>Full Stack Web Developer</Box> based in <Box fontWeight={400} display='inline'>Los Angeles, California.</Box> I design and develop websites from
          a <Box fontWeight={400} display='inline'>simple static page</Box> to a <Box fontWeight={400} display='inline'>complex dynamic web application.</Box> 
        </Typography>
        <Divider flexItem><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="row"/></Divider>
      </Box>
    </Box>
  )
}

export default Introduction