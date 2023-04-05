import React from 'react'
import { Stack } from '@mui/material'
import ProjectItem from './ProjectItem/ProjectItem'




const ProjectsList = ({ projects, setCurrentActiveProject }) => {
  return (
    <Stack>
      {projects.map(item => <ProjectItem key={item.name} item={item} setCurrentActiveProject={setCurrentActiveProject}/>)}
    </Stack>
  )
}

export default ProjectsList