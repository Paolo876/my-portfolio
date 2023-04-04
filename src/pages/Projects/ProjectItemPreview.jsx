import { useState } from 'react'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'
import ImageModal from '../../components/ImageModal'

import { ButtonBase, Stack, Button, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

import testImage from "../../assets/test_proj_img.png"


const ProjectItemPreview = ({ coverImage, images, url, githubUrl }) => {
  const [ showModal, setShowModal ] = useState({ isVisible: false, data: null });

  const imagesList = [coverImage, ...images ]
  return (
    <Stack sx={{height: "100%"}}>
      <Carousel 
        indicators={true}
        navButtonsAlwaysInvisible={true}
      >
        {imagesList.map((item, index) => <Box key={index} sx={{height: "auto", cursor: "pointer", position: "relative"}} onClick={() => setShowModal({ isVisible: true, data: item })}>
          <Box sx={{position: "absolute", top: 0, left: 0, zIndex: 2}}>{index}</Box> 
          <Image 
              src={item.url} 
              // height={height}
              // width={width}
              
              fit="scale-down"
              duration={800}
              // bgColor={bgColor}
              // sx={{filter: "grayscale(10%) contrast(90%)", "&:hover": {filter:"none"}}}
            />
        </Box>)}
        {/* <Box sx={{height: "auto", cursor: "pointer"}} onClick={() => setShowModal({ isVisible: true, data: null })}>
          <Image 
            src={testImage} 
            // height={height}
            // width={width}
            
            fit="scale-down"
            duration={800}
            // bgColor={bgColor}
            // sx={{filter: "grayscale(10%) contrast(90%)", "&:hover": {filter:"none"}}}
          />
        </Box> */}
      </Carousel>
      <Box mt={5} mb={1}>
        <Button color="secondary" variant="contained" sx={{mx: 1, letterSpacing: .15}} size="large" startIcon={<PublicIcon/>}>Demo</Button>

        <Button color="secondary" variant="outlined" sx={{mx: 1, letterSpacing: .15}} size="large" startIcon={<GitHubIcon/>}>Git Repo</Button>
      </Box>
      <ImageModal open={showModal.isVisible} handleClose={() => setShowModal({ isVisible: false, data: null })} data={showModal.data}/>
    </Stack>
  )
}

export default ProjectItemPreview


// https://github.com/Learus/react-material-ui-carousel