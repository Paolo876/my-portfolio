import React from 'react'
import { Stack } from '@mui/material'
import ProjectItem from './ProjectItem/ProjectItem'



const ProjectsList = ({ projects }) => {


  return (
    <Stack>
      {projects.map(item => <ProjectItem key={item.name} item={item}/>)}
    </Stack>
  )
}

export default ProjectsList