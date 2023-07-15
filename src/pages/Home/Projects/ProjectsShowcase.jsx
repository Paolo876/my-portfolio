import React from 'react'
import { Box, Grid } from '@mui/material'


const previewBoxStyles = {
  height: {lg: 360, xl:410}, 
  width: {lg: 310, xl: 360}, 
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
        transform: {lg: "translateX(24em)", xl: "translateX(28em)"},
        py: {xs:8, sm: 10, md: 11, lg: 14, xl: 18},
        pl: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container gap={{lg: 5, xl:7}}>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
      </Grid>
    </Box>
  )
}

export default ProjectsShowcase