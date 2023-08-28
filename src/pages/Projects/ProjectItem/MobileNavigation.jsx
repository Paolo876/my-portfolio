import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const textStyles = {
  fontSize: {xs: 11.5, sm: 12, md: 12.5, lg:13},
  fontWeight: 800,
  opacity: .85,
  letterSpacing: .25,
  lineHeight: 1.4,
  textShadow: "1px 1px 5px rgba(100,100,100,.25)",
  px: {xs: .5, sm: .75, md:1},
  color: "primary.dark",
}

const MobileNavigation = ({ projects, currentProjectName }) => {
  const navigate = useNavigate();
  const currentProjectIdx = projects.findIndex(item => item.name === currentProjectName)
  const prevProject = projects[currentProjectIdx - 1]
  const nextProject = projects[currentProjectIdx + 1]


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box>
        <IconButton 
          size="small" 
          sx={{
            p:0, 
            opacity: currentProjectIdx <= 0 ? .25 : 1,
          }}
          disableRipple 
          disabled={currentProjectIdx <= 0} 
          onClick={() => navigate(`/projects/${prevProject.name}`)}
        >
          <ArrowBackIosNewIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
          {prevProject && 
            <Typography variant="body2" sx={textStyles}>
              {prevProject.title}
            </Typography>
          }
        </IconButton>
      </Box>
      <Box>
        <IconButton 
          size="small" 
          sx={{
            p:0, 
            opacity: currentProjectIdx >= projects.length -1 ? .25 : 1,
          }}
          disableRipple 
          disabled={currentProjectIdx >= projects.length -1} 
          onClick={() => navigate(`/projects/${nextProject.name}`)}
        >
          {nextProject && 
            <Typography variant="body2" sx={textStyles}>
              {nextProject.title}
            </Typography>
          }
          <ArrowForwardIosIcon sx={{fontSize: {xs: 13, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.25))"}}} color="primary"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default MobileNavigation