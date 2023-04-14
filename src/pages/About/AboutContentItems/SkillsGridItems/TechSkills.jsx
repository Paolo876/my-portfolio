import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'

const boxStyles = {
  py: 2.5, 
  my: 1.5, 
  width: "90px",
  height: "120px",
  userSelect: "none",
  opacity: .95,  
}

const textStyles = {
  mixBlendMode: "difference", 
  fontSize: 11.5, 
  fontWeight: 300, 
  mt: 1,
}


const TechSkills = ({ skills, title}) => {
  return (
    <Box>
      <Typography variant="h5" sx={{mixBlendMode: "difference"}} fontSize="1.25rem">{title}</Typography>
      <Box sx={{background: "white", height: "4px", width: "10px", mb: 6, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>
      <Grid container>
          {skills.map(item => 
            <Grid item xs={1} key={item.name} align="center">
              <Paper 
                sx={{
                  py: 2.5, 
                  my: 1.5, 
                  width: "90px",
                  height: "120px",
                  userSelect: "none",
                  opacity: .95,  
                  }} 
                elevation={2}
              >
                <Box>
                  <SkillIconImageItem src={item.url} height="50px" width="50px" duration={800} objectFit='scale-down'/>
                  <Typography variant="body2" sx={textStyles}>{item.name}</Typography>
                </Box>
              </Paper>

            </Grid>
          )}
        </Grid>
    </Box>
  )
}

export default TechSkills