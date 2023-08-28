import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const MobileNavigation = ({ projects, currentProjectName }) => {
  const navigate = useNavigate();
  const currentProjectIdx = projects.findIndex(item => item.name === currentProjectName)

  console.log(currentProjectIdx)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box>
        <IconButton size="small" sx={{p:0, opacity: currentProjectIdx === 0 ? .25 : 1}} disableRipple disabled={currentProjectIdx === 0} onClick={() => console.log("prev")}>
          <ArrowBackIosNewIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
        </IconButton>
      </Box>
      <Box>
        <Typography>
          moby
        </Typography>
      </Box>
      <Box>
        <IconButton size="small" sx={{p:0, opacity: currentProjectIdx === 0 ? .25 : 1}} disableRipple disabled={currentProjectIdx === projects.length - 1} onClick={() => console.log("next")}>
          <ArrowForwardIosIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default MobileNavigation