import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import ProjectItemDescription from './ProjectItemDescription'




const ProjectsList = ({ projects }) => {
  return (
    <Stack>
      {projects.map(item => <Box key={item.name} sx={{minHeight: "50vh", mb: 5}}>
        <Grid container>
          <Grid item xs={7} p={1}>
            <ProjectItemDescription item={item}/>
          </Grid>
          <Grid item xs={5} sx={{border: 1}}></Grid>
        </Grid>
      </Box>)}

    </Stack>
  )
}

export default ProjectsList