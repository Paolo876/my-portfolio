import { useState } from 'react'
import { Typography, Grid, Modal, Box, Divider } from '@mui/material'
import ProjectUrlAndTechStack from './ProjectUrlAndTechStack';
import ProjectFeatures from './ProjectFeatures';
import ProjectImages from './ProjectImages';
import ImageModal from './ImageModal';
import Footer from './Footer';
import Image from 'mui-image';

const ProjectItemContent = ( { project }) => {
  const [ showModal, setShowModal ] = useState({isVisible: false, imageName: null});

  const handleImageClick = (imageName) => {
    setShowModal({ isVisible: true, imageName })
  }
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid 
        container
          sx={{
            justifyContent: "space-between", 
            alignItems: "flex-start", 
          }}
        >
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

          <Grid item lg={5} xl={5} sx={{mt: {lg: 6, xl: 6}}}>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: {xs: 10, sm: 13, md: 14, lg:14, xl: 15},
                fontWeight: 300,
                fontWeight: 300,
                opacity: .5,
                letterSpacing: .25,
                lineHeight: 1.4,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                borderLeft: 2,
                pl: 1.25,
                borderColor: "primary.dark"
              }}        
            >
              {project.description}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} xl={3}>
            <Box sx={{height: "auto", width: "auto", maxWidth: 300, maxHeight: 300, ml: "auto"}}>
              <Image src={project.logo} fit='cover'/>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* url & tech stack */}
      <Grid item xl={12} sx={{mt: {lg: 22, xl: 30}}}>
        <ProjectUrlAndTechStack technologies={project.technologies} url={project.url} githubUrl={project.githubUrl}/>
      </Grid>

      {/* Features */}
      <Grid item xl={12} sx={{mt: {xl: 28}}}>
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