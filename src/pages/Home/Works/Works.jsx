import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Works = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{position: "relative", height: 350}}>
      <Box sx={{position: "absolute", top: 0, left: 0, width: "35%", height: "100%"}}>
        <Box sx={{position: "relative", height: "100%", width: "100%"}}>
          <Box sx={{position: "absolute", top: 0, left: 0, background: "rgba(180,180,180,1)", width: "100%", height: "100%", mixBlendMode: "overlay"}}></Box>
          <Stack alignItems="flex-end" justifyContent="center" sx={{height: "90%"}} pr={8}>
          <Typography 
            variant="h2" 
            fontWeight={800} 
            fontSize={{xs:32, sm: 32, md: 42, lg: 40, xl: 65}} 
            letterSpacing={{xs:2, sm:2, md: 2, lg: 2, xl:3.5}} 
            lineHeight={1.15} 
            sx={{opacity: .8}}
            
          >
            Explore<br/>My Works
          </Typography>
        </Stack>
        </Box>
      </Box>
      <Box sx={{position: "absolute", top: 0, right: 0, background: "rgba(0,0,0,.5)", height: "100%", width: "65%", mixBlendMode: "overlay", zIndex: -1, overflow: "hidden", whiteSpace: "nowrap"}}>
        <Box sx={{position: "relative", height: "100%", width: "100%", transform: "translateX(-200px)"}}>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block", background: "red"}}>
          </Box>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block", background: "blue"}}>
          </Box>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block", background: "yellow"}}>
          </Box>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block", background: "green"}}>
          </Box>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block", background: "orange"}}>
          </Box>
          <Box sx={{border: 1, height: 250, width: 400, display: "inline-block"}}>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Works