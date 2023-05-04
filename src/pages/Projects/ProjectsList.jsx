import React from 'react'
import { Grid } from '@mui/material'
import ProjectItem from './ProjectItem/ProjectItem'
import ProjectGridItem from './ProjectGridItem/ProjectGridItem'



const ProjectsList = ({ projects }) => {


  return (
    <Grid container sx={{pl: {md: 3, lg: 4, xl: 8}}}>
      {projects.map(item => <Grid item xs={12} md={6} lg={4}>
        <ProjectGridItem 
          name={item.name}
          title={item.title}
          briefDescription={item.briefDescription}
          description={item.description}
          technologies={item.technologies}
          type={item.type}
          features={item.features}
          url={item.url}
          githubUrl={item.githubUrl}
          images={item.images}
          coverImage={item.coverImage}
        />
      </Grid>)}
      {/* {projects.map(item => <ProjectItem key={item.name} item={item}/>)} */}
    </Grid>
  )
}

export default ProjectsList