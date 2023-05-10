import { Box, Grid } from '@mui/material'
import ProjectItemDescription from './ProjectItemDescription'
import ProjectItemPreview from './ProjectItemPreview'

const ProjectItem = ({ item }) => {
  return (
    <Box sx={{minHeight: "60vh", position: "relative", pb: 2, px: 2, my: 3, width: "100%"}} id={item.name}>
        <Grid container sx={{width: "100%", justifyContent: "space-between"}}>
          <Grid 
            item xs={6} xl={4.75} 
            py={1} pr={1} 
          >
            <ProjectItemDescription 
              name={item.name}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              features={item.features}
              briefDescription={item.briefDescription}
            />
          </Grid>
          <Grid item xs={6} xl={7.25} sx={{height: "100%"}}>
            <ProjectItemPreview 
              coverImage={item.coverImage}
              images={item.images}
              url={item.url}  
              githubUrl={item.githubUrl}
              title={item.title}
              name={item.name}
              />
          </Grid>
        </Grid>
      </Box>
  )
}

export default ProjectItem