import React from 'react'
import { Box, Typography, ButtonBase, Paper, Button, Grid } from '@mui/material'
import Image from 'mui-image';
import "./ProjectGridItem.scss"

const ProjectGridItem = ({ name, title, briefDescription, description, technologies, type, features, url, githubUrl, images, coverImage, backgroundColor}) => {
  console.log(briefDescription)

  return (
    <Paper variant="outlined" sx={{m:2.5, height: 320}} className='project-grid-item'>
      <Grid container className="grid-container">
        <Grid item>
          <Box sx={{p: 1.1}} className="description">
            <Box sx={{width: "100%", height: "100%", border: 2, p: 1.25}}>
              <Box sx={{position: "relative"}}>
                <Typography variant="h6" color="primary.main" lineHeight={1} fontSize={26} fontWeight={800} mb={2}>{title}</Typography>
                <Typography variant="body2" fontSize={{xs: 12, sm: 12.5, md: 13, lg:13, xl: 13}} fontWeight={300} sx={{mixBlendMode: "difference", opacity: .85}}>{briefDescription}..</Typography>
              </Box>
              <Box>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="primary"
                  sx={{fontWeight: 500, fontSize: {xs: 11, sm: 12, md: 12, lg: 13, xl: 13}}}
                  >More Info</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          {/* carousel here */}
        </Grid>
      </Grid>


      {/* absolute pos */}
      <Box className="cover-image">
        <Image 
          src={coverImage.url} 
          fit="cover"
          duration={400}
        />
      </Box>
    </Paper>
  )
}

export default ProjectGridItem