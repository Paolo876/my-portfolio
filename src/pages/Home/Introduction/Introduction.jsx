import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'


const Introduction = () => {
  return (
    <Grid container sx={{px: {xs:1, sm: 1.5, md: 2, lg:5}, minHeight: "88vh", justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", pt: 8}}>
      <Grid item xs={12} md={7} py={4} order={{xs: 2, md: 1}}>
        <DescriptionGridItem/>
      </Grid>
      <Grid item xs={12} md={2} mt={4} order={{xs: 1, md: 2}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: 200, 
            width: 200, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
            mt: 2,
            ml:"auto"
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Introduction