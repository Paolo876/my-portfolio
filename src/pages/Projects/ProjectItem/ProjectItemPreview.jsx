import { useNavigate } from 'react-router-dom';
import { Stack, Button, Box } from '@mui/material';
import Image from 'mui-image';
import Carousel from 'react-material-ui-carousel';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./ProjectItemPreview.scss";

const ProjectItemPreview = ({ coverImage, images, url, githubUrl, title, name }) => {
  const navigate = useNavigate();
  const imagesList = [coverImage, ...images ];


  return (
  <Box className="project-item-preview">
    <Box className="project-item-overlay-container" sx={{p: 2}}>
      <Stack className="project-item-content" sx={{border: 2, alignItems: "center", justifyContent: "center", px: "15%", borderColor: "rgba(255,255,255,.25)"}}>
        <Box>
          <Button variant="outlined" color="primary" size="medium" endIcon={<ArrowForwardIosIcon/>} sx={{fontWeight: 500}} onClick={() => navigate(name, { state: {screenView : window.pageYOffset}})}>
            Read More About {title}
          </Button>
        </Box>
 
        <Box sx={{background: "rgba(255,255,255,.2)", height: 3, width: "20%", mx: "auto", my: 4}}></Box>

        <Box sx={{display: "flex", gap: 5, pt: .5}}>
          <Button variant="contained" endIcon={<PublicIcon/>} color="secondary" size="small" sx={{fontWeight: 500}} href={url} target='_blank'>
            Web Demo
          </Button>
          <Button variant="outlined" endIcon={<GitHubIcon/>} color="secondary" size="small" sx={{fontWeight: 600}} href={githubUrl} target='_blank'>
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
            key={index}
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
