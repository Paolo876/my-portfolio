import React from 'react'
import testImage from "../../assets/test_proj_img.png"
import Image from 'mui-image'

import { ButtonBase, Stack, Button, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';


const ProjectItemPreview = ({ coverImage, images, url, githubUrl }) => {

  return (
    <Stack sx={{height: "100%"}}>
      <ButtonBase>
        <Image 
          src={testImage} 
          // height={height}
          // width={width}
          
          fit="scale-down"
          // duration={duration}
          // bgColor={bgColor}
          // sx={{filter: "grayscale(10%) contrast(90%)", "&:hover": {filter:"none"}}}
        />
      </ButtonBase>
      <Box mt="auto" mb={1}>
        <Button color="secondary" variant="contained" sx={{m: .5}} size="large" startIcon={<PublicIcon/>}>Demo</Button>

        <Button color="secondary" variant="outlined" sx={{m: .5}} size="large" startIcon={<GitHubIcon/>}>Git Repo</Button>
      </Box>
    </Stack>
  )
}

export default ProjectItemPreview