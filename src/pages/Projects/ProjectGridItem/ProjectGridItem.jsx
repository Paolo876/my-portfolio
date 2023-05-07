import React from 'react'
import { Box, Typography, ButtonBase, Paper, Button, Grid } from '@mui/material'
import Image from 'mui-image';
import "./ProjectGridItem.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectGridItem = ({ name, title, briefDescription, description, technologies, type, features, url, githubUrl, images, coverImage, backgroundColor}) => {
  console.log(briefDescription)

  return (
    <Paper variant="outlined" sx={{m:2.5, height: 320}} className='project-grid-item'>
      <Box className="project-item-overlay-container" sx={{p: 1.1}}>
        <Grid container className="grid-container" sx={{border: 2, p: 1}}>
          <Grid item xs={6}>
            <Box sx={{position: "relative"}}>
              <Typography variant="h6" color="primary.main" lineHeight={1} fontSize={26} fontWeight={800}>{title}</Typography>
              <Box sx={{background: "rgba(239,235,229,1)", height: 2, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: 1.5, mb: 2, ml: .2, mixBlendMode: "difference", opacity: .65}}></Box>
            </Box>
            <Box sx={{pr:1, pl:.5}}>
              <Typography 
                variant="body2" 
                fontSize={{xs: 12.5, sm: 13, md: 13, lg:13, xl: 14}} 
                fontWeight={200} 
                lineHeight={1.55}
                sx={{mixBlendMode: "difference", opacity: .85}}
              >
                {briefDescription}
              </Typography>
            </Box>
            <Box mt={4}>
              <Button 
                variant="outlined" 
                size="small" 
                color="primary"
                sx={{fontWeight: 500, fontSize: {xs: 11, sm: 12, md: 12, lg: 13, xl: 13}}}
                >More Info
                <ArrowForwardIosIcon sx={{fontSize: "inherit", ml: 1.25}}/>  
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {/* carousel here */}
            <Box sx={{width: "100%", height: "100%", border: 1}}>
            </Box>
          </Grid>
        </Grid>
      </Box>


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