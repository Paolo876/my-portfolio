import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const MobileNavigation = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box>
        <IconButton size="small" sx={{p:0}} disableRipple>
          <ArrowBackIosNewIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
        </IconButton>
      </Box>
      <Box>
        
      </Box>
      <Box>
        <IconButton size="small" sx={{p:0}} disableRipple>
          <ArrowForwardIosIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default MobileNavigation