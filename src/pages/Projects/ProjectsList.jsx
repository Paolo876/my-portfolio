import React from 'react'
import { Grid } from '@mui/material'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'



const ProjectsList = ({ projects }) => {

  return (
    <Grid container sx={{pl: {md: 1, lg: 8, xl: 13}, pr: { md: 1, lg:0}, pt: {sm: 3, lg:0}}}>
      {projects.map(item => <ProjectItem key={item.name} item={item}/>)}
    </Grid>
  )
}

export default ProjectsList