import React from 'react'
import { Box, Tooltip, IconButton,  } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const SocialLinks = ({ buttonSize="large", iconSize={ xs: 18, sm: 20, md: 21, lg: 22 }, color="primary", gap=1, flexDirection="row", placement="bottom", mixBlendMode="difference", additionalStyles }) => {
  return (
    <Box sx={{display: "flex", gap, flexDirection, width: "100%"}}>
      <Tooltip title="Github" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://github.com/Paolo876" sx={{mixBlendMode, ...additionalStyles}} disableRipple>
          <GitHubIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.linkedin.com/in/paolo-bugarin/" sx={{mixBlendMode, ...additionalStyles}} disableRipple>
          <LinkedInIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.facebook.com/paolobugarin19/" sx={{mixBlendMode, ...additionalStyles}} disableRipple>
          <FacebookIcon sx={{fontSize: iconSize}} color={color}/>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default SocialLinks