import React from 'react'
import { Typography, Box, Grid, Stack, Divider, Paper, Tooltip } from '@mui/material'
import SkillIconImageItem from '../../components/SkillIconImageItem'


const boxStyles = {
  display: "flex", 
  flexDirection: "row", 
  alignItems: "center", 
  justifyContent: "center",
  p: 1.1,
  userSelect: "none",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden"
}


const ProjectsList = ({ projects, skillsList }) => {


  return (
    <Stack>
      {projects.map(item => <Box key={item.name} sx={{height: "50vh"}}>
        <Grid container>
          <Grid item xs={6} px={1}>
            <Typography 
              variant="h3" 
              sx={{
                fontWeight: 800,
                mixBlendMode: "difference",
                textTransform: "none",
                letterSpacing: .5,
                lineHeight: 1
              }}
            >{item.title}</Typography>
            <Divider/>
            <Box sx={{px: .5}}>
              <Typography 
                variant="body1" 
                sx={{
                  mt: 2,
                  fontWeight: 300,
                  lineHeight: 1.55,
                  mixBlendMode: "difference"
                }}  
              >{item.description}</Typography>
              <Box sx={{mt: 2}}>
                <Typography              
                  variant="h6" 
                  sx={{
                    fontWeight: 600,
                    fontSize: 18,
                    mixBlendMode: "difference",
                    textTransform: "none",
                    letterSpacing: .5,
                  }}>Technologies used: </Typography>
                  <Box sx={{display: "flex", flexDirection: "row", gap: 1.5, px: 1, mt: 1}}>
                    {item.technologies.map(item => {
                      const tech = skillsList.find(_item => _item.name === item)
                      if(tech) return <Tooltip title={<Typography variant="body2" fontWeight={300} fontSize={13} lineHeight={1.25}>{tech.name}</Typography>}  arrow>
                        <Paper sx={boxStyles} variant="outlined">
                          <Box>
                            <SkillIconImageItem src={tech.url} height="25px" width="25px" duration={500} objectFit='scale-down'/>
                          </Box>
                        </Paper>
                      </Tooltip>
                    })}
                  </Box>
              </Box>

            </Box>
          </Grid>
          <Grid item xs={6} sx={{border: 1}}></Grid>
        </Grid>
      </Box>)}

    </Stack>
  )
}

export default ProjectsList