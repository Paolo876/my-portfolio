import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsCarousel from './SkillsCarousel';

import { Grid, Box, Typography } from '@mui/material'


const Skills = () => {

  return (
    <Grid container sx={{py: {xs:8, sm: 9, md: 10, lg: 10, xl: 12}, justifyContent: {xs:"center", md: "space-between"}, alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={12} sx={{display: {xs: "initial", md: "none"}, mt: 2}}>
        <Box>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{lg: 85, xl: 88}} 
            letterSpacing={1}
            lineHeight={{lg:1.6, xl:1.1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >Technologies</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={7} lg={7}>
        <SkillsCarousel/>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <SkillsDescription/>
      </Grid>
    </Grid>
    
  )
}

export default Skills