import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'


const TechSkills = ({ skills, title }) => {
  return (
    <Box sx={{mb: 8}}>
      <Typography 
        variant="h4" 
        fontSize={{xs:23, sm: 24, md: 25, lg: 26, xl: 26}} 
        letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:2.5}} 
        lineHeight={{lg:1.6, xl:1.2}} 
        color="primary.main">{title}</Typography>
      <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", ml: .2, mt: {xs: 1.5, md:1.75}, mixBlendMode: "difference", opacity: .7}}></Box>
      <Grid container mt={2.5}>
          {skills.map(item => 
            <Grid item xs={1.35} key={item.name} align="center">
              <Box 
                sx={{
                  my: 1.75, 
                  userSelect: "none",
                }} 
              >
                <Box>
                  <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 70}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 70}}>
                    <SkillIconImageItem 
                      src={item.monoUrl} 
                      duration={800} 
                      objectFit='scale-down'
                      sx={{filter: "invert(1) brightness(2)"}}
                      />
                  </Box>                  
                  <Typography 
                    variant="body2" 
                    sx={{
                      mixBlendMode: "difference", 
                      opacity: .6,
                      fontSize: 11, 
                      fontWeight: 400, 
                      mt: 1.5,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >{item.name}</Typography>
                </Box>
              </Box>

            </Grid>
          )}
        </Grid>
    </Box>
  )
}

export default TechSkills