import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Tooltip } from '@mui/material'
import useProjectsRedux from "../../../hooks/useProjectsRedux"


const ProjectsCarousel = () => {
  return (
    <Box ml={{lg:4, xl:8}} mt={{xl: 8}}>
      <Carousel
        indicators={true}
        interval={8000}
        duration={800} 
        navButtonsAlwaysInvisible={true}
      >
        <Grid container>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xl={4}>
            <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 300}} sx={{border: 1}}>
            </Box>
          </Grid>
        </Grid>

      </Carousel>
    </Box>
  )
}

export default ProjectsCarousel