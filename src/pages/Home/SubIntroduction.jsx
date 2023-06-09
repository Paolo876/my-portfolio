import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SubIntroduction = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 2}, 
        pt: {xs:8, sm: 12, md: 14, lg: 30}, 
        pb: {xs:8, sm: 12, md: 12, lg: 8}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        // minHeight: "36vh", 
        maxWidth: "1500px", 
        mx: "auto"
      }}
    >
      <Grid item xs={0} sm={3} md={5} lg={5}></Grid>
      <Grid item xs={12} sm={9} md={7} lg={7} mt="auto">
        <Box align="right">
          <Typography 
            variant="h6" 
            sx={{
              fontWeight: 400, 
              fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 24}, 
              lineHeight: 1.4, 
              mixBlendMode: "difference", 
              opacity: .9,
              textTransform: "none",
              letterSpacing: .25
            }}
          >
            I design and develop websites from a 
            <Box component="span" fontWeight={500}> simple static page </Box> to a 
            <Box component="span" fontWeight={500}> complex dynamic web application </Box> using 
            <Box component="span" fontWeight={500} color="primary.light"> ReactJS </Box> <Box component="span" fontWeight={100} fontFamily="Noto Sans Lao"> | </Box> 
            <Box component="span" fontWeight={500} color="primary.light"> NextJS </Box> framework.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SubIntroduction