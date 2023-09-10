import { useState } from 'react'
import { Box, Typography, ButtonBase, Fade } from '@mui/material'
import AboutContent from './AboutContent';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const [ showContent, setShowContent ] = useState(false);
  const [ isUnmounted, setIsUnmounted ] = useState(false)
    
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    // triggerOnce: true
  });


  const handleClick = () => {
    setIsUnmounted(true)
    setTimeout(() => setShowContent(true), 1000)
  }
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
        overflow: "hidden"
      }}
      ref={ref}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,.1)", zIndex: -1}}></Box>

      {!showContent && <Fade appear={inView} in={inView} timeout={1100}  style={{ transitionDelay: "300ms" }}>
        <ButtonBase 
          align="center" 
          disableRipple
          onClick={handleClick}
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

            background: inView ? "rgba(0,0,0,.25)" : "none",
            ".content": {
                "&:hover ": {
                  transform: "scale(1.025)",
                  letterSpacing: 4.5,
                  borderColor: "primary.main",
                }
              }
          }}
          ref={ref}
        >
          <Fade appear={!isUnmounted} in={!isUnmounted} timeout={850} >
            <Box>
              <Box 
                sx={{
                  opacity: .6,
                  transition: "all 500ms ease-in-out",
                  textShadow: "1px 1px 7px rgba(10,10,10,.5)",
                  borderBottom: 2,
                  pb: .5,
                  letterSpacing: inView ? 3 : 2,
                  borderColor: "primary.dark",
                  transform: inView ? "scale(1.015)" : "scale(1)",

                }}
                className="content"
              >
                <Typography variant="h2" textTransform="none" fontWeight={200} fontSize={{xs: 40, sm: 50, md: 55, lg:60}}>Who Am I?</Typography>
              </Box>
            </Box>
          </Fade>
        </ButtonBase>
      </Fade>
      }
      <Box sx={{opacity: showContent ? 1 : 0}}>
        <AboutContent isVisible={showContent}/>
      </Box>
    </Box>  
  )
}

export default About