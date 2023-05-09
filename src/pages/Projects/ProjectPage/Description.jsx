import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'

const Description = ({ title, description, technologies, type, url, githubUrl }) => {
  return (
    <Grid container sx={{pl: {md: 4, lg: 0}, pr: {md: 4, lg: 0}}}>
      <Grid item xs={12} sm={4.5} md={4} lg={12}>
        <Typography 
          variant="h1" 
          align="left" 
          fontWeight={800} 
          fontSize={{xs:32, sm: 35, md: 43, lg: 45, xl: 45}} 
          letterSpacing={{xs:2, sm:3, md: 2, lg: 2.5, xl:3.5}} 
          lineHeight={{xl:1}} 
          color="primary.main"
        >
         {title}
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 10}, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: {xs: 1.25, sm: 1.5, md:3}, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>
      </Grid>
      <Grid item xs={12} sm={6.5} md={7} lg={12} mt={{xs: 3, sm: 3, md:5}} ml={{sm:2, md: 0}}>
        <Typography 
          variant="body1" 
          fontSize={{xs: 12, sm: 12.5, md: 13, lg:14, xl: 15}} 
          fontWeight={200} 
          sx={{textAlign: "justify", textJustify: "inter-word", mixBlendMode: "difference"}}
        >
        {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Description