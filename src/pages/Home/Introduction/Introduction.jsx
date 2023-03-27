import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'
import DescriptionGridItem from './DescriptionGridItem'
import SocialLinks from '../../../components/SocialLinks'


const Introduction = () => {
  return (
    <Grid container sx={{px: 5, minHeight: "75vh", justifyContent: "center", alignItems: "center"}}>
      {/* <Grid item xs={1} sx={{height: "100%"}}>
        <Divider orientation="vertical" flexItem><SocialLinks iconSize="small" gap={0} buttonSize="medium" flexDirection="column" placement="left"/></Divider>
      </Grid> */}
      
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
            // transform: "translateY(50%)"
          }}>
          <Typography >image-here</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} py={4}>
        <DescriptionGridItem/>
      </Grid>
    </Grid>
  )
}

export default Introduction