import React from 'react'
import { Box, Grid } from '@mui/material'


const previewBoxStyles = {
  height: {sm: 230, md: 290, lg: 360, xl:410}, 
  width: {sm: 180, md: 240, lg: 310, xl: 360}, 
  border: 1, 
  transform: "skewX(-7deg)",
}

const ProjectsShowcase = () => {

  return (

    <Box 
      sx={{
        height: "100%",
        // width: "120%",
        position: "absolute",
        // overflow: "hidden",
        top: 0,
        right: {sm: 0, md: "initial"},
        transform: {sm: "translateX(2em)", md: "translateX(23em)", lg: "translateX(29em)", xl: "translateX(38em)"},
        pt: {xs:8, sm: 10, md: 11, lg: 14, xl: 18},
        pb: {xs:0, sm: 0, md: 11, lg: 14, xl: 18},
        // pl: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container gap={{sm: 3, md: 4, lg: 5, xl:7}}>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
        <Grid item sx={previewBoxStyles}></Grid>
      </Grid>
    </Box>
  )
}

export default ProjectsShowcase