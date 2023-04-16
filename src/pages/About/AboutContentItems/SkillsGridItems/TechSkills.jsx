import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'


const TechSkills = ({ skills, title }) => {
  return (
    <Box sx={{mb: 12}}>
      <Typography variant="h5" sx={{mixBlendMode: "difference"}} fontSize="1.3rem" fontWeight={700} letterSpacing={4}>{title}</Typography>
      <Box sx={{background: "white", height: "4px", width: "10px", mb: 5, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>
      <Grid container>
          {skills.map(item => 
            <Grid item xs={1.1} key={item.name} align="center">
              <Paper 
                sx={{
                  py: 2.75, 
                  my: 1.5, 
                  width: "110px",
                  userSelect: "none",
                }} 
                elevation={4}               
              >
                <Box>
                  <SkillIconImageItem src={item.url} height="60px" width="60px" duration={800} objectFit='scale-down'/>
                  <Typography 
                    variant="body2" 
                    sx={{
                      mixBlendMode: "difference", 
                      fontSize: 13, 
                      fontWeight: 500, 
                      mt: 3,
                    }}
                    color="secondary.light"
                  >{item.name}</Typography>
                </Box>
              </Paper>

            </Grid>
          )}
        </Grid>
    </Box>
  )
}

export default TechSkills