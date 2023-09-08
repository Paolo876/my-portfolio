import React from 'react'
import { Box, Grid, Fade } from '@mui/material'
import { keyframes } from '@mui/system';


const previewBoxStyles = {
  height: {xs: 155, sm: 230, md: 290, lg: 360, xl:410}, 
  width: {xs: 110, sm: 180, md: 240, lg: 310, xl: 360}, 
  border: 1, 
  transform: "skewX(-7deg)",
}

const ProjectsShowcase = () => {

  return (

    <Box 
      sx={{
        height: "100%",
        position: "absolute",
        top: 0,
        right: {xs: 0, md: "initial"},
        transform: {xs: "translateX(2em)", md: "translateX(23em)", lg: "translateX(29em)", xl: "translateX(38em)"},
        pt: {xs:10, sm: 10, md: 11, lg: 14, xl: 18},
        pb: {xs:0, sm: 0, md: 11, lg: 14, xl: 18},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container gap={{xs: 1.5, sm: 3, md: 4, lg: 5, xl:7}}>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
      </Grid>
    </Box>
  )
}

export default ProjectsShowcase