import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsCarousel from './SkillsCarousel';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Grid container sx={{py: {xs:8, sm: 9, md: 10, lg: 10, xl: 12}, justifyContent: {xs:"center", md: "space-between"}, alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={12} sx={{display: {xs: "initial", md: "none"}, mt: 2}}>
        <Box>
          <Typography variant="h4" align="center" fontSize={{xs:25, sm: 28, md: 30}} letterSpacing={{xs:2, sm:3, md:3.5}} lineHeight={{xl:1.3}} color="primary.main">Technologies</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "3px", width: "12px", mx: "auto", mt: {xs: 1.5, md:2}, mb:{xs: 4, sm: 4, md:7}, mixBlendMode: "difference", opacity: .7}}></Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <SkillsCarousel/>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <SkillsDescription/>
      </Grid>
    </Grid>
    
  )
}

export default Skills