import { useState } from 'react'
import { Typography, Grid, Modal, Box, Divider } from '@mui/material'
import ProjectUrlAndTechStack from './ProjectUrlAndTechStack';
import ProjectFeatures from './ProjectFeatures';
import ProjectImages from './ProjectImages';
import ImageModal from './ImageModal';
import Footer from './Footer';


const ProjectItemContent = ( { project }) => {
  const [ showModal, setShowModal ] = useState({isVisible: false, imageName: null});

  const handleImageClick = (imageName) => {
    setShowModal({ isVisible: true, imageName })
  }
  

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 34, sm: 58, md: 60, lg: 55, xl: 65}} 
          letterSpacing={{xs: .5, xl:1}}
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
      <Grid item xs={12} xl={11} sx={{mt: {xl: 8}}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 10, sm: 13, md: 14, lg:14, xl: 15},
            fontWeight: 300,
            fontWeight: 300,
            opacity: .5,
            letterSpacing: .25,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          }}        
        >
          {project.description}
        </Typography>
      </Grid>

      {/* url & tech stack */}
      <Grid item xl={12} sx={{mt: {xl: 15}}}>
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


      {/* Footer */}
      <Grid item xl={12} sx={{mt: {xl: 20}}}>
        <Divider/>
        <Footer/>
      </Grid>


      {/* image Modal */}
      <Modal open={showModal.isVisible} onClose={() => setShowModal({isVisible: false, imageName: null})}>
        <Box>
          <ImageModal imageName={showModal.imageName} imagesList={[ project.coverImage, ...project.images ]} handleClose={() => setShowModal({isVisible: false, imageName: null})} setShowModal={setShowModal}/>
        </Box>
      </Modal>
    </Grid>
  )
}

export default ProjectItemContent