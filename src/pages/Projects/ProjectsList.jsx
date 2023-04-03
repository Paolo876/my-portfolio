import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import ProjectItemDescription from './ProjectItemDescription'
import ProjectItemPreview from './ProjectItemPreview'




const ProjectsList = ({ projects }) => {
  return (
    <Stack>
      {projects.map(item => <Box key={item.name} sx={{minHeight: "50vh", mb: 5}}>
        <Grid container>
          <Grid item xs={7} p={1}>
            <ProjectItemDescription 
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              features={item.features}
            />
          </Grid>
          <Grid item xs={5}>
            <ProjectItemPreview 
              coverImage={item.coverImage}
              images={item.images}
              url={item.url}  
              githubUrl={item.githubUrl}
              />
          </Grid>
        </Grid>
      </Box>)}

    </Stack>
  )
}

export default ProjectsList