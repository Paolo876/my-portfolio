import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'


const Introduction = () => {
  return (
    <>
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
            fontSize: "7rem",
            lineHeight: .95,
          }}
          >My<br/> Projects</Typography>
      </Box>
      <Box sx={{px: 4, my: 8, mixBlendMode: "difference"}}>
        <Box sx={{background: "white", height: "4px", width: "20px", my: 2}}></Box>
        <Typography variant="body1" mb={4} fontWeight={200} fontSize={17} letterSpacing={.25} lineHeight={1.75}>
          Listed are my published projects that I still continue to develop and improve over time. 
          Please feel free to check out the demo or git repository of my projects and let me know if you have any remarks or suggestions.
        </Typography>
        <Divider flexItem><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="row"/></Divider>
      </Box>
    </>
  )
}

export default Introduction