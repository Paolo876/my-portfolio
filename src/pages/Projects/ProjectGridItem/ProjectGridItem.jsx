import React from 'react'
import { Box, Typography, ButtonBase } from '@mui/material'
const ProjectGridItem = ({ name, title, briefDescription, description, technologies, type, features, url, githubUrl, images, coverImage}) => {
  console.log(briefDescription)

  return (
    <Box sx={{border: 1, height: 300, m:.5}}>
      <Box sx={{width: "100%", height: "100%", position: "relative"}}>
          <Box sx={{background: "red"}}>
            <Typography>{title}</Typography>
            <Typography>{briefDescription}</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default ProjectGridItem