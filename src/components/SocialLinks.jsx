import React from 'react'
import { Box, Tooltip, IconButton,  } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SocialLinks = ({ buttonSize="large", iconSize="medium", color="primary", gap=1, flexDirection="row", placement="bottom" }) => {
  return (
    <Box sx={{display: "flex", gap, flexDirection}}>
      <Tooltip title="Github" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://github.com/Paolo876" sx={{mixBlendMode: "difference"}}>
          <GitHubIcon fontSize={iconSize} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.linkedin.com/in/paolo-bugarin/" sx={{mixBlendMode: "difference"}}>
          <LinkedInIcon fontSize={iconSize} color={color}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook" arrow enterDelay={500} placement={placement}>
        <IconButton size={buttonSize} target="_blank" href="https://www.facebook.com/paolobugarin19/" sx={{mixBlendMode: "difference"}}>
          <FacebookIcon fontSize={iconSize} color={color}/>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default SocialLinks