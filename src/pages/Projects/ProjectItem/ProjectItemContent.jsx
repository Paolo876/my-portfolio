import { useState } from 'react'
import { Grid, Modal, Box, Divider } from '@mui/material'
import ProjectUrlAndTechStack from './ProjectUrlAndTechStack';
import ProjectFeatures from './ProjectFeatures';
import ProjectImages from './ProjectImages';
import ImageModal from './ImageModal';
import Footer from './Footer';
import ProjectIntroduction from './ProjectIntroduction';



const ProjectItemContent = ( { project, isShown }) => {
  const [ showModal, setShowModal ] = useState({isVisible: false, imageName: null});

  const handleImageClick = (imageName) => {
    setShowModal({ isVisible: true, imageName })
  }
  
  return (
    <Grid container>
    
      {/* introduction */}
      <Grid item xs={12}>
        <ProjectIntroduction title={project.title} description={project.description} logo={project.logo}/>
      </Grid>

      {/* url & tech stack */}
      <Grid item xs={12} sx={{mt: {xs: 4, sm: 15, md: 16, lg: 18, xl: 30}}}>
        <ProjectUrlAndTechStack technologies={project.technologies} url={project.url} githubUrl={project.githubUrl}/>
      </Grid>

      {/* Features */}
      <Grid item xs={12} sx={{mt: {xs: 10, sm: 12, md: 16, lg: 16, xl: 28}}}>
        <ProjectFeatures coverImage={project.coverImage} features={project.features} handleImageClick={handleImageClick}/>
      </Grid>

      {/* Images */}
      <Grid item xs={12} sx={{mt: {xs: 5, sm: 5, md: 7, lg: 8, xl: 10}, minHeight: "20em"}}>
        <ProjectImages images={project.images} handleImageClick={handleImageClick}/>
      </Grid>


      {/* Footer */}
      <Grid item xs={12} sx={{mt: {xs: 12, sm: 13, md: 16, lg: 18, xl: 20}}}>
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