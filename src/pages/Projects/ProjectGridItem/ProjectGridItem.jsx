import React from 'react'
import { Box, Typography, ButtonBase, Paper, Button, Grid, Stack } from '@mui/material'
import Image from 'mui-image';
import "./ProjectGridItem.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageCarousel from './ImageCarousel';

const ProjectGridItem = ({ name, title, briefDescription, description, technologies, type, features, url, githubUrl, images, coverImage, backgroundColor}) => {

  return (
    <Paper 
      variant="outlined" 
      className='project-grid-item'
      sx={{
        // m:{xs: 1.5, md: 1.5, lg:1.25}, 
        height: 320,
        borderRadius: 0,
        m:0,
        border: 0,
      }} 
    >
      <Box className="project-item-overlay-container">
        <Grid container className="grid-container">
          <Grid item xs={5.5} sx={{px: 1.25, py: 2}}>
            <Stack sx={{height: "100%"}}>
              <Box sx={{position: "relative"}}>
                <Typography variant="h6" color="primary.main" lineHeight={1} fontSize={{md: 20.5, lg:21, xl:26}} fontWeight={800}>{title}</Typography>
                <Box sx={{background: "rgba(239,235,229,1)", height: 2, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: 1.5, mb: 2, ml: .2, mixBlendMode: "difference", opacity: .65}}></Box>
              </Box>
              <Box sx={{pr:1, pl:.5}}>
                <Typography 
                  variant="body2" 
                  fontSize={{xs: 12.5, sm: 13, md: 13, lg:13, xl: 14}} 
                  fontWeight={200} 
                  lineHeight={{lg: 1.4, xl:1.55}}
                  sx={{mixBlendMode: "difference", opacity: .8}}
                >
                  {briefDescription}
                </Typography>
              </Box>
              <Box mt="auto" mb={2}>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="primary"
                  sx={{fontWeight: 500, fontSize: {xs: 11, sm: 12, md: 12, lg: 13, xl: 13}, px: 2}}
                  >More Info
                  <ArrowForwardIosIcon sx={{fontSize: "inherit", ml: 1.25}}/>  
                </Button>
              </Box>

            </Stack>
          </Grid>
          <Grid item xs={6.5}>
            {/* carousel here */}
            <ImageCarousel imagesList={[coverImage, ...images]}/>
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