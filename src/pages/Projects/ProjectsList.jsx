import React from 'react'
import { Typography, Box, Grid, Stack, Divider } from '@mui/material'




const ProjectsList = ({ projects }) => {
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
            <Typography 
              variant="body1" 
              sx={{
                mt: 2,
                px: .5,
                fontWeight: 300,
                lineHeight: 1.65,
                mixBlendMode: "difference"
              }}  
            >{item.description}</Typography>
          </Grid>
          <Grid item xs={6} sx={{border: 1}}></Grid>
        </Grid>
      </Box>)}

    </Stack>
  )
}

export default ProjectsList