import { useState } from 'react'
import { Typography, Grid, Modal, Box } from '@mui/material'
import ProjectUrlAndTechStack from './ProjectUrlAndTechStack';
import ProjectFeatures from './ProjectFeatures';
import ProjectImages from './ProjectImages';
import ImageModal from './ImageModal';


const ProjectItemContent = ( { project }) => {
  const [ showModal, setShowModal ] = useState({isVisible: false, imageName: null});

  const handleImageClick = (imageName) => {
    setShowModal({ isVisible: false, imageName })
  }
  

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
      <Grid item xs={12} sx={{mt: {xl: 6}}}>
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
      <Grid item xl={12} sx={{mt: {xl: 10}}}>
        <ProjectUrlAndTechStack technologies={project.technologies} url={project.url} githubUrl={project.githubUrl}/>
      </Grid>

      {/* Features */}
      <Grid item xl={12} sx={{mt: {xl: 16}}}>
        <ProjectFeatures coverImage={project.coverImage} features={project.features} handleImageClick={handleImageClick}/>
      </Grid>

      {/* Images */}
      <Grid item xl={12} sx={{mt: {xl: 10}}}>
        <ProjectImages images={project.images} handleImageClick={handleImageClick}/>
      </Grid>

      {/* image Modal */}
      <Modal open={showModal.isVisible} onClose={() => setShowModal({isVisible: false, imageName: null})}>
        <Box>
          <ImageModal imageName={showModal.imageName} imagesList={[ project.coverImage, ...project.images ]}/>
        </Box>
      </Modal>
    </Grid>
  )
}

export default ProjectItemContent