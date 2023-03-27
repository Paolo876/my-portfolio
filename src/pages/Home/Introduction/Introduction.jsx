import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'

const Introduction = () => {
  return (
    <Grid container sx={{px: 5, pt: "5%", height: "80vh", justifyContent: "center", alignItems: "flex-start"}}>
        <Grid item xs={12} md={2} pt={4}>
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
              transform: "translateY(50%)"
            }}>
            <Typography >image-here</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} pt={4}>
          <DescriptionGridItem/>
        </Grid>
    </Grid>
  )
}

export default Introduction