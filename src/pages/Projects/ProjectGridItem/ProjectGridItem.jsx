import React from 'react'
import { Box, Typography, ButtonBase } from '@mui/material'
const ProjectGridItem = ({ name, title, briefDescription, description, technologies, type, features, url, githubUrl, images, coverImage, backgroundColor}) => {
  console.log(briefDescription)

  return (
    <Box sx={{border: 1, height: 300, m:.5}}>
      <Box sx={{width: "100%", height: "100%", position: "relative"}}>
          <Box sx={{background: backgroundColor, p: 1}}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" fontSize={{xs: 12, sm: 12.5, md: 13, lg:14, xl: 13}} fontWeight={300} >{briefDescription}</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default ProjectGridItem