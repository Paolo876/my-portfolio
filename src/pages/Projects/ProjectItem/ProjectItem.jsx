import { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import ProjectItemDescription from './ProjectItemDescription'
import ProjectItemPreview from './ProjectItemPreview'
import useProjectsRedux from '../../../hooks/useProjectsRedux'
import { useInView } from 'react-intersection-observer';

const ProjectItem = ({ item }) => {
  const { setCurrentInView } = useProjectsRedux();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-30% 0% -60% 0%',
    onChange: inView => {
      if(inView) setCurrentInView(item.name)
    }
  });
   
  
  return (
    <Box sx={{minHeight: "60vh", position: "relative", py: 2, px: 2, my: 3}} id={item.name}>
        {/* {inView && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200, .25)", mixBlendMode: "overlay"}}></Box>} */}
        <Grid container>
          <Grid item xs={6} py={1} pr={2} ref={ref}>
            <ProjectItemDescription 
              name={item.name}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              features={item.features}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectItemPreview 
              coverImage={item.coverImage}
              images={item.images}
              url={item.url}  
              githubUrl={item.githubUrl}
              />
          </Grid>
        </Grid>
      </Box>
  )
}

export default ProjectItem