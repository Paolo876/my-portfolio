import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'


const TechSkills = ({ skills, title}) => {
  return (
    <Box sx={{mb: 10}}>
      <Typography variant="h5" sx={{mixBlendMode: "difference"}} fontSize="1.20rem">{title}</Typography>
      <Box sx={{background: "white", height: "4px", width: "10px", mb: 4, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>
      <Grid container>
          {skills.map(item => 
            <Grid item xs={1.1} key={item.name} align="center">
              <Paper 
                sx={{
                  py: 2.5, 
                  my: 1.5, 
                  width: "100px",
                  // height: "125px",
                  userSelect: "none",
                  // opacity: .95,  
                }} 
                elevation={4}
                variant="outlined"
                
              >
                <Box>
                  <SkillIconImageItem src={item.url} height="50px" width="50px" duration={800} objectFit='scale-down'/>
                  <Typography 
                    variant="body2" 
                    sx={{
                      mixBlendMode: "difference", 
                      fontSize: 12, 
                      fontWeight: 500, 
                      mt: 2.5,
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