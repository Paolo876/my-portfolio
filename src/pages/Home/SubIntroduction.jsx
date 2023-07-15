import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SubIntroduction = () => {
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 12, md: 14, lg: 30}, 
        pb: {xs:6, sm: 6, md: 8, lg: 8},       
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container 
        sx={{
          maxWidth: "1500px", 
          mx: "auto"
        }}
      >
        <Grid item xs={12} mt="auto">
          <Box align="right">
            <Typography 
              variant="h6" 
              sx={{
                fontWeight: 300, 
                fontSize: {xs: 12.5, sm: 19, md: 20, lg:23, xl: 25}, 
                lineHeight: 1.4, 
                opacity: .9,
                textTransform: "none",
                letterSpacing: {xs: .05, sm:.15},
                textShadow: "1px 1px 3px rgba(100,100,100,.25)",
              }}
            >
              I design and develop websites from a 
              <Box component="span" fontWeight={500}> simple static page </Box> to a<br/>
              <Box component="span" fontWeight={500}> complex dynamic web application</Box>.
              {/* I design and develop websites from a 
              <Box component="span" fontWeight={500}> simple static page </Box> to a 
              <Box component="span" fontWeight={500}> complex dynamic web application </Box> with 
              <Box component="span" fontWeight={500} color="primary.light"> ReactJS </Box> <Box component="span" fontWeight={100} fontFamily="Noto Sans Lao"> | </Box> 
              <Box component="span" fontWeight={500} color="primary.light"> NextJS </Box> framework. */}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SubIntroduction