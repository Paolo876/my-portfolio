import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'
import SocialLinks from '../../../components/SocialLinks'


const Introduction = () => {
  return (
    <Grid container sx={{px: 5, minHeight: "85vh", justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto"}}>
      <Grid item xs={12} md={7.5} py={4} order={{xs: 2, md: 1}}>
        <DescriptionGridItem/>
      </Grid>
      <Grid item xs={12} md={2} pt={4} order={{xs: 1, md: 2}}>
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