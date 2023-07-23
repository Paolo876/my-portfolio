import React from 'react'
import { Box, Typography, Grid, Button, ButtonBase } from '@mui/material'
import Image from 'mui-image'
import ProjectUrlAndTechStack from './ProjectUrlAndTechStack';


const ProjectItemContent = ( { project }) => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 70}} 
          letterSpacing={{xs: .5, xL:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          {project.title}
        </Typography>
      </Grid>

      {/* description */}
      <Grid item xs={12} sx={{mt: {xl: 5}}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:15, xl: 17},
            fontWeight: 300,
            opacity: .55,
            letterSpacing: .25,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          }}        
        >
          {project.description}
        </Typography>
      </Grid>

      {/* url & tech stack */}
      <Grid item xl={12} sx={{mt: {xl: 5}}}>
        <ProjectUrlAndTechStack technologies={project.technologies}/>
      </Grid>

    </Grid>
  )
}

export default ProjectItemContent