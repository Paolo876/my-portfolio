import { useNavigate } from 'react-router-dom';
import { Stack, Button, Box } from '@mui/material';

import Image from 'mui-image';
import Carousel from 'react-material-ui-carousel';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./ProjectItemPreview.scss";

const ProjectItemPreview = ({ coverImage, images, url, githubUrl, title, name, logo, palette, isInView }) => {
  const navigate = useNavigate();
  const imagesList = [coverImage, ...images ];

  return (
  <Box>
      <Carousel 
        navButtonsAlwaysInvisible={true}
        autoPlay={isInView}
        stopAutoPlayOnHover={true}
        interval={3200}
      >
        {imagesList.map((item, index) => 
          <Box className="project-item-preview">
            <Box className="project-item-overlay-container" sx={{p: {xs:1, md:2}, display: {xs: "none", sm: "initial"}}}>
              <Stack className="project-item-content" sx={{border: 2, alignItems: "center", justifyContent: "center", px: {xs: "7%", md:"15%"}, borderColor: "rgba(255,255,255,.25)"}}>
                <Box>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    endIcon={<ArrowForwardIosIcon/>} 
                    sx={{fontWeight: 500, fontSize:{xs: 11, sm: 12, md:14}}} 
                    onClick={() => navigate(name, { state: {screenView : window.pageYOffset}})}
                  >
                    Read More About {title}
                  </Button>
                </Box>
        
                <Box sx={{background: "rgba(255,255,255,.2)", height: 3, width: "20%", mx: "auto", my: {xs: 2, md:4}}}></Box>

                <Box sx={{display: "flex", gap: {xs: 3, md:5}, pt: .5}}>
                  <Button variant="contained" endIcon={<PublicIcon/>} color="secondary" size="small" sx={{fontWeight: 500, fontSize:{xs: 11, sm: 12, md:13}}} href={url} target='_blank'>
                    Web Demo
                  </Button>
                  <Button variant="outlined" endIcon={<GitHubIcon/>} color="secondary" size="small" sx={{fontWeight: 600, fontSize:{xs: 11, sm: 12, md:13}}} href={githubUrl} target='_blank'>
                    Git Repo
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Image 
                src={item.url} 
                fit="scale-down"
                duration={300}
                sx={{filter: "brightness(.95)"}}
                key={index}
              />
          </Box>

        )}
      </Carousel>
      <Box sx={{display: {xs:"flex", md: "none"}, gap: 3, pt: .75, width: "100%", alignItems: "flex-start", justifyContent: "right", opacity: .9}}>
        <Button variant="contained" endIcon={<PublicIcon/>} color="secondary" size="small" sx={{fontWeight: 500, fontSize:{xs: 10, sm: 11}}} href={url} target='_blank'>
          Web Demo
        </Button>
        <Button variant="outlined" endIcon={<GitHubIcon/>} color="secondary" size="small" sx={{fontWeight: 600, fontSize:{xs: 10, sm: 11}}} href={githubUrl} target='_blank'>
          Git Repo
        </Button>
      </Box>
    </Box>
  )
}

export default ProjectItemPreview


// https://github.com/Learus/react-material-ui-carousel
// https://www.npmjs.com/package/react-intersection-observer <--intersection npm
// https://stackoverflow.com/questions/54807535/intersection-observer-api-observe-the-center-of-the-viewport  <-- if element is intersecting center of viewport
