import React from 'react'
import { Box, Grid } from '@mui/material'


const ProjectsShowcase = () => {

  return (

    <Box 
      sx={{
        height: "100%",
        position: "absolute",
        top: 0,
        // left: 0,
        transform: "translateX(25em)",
        // overflow: "hidden",
        py: {xs:8, sm: 10, md: 11, lg: 14, xl: 18},
        pl: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container gap={{xl:7}}>
        <Grid item sx={{height: 410, width: 360, border: 1, transform: "skewX(-7deg)"}}></Grid>
        <Grid item sx={{height: 410, width: 360, border: 1, transform: "skewX(-7deg)"}}></Grid>
        <Grid item sx={{height: 410, width: 360, border: 1, transform: "skewX(-7deg)"}}></Grid>
      </Grid>
    </Box>
  )
}

export default ProjectsShowcase