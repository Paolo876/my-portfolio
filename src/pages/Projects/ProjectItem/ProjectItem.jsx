import { Box, Grid } from '@mui/material'
import ProjectItemDescription from './ProjectItemDescription'
import ProjectItemPreview from './ProjectItemPreview'

const ProjectItem = ({ item }) => {
  return (
    <Box sx={{position: "relative", pb: {xs: 6, sm: 14, md: 22, lg:25}, px: {md:2}, my: 3, width: "100%"}} id={item.name}>
        <Grid container sx={{width: "100%", justifyContent: "space-between"}}>
          <Grid 
            item xs={12} sm={4.75} md={5} lg={4.75}
            py={1} pr={1} 
            order={{xs: 2, sm: 1}}
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
          <Grid item xs={12} sm={7.25} md={7} lg={7.25} sx={{height: "100%", my: "auto"}} order={{xs: 1, sm: 2}}>
            <ProjectItemPreview 
              coverImage={item.coverImage}
              images={item.images}
              url={item.url}  
              githubUrl={item.githubUrl}
              title={item.title}
              name={item.name}
              logo={item.logo}
              palette={item.palette}
              />
          </Grid>
        </Grid>
      </Box>
  )
}

export default ProjectItem