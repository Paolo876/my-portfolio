import { useState } from 'react';
import Image from 'mui-image';
import Carousel from 'react-material-ui-carousel';
import ProjectImageModal from './ProjectImageModal';

import { Stack, Button, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import "./ProjectItemPreview.scss";

const ProjectItemPreview = ({ coverImage, images, url, githubUrl, title }) => {
  const [ showModal, setShowModal ] = useState({ isVisible: false, data: null, currentIndex: 0 });

  const imagesList = [coverImage, ...images ];

  return (
  <Box className="project-item-preview">
    <Box className="project-item-overlay-container" sx={{p: 2}}>
      <Stack className="project-item-content" sx={{border: 2, alignItems: "center", justifyContent: "center", px: "15%"}}>
        <Box>
          <Button variant="outlined" color="secondary" size="large">
          Read More About {title}
            {/* <Typography 
              variant="body1" 
              fontSize={{xs: 12, sm: 12.5, md: 13, lg:14, xl: 16}} 
              fontWeight={600} 
              p={.75}
            >
              Read More About {title}
            </Typography> */}
          </Button>
        </Box>
        <Box sx={{background: "rgba(239,235,229,1)", height: 2, width: "30%", mx: "auto", my: 4,  mixBlendMode: "difference", opacity: .25}}></Box>

        <Box sx={{display: "flex", gap: 3}}>
          <Button variant="contained" startIcon={<PublicIcon/>} color="primary" size="small" sx={{fontWeight: 500}}>
            Web Demo
          </Button>
          <Button variant="outlined" startIcon={<GitHubIcon/>} color="primary" size="small" sx={{fontWeight: 500}}>
            Git Repo
          </Button>
        </Box>
      </Stack>
    </Box>
    <Carousel 
      indicators={false}
      navButtonsAlwaysInvisible={true}
      autoPlay={true}
      stopAutoPlayOnHover={false}
    >
      {imagesList.map((item, index) => 
          <Image 
            src={item.url} 
            fit="cover"
            duration={800}
            sx={{filter: "brightness(.95)"}}
          />
      )}
    </Carousel>
  </Box>  
  )
}

export default ProjectItemPreview


// https://github.com/Learus/react-material-ui-carousel
// https://www.npmjs.com/package/react-intersection-observer <--intersection npm
// https://stackoverflow.com/questions/54807535/intersection-observer-api-observe-the-center-of-the-viewport  <-- if element is intersecting center of viewport
