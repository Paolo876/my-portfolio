import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'


const TechSkills = ({ skills, title, description, isMain }) => {
  return (
    <Grid container mb={{xs: 4.5, sm: 10, md: 10, lg: 10, xl: 15}}>
      <Grid item xs={11} sm={4.5} md={2.75} lg={3} xl={2.75} mb={{xs: 1.5, sm: 3, md: 0}}>
        <Box mb={2} mt={{sm: .5, md:1}}>
          <Typography 
            variant="h4" 
            fontSize={{xs:23, sm: 28, md: 25, lg: 26, xl: 29}} 
            letterSpacing={{xs:4, sm:1.2, md:1.5, lg:1.5, xl:2.75}} 
            lineHeight={1.2} 
            color="primary.main"
          >
            {title}
          </Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mt: {xs: 1, md:1, lg: 1.5}, ml: .5, mixBlendMode: "difference", opacity: .35}}></Box>
        </Box>
        {isMain && <Box pr={{sm: 0, md: 1.5, xl:1.5}}>
          {description} 
        </Box>}
      </Grid>

      <Grid item xs={12} sm={7.5} md={9.25} lg={9} xl={9.25}>

        <Grid container justifyContent={{xs: "right", md: "right"}} pl={{md: 8, lg: 10, xl: 15}}>
          {!isMain && 
            <Grid item xs={12} md={6} pr={{md: 5, lg: 6, xl: 10}} pl={{sm: 6, md: 0, lg: 1, xl: 2}} mt={{sm: 1, md: 2}} mb={{xs: 1, sm: 3, md: 0}} > 
              <Box>
                {description}
              </Box>
            </Grid>
          }
          
          {skills.map(item => 
            <Grid item xs={2.4} sm={2.7} md={1.5} lg={1.5} key={item.name} align="center">
              <Box 
                sx={{
                  my: {xs: 1.15, md:1.75}, 
                  userSelect: "none",
                }} 
              >
                <Box>
                  <Box height={{xs: 34, sm: 40, md:45, lg:60, xl: 62}} width={{xs: 34, sm: 40, md:45, lg:60, xl: 62}}>
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
                      opacity: .4,
                      fontSize: {xs: 10, sm: 11, md: 11, lg: 11}, 
                      fontWeight: 300, 
                      mt: {xs: 1, sm:1.5},
                      textTransform: "uppercase",
                      letterSpacing: { sm: .2, md: 0.5, lg: 2 },
                    }}
                  >{item.name}</Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TechSkills