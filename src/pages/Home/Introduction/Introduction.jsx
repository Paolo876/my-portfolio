import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'


const Introduction = () => {
  return (
    <Grid container sx={{px: {xs:1.5, sm: 2, md: 3, lg: 4}, minHeight: {xs: "89vh", lg: "89vh", xl: "89vh"}, justifyContent: "center", alignItems: "center", maxWidth: "1500px", mx: "auto", pt: 8, pb: 3}}>
      <Grid item xs={12} md={12} lg={8} py={{xs:1, lg: 4}} mt={{xs: "auto"}} order={{xs: 2, lg: 1}}>
        <DescriptionGridItem/>
      </Grid>
      <Grid item xs={12} md={12} lg={4} mt={{xs: 3, sm:4}} mb="auto" order={{xs: 1, lg: 2}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: {xs: 220, sm: 280, md:300,lg:320, xl: 400}, 
            width: {xs: 220, sm: 280, md:300,lg:320, xl: 400}, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
            mt: {xs:2},
            ml:"auto",
            mr: {xs: 1, lg: 0}
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Introduction