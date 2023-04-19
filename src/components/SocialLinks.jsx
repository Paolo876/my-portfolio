import React from 'react'
import { Box, Tooltip, IconButton,  } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SocialLinks = ({ buttonSize="large", iconSize={ xs: 20, sm: 24, lg: 25, xl: 26 }, color="primary", gap=1, flexDirection="row", placement="bottom", mixBlendMode="difference" }) => {
  return (
    <Box sx={{display: "flex", gap, flexDirection, width: "100%"}}>
      <Tooltip title="Github" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://github.com/Paolo876" sx={{mixBlendMode}} disableTouchRipple>
          <GitHubIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.linkedin.com/in/paolo-bugarin/" sx={{mixBlendMode}} disableTouchRipple>
          <LinkedInIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.facebook.com/paolobugarin19/" sx={{mixBlendMode}} disableTouchRipple>
          <FacebookIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default SocialLinks