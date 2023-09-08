import { useState } from 'react'
import { Box, Typography, ButtonBase, Fade } from '@mui/material'
import AboutContent from './AboutContent';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';



const enterAnimation = keyframes`
  0% {
    transform: translateX(1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const About = () => {
  const [ showContent, setShowContent ] = useState(false);
    
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (
    <Box 
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        py: {xs:6, sm: 10, md: 11, lg: 12, xl: 15},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,.1)", zIndex: -1}}></Box>

      {!showContent && <ButtonBase 
        align="center" 
        disableRipple
        onClick={() => setShowContent(true)}
        sx={{
          position: "absolute", 
          top: 0, 
          left: 0, 
          height: "100%", 
          width: "100%",
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 800ms ease-in-out",
          "&:hover": {
            background: "rgba(0,0,0,.25)",
          },
          "&:hover .content": {
              transform: "scale(1.015)",
              opacity: 1,
              letterSpacing: 4.5,
              borderColor: "primary.main",
            }
        }}
        ref={ref}
      >
        <Fade appear={inView} in={inView} timeout={1100}  style={{ transitionDelay: "300ms" }}>
          <Box>
            <Box 
              sx={{
                opacity: .6,
                transition: "all 500ms ease-in-out",
                letterSpacing: 3,
                textShadow: "1px 1px 7px rgba(10,10,10,.5)",
                borderBottom: 2,
                pb: .5,
                borderColor: "primary.dark",
              }}
              className="content"
            >
              <Typography variant="h2" textTransform="none" fontWeight={200} fontSize={{xs: 40, sm: 50, md: 55, lg:60}}>Who Am I?</Typography>
            </Box>
          </Box>
        </Fade>
      </ButtonBase>}
      <Box sx={{opacity: showContent ? 1 : 0}}>
        <AboutContent isVisible={showContent}/>
      </Box>
    </Box>  
  )
}

export default About