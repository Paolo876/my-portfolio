import { useState } from 'react';
import Image from 'mui-image';
import Carousel from 'react-material-ui-carousel';
import ProjectImageModal from './ProjectImageModal';

import { Stack, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';


const ProjectItemPreview = ({ coverImage, images, url, githubUrl }) => {
  const [ showModal, setShowModal ] = useState({ isVisible: false, data: null, currentIndex: 0 });

  const imagesList = [coverImage, ...images ];

  return (
    <Carousel 
      indicators={false}
      navButtonsAlwaysInvisible={true}
    >
      {imagesList.map((item, index) => <Box 
        key={index} 
        sx={{height: "100%", width: "auto", cursor: "pointer", position: "relative"}} 
        onClick={() => setShowModal({ isVisible: true, data: imagesList, currentIndex: index })}
        >
          <Box sx={{position: "absolute", top: 0, left: 0, zIndex: 2}}>{index}</Box> 
          <Image 
            src={item.url} 
            fit="cover"
            duration={800}
          />
        </Box>
      )}
    </Carousel>
  )
}

export default ProjectItemPreview


// https://github.com/Learus/react-material-ui-carousel
// https://www.npmjs.com/package/react-intersection-observer <--intersection npm
// https://stackoverflow.com/questions/54807535/intersection-observer-api-observe-the-center-of-the-viewport  <-- if element is intersecting center of viewport
