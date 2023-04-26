import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'


const Introduction = () => {
  return (
    <Grid container sx={{px: {xs:1.5, sm: 2, md: 3, lg: 4}, minHeight: "88vh", justifyContent: "center", alignItems: "center", maxWidth: "1500px", mx: "auto", pt: 8}}>
      <Grid item xs={12} md={9} lg={8} py={{xs:1, lg: 4}} mt={{xs: "auto", md: 0}} order={{xs: 2, md: 1}}>
        <DescriptionGridItem/>
      </Grid>
      <Grid item xs={12} md={3} lg={4} mt={{xs: .5, sm:4}} order={{xs: 1, md: 2}}>
        <Box 
          sx={{
            border: 3, 
            borderRadius: "50%", 
            height: {xs: 160, sm: 200}, 
            width: {xs: 160, sm: 200}, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            mixBlendMode: "difference", 
            mt: {xs: 0, sm:2},
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