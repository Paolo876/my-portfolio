import { useState } from 'react'
import testImage from "../../assets/test_proj_img.png"
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'

import { ButtonBase, Stack, Button, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';


const ProjectItemPreview = ({ coverImage, images, url, githubUrl }) => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <Stack sx={{height: "100%"}}>
      <Carousel 
        indicators={true}
        navButtonsAlwaysInvisible={true}
        >
        
        <Box sx={{height: "auto"}}>
          <Image 
            src={testImage} 
            // height={height}
            // width={width}
            
            fit="scale-down"
            duration={800}
            // bgColor={bgColor}
            // sx={{filter: "grayscale(10%) contrast(90%)", "&:hover": {filter:"none"}}}
          />
        </Box>
      </Carousel>
      <Box mt={5} mb={1}>
        <Button color="secondary" variant="contained" sx={{mx: 1}} size="large" startIcon={<PublicIcon/>}>Demo</Button>

        <Button color="secondary" variant="outlined" sx={{mx: 1}} size="large" startIcon={<GitHubIcon/>}>Git Repo</Button>
      </Box>
    </Stack>
  )
}

export default ProjectItemPreview


// https://github.com/Learus/react-material-ui-carousel