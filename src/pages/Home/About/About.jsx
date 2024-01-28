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
        // py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15},
        py: {xs:8, sm: 10, md: 12, lg: 16, xl: 20},
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
            // background: inView ? "rgba(0,0,0,.25)" : "none",
            background: inView ? "radial-gradient(rgba(30,30,30,.1) 0, rgba(0,0,0,.25) 45%)" : "none",
            transition: "all 800ms ease-in-out",
            ".content": {
              "&:hover ": {
                transform: "scale(1.025) skewX(-4deg)",
                letterSpacing: 4.5,
              }
            },
            "&:hover": {
            }
          }}
          ref={ref}
        >
          <Fade appear={!isUnmounted} in={!isUnmounted} timeout={850} >
            <Box>
              <Box 
                sx={{
                border: 3, 
                transform: "skewX(-4deg)",
                fontSize: { xs: "1.1rem", sm: "1.6rem", md: "1.65rem", lg: "1.8rem" },
                lineHeight: 1.4, 
                color: "white", 
                borderColor: "rgba(255,255,255,.35)",
                px: {xs: 2.5, sm:3.5, md:4, lg: 5},
                py: {xs:.85, sm: 1, md: 1.5, },
                fontWeight: 600,
                transition: "transform 200ms ease-in-out, border 200ms ease-in-out",
                fontFamily: "Manrope",
                textTransform: "uppercase",
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                "&:hover":{
                  opacity:1,
                  transform: "scale(1.02) skewX(-4deg)",
                  borderColor: "rgba(255,255,255,1)",
                }
                }}
                className="content"
              >
                <Typography variant="h2" fontWeight={200} fontSize={{xs: 40, sm: 50, md: 55, lg:60}} sx={{letterSpacing: {xs: 2.5, sm: 3, md: 4}}}>Who Am I?</Typography>
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