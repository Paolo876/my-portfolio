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
                lineHeight: .9
              }}
            >{item.title}</Typography>
            <Divider/>

          </Grid>
          <Grid item xs={6} sx={{border: 1}}></Grid>
        </Grid>
      </Box>)}

    </Stack>
  )
}

export default ProjectsList